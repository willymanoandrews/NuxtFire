import stripe
import os
import json
from dotenv import load_dotenv
from firebase_functions import https_fn, options, firestore_fn
from firebase_admin import firestore, initialize_app

# Load environment variables from .env file
load_dotenv()

# Initialize Firebase Admin
app = initialize_app()
db = firestore.client()

# Stripe configuration
stripe.api_key = os.getenv("STRIPE_API_KEY")
stripe_webhook_secret = os.getenv("STRIPE_WEBHOOK_SECRET")

@https_fn.on_request(cors=options.CorsOptions(cors_origins="*", cors_methods=["get", "post"]))
def create_subscription(req: https_fn.Request) -> https_fn.Response:
    try:
        data = req.get_json()
        print("Received data:", data)  # Log the received data

        email = data.get('email')
        uid = data.get('uid')  # Get the uid from the request
        payment_method_id = data.get('payment_method_id')  # Add payment method ID
        price_id = 'price_1PvMqgKLZeaTTLBfPLQTlapx'  # Add correct price ID for the subscription

        if not email or not payment_method_id or not price_id or not uid:
            raise ValueError("Missing required fields: email, payment_method_id, price_id, or uid")

        # Step 1: Create a new customer in Stripe
        customer = stripe.Customer.create(
            email=email,
            payment_method=payment_method_id,
            invoice_settings={
                'default_payment_method': payment_method_id,
            }
        )

        # Store customer ID, email, and uid in Firestore
        db.collection('customers').document(customer.id).set({
            'email': email,
            'uid': uid  # Store the uid along with the email
        })

        # Step 2: Create the subscription
        subscription = stripe.Subscription.create(
            customer=customer.id,
            items=[
                {"price": price_id},  # Subscription price ID
            ],
            expand=["latest_invoice.payment_intent"]
        )

        # Step 3: Return the client secret to confirm payment on the client side
        return https_fn.Response(json.dumps({
            "subscriptionId": subscription.id,
            "paymentIntentClientSecret": subscription.latest_invoice.payment_intent.client_secret
        }), mimetype='application/json')

    except Exception as e:
        print(f"Error: {str(e)}")  # Log the error
        return https_fn.Response(json.dumps({"error": str(e)}), status=400, mimetype='application/json')

# Stripe Webhook Function to listen for subscription and payment events
@https_fn.on_request(cors=options.CorsOptions(cors_origins="*", cors_methods=["post"]))
def stripe_webhook(req: https_fn.Request) -> https_fn.Response:
    payload = req.get_data(as_text=True)
    sig_header = req.headers.get('Stripe-Signature')

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, stripe_webhook_secret
        )
    except ValueError as e:
        # Invalid payload
        print("Invalid payload:", e)
        return https_fn.Response("Invalid payload", status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        print("Invalid signature:", e)
        return https_fn.Response("Invalid signature", status=400)

    # Handle various subscription and payment events
    if event['type'] in [
        'customer.created',
        'customer.subscription.created',
        'invoice.created',
        'invoice.finalized',
        'invoice.paid',
        'invoice.payment_failed',
        'payment_intent.succeeded',
        'customer.subscription.updated',
        'customer.subscription.deleted'
    ]:
        print(f"Received event: {event['type']}")
        event_data = event['data']['object']
        customer_id = event_data.get('customer')

        if customer_id:
            customer_ref = db.collection('customers').document(customer_id)

            # Handle the specific events
            if event['type'] == 'customer.created':
                customer_ref.collection('customer_created').add(event_data)
            elif event['type'] == 'customer.subscription.created':
                customer_ref.collection('subscription_created').add(event_data)
            elif event['type'] == 'invoice.created':
                customer_ref.collection('invoice_created').add(event_data)
            elif event['type'] == 'invoice.finalized':
                customer_ref.collection('invoice_finalized').add(event_data)
            elif event['type'] == 'invoice.paid':
                customer_ref.collection('invoice_paid').add(event_data)
            elif event['type'] == 'invoice.payment_failed':
                customer_ref.collection('invoice_payment_failed').add(event_data)
            elif event['type'] == 'payment_intent.succeeded':
                customer_ref.collection('payment_intent_succeeded').add(event_data)
            elif event['type'] == 'customer.subscription.updated':
                customer_ref.collection('subscription_updated').add(event_data)
            elif event['type'] == 'customer.subscription.deleted':
                customer_ref.collection('subscription_deleted').add(event_data)

    return https_fn.Response(status=200)


# Firestore Trigger for successful subscription payments
@firestore_fn.on_document_created(document="customers/{customerId}/invoice_paid/{docId}")
def on_subscription_payment_succeeded(event: firestore_fn.Event[firestore.DocumentSnapshot]) -> None:
    db = firestore.client()
    payment_data = event.data.to_dict()

    # Check the status to ensure it's 'paid'
    status = payment_data.get('status', None)
    transaction_id = payment_data.get('id', None)
    amount_paid = payment_data.get('amount_paid', None)  # Capture amount paid for email receipt

    # Convert cents to dollars
    amount_paid_dollars = f"${amount_paid / 100:.2f}" if amount_paid else "unknown amount"

    # Check if the invoice has been paid successfully
    if status == "paid" and transaction_id:
        customer_id = event.data.reference.parent.parent.id
        customer_ref = db.collection('customers').document(customer_id)
        customer_data = customer_ref.get().to_dict()
        email = customer_data.get('email', None)
        uid = customer_data.get('uid', None)  # Get uid from the customer data

        if email:
            # Send confirmation email
            mail_doc = {
                'to': [email],
                'message': {
                    'subject': 'Your subscription to the Gay Nation is now active!',
                    'text': f'Thank you for your subscription. We have received a payment of {amount_paid_dollars}. '
                            f'Your transaction ID is {transaction_id}.',
                    'html': f'<p>Thank you for your subscription. We have received a payment of '
                            f'<strong>{amount_paid_dollars}</strong>. Your transaction ID is '
                            f'<strong>{transaction_id}</strong>.</p>'
                }
            }
            db.collection('mail').add(mail_doc)
            print(f"Email sent to {email}")

        if uid:
            # Update the user's role to 'premium'
            user_ref = db.collection('users').document(uid)
            user_ref.update({
                'role': 'premium'
            })
            print(f"User {uid}'s role updated to premium.")

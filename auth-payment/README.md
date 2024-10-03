### Prerequisites

Before you can start with this boilerplate, make sure you have the following installed and configured:

### 1. Node.js & npm
Ensure that you have Node.js (version 14.x or higher) and npm installed.
To check if they are installed, run the following commands in your terminal:

```bash
node -v
npm -v
```

If not installed, download and install them from [https://nodejs.org/](https://nodejs.org/).

### 2. Firebase CLI

The Firebase CLI is required to manage Firebase services and run emulators locally.
Install the Firebase CLI by running the following command:

```bash
npm install -g firebase-tools
```

After installation, make sure to login to Firebase by running:

```bash
firebase login
```

### 3. Firebase Project

You will need a Firebase project for this boilerplate. If you don't have one, you can create it in the [Firebase Console](https://console.firebase.google.com/).

### 4. Stripe Account
You will need a Stripe account and API keys to process payments.

- Sign up at [Stripe](https://stripe.com) and obtain your API keys.
- Additionally, install the Stripe CLI for testing webhooks locally:

  To install the Stripe CLI, follow the official instructions at [Stripe CLI Documentation](https://stripe.com/docs/stripe-cli).

With the Stripe CLI, you can easily test webhooks and ensure that payment flows work properly in your local environment.

**Additional Requirement:**
You will need to create a product in Stripe with a **subscription payment type** to obtain a Stripe Price ID. This Price ID is required in the `auth-payment` template for subscription-based services.

- Go to your Stripe Dashboard and create a product under **Products** with a recurring payment option.
- Once created, retrieve the **Price ID** for the product, which will be used in your environment configuration.

### 5. .env File Setup for Nuxt

For the `auth-payment` template's Nuxt.env file, you will need to configure the following environment variables. Ensure that you have the required Firebase and Stripe credentials to complete the setup.

#### Firebase Configuration
You will need your Firebase configuration details.

```bash
FIREBASE_API_KEY=your-api-key-here
FIREBASE_AUTH_DOMAIN=your-auth-domain-here.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id-here
FIREBASE_STORAGE_BUCKET=your-storage-bucket-here.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id-here
FIREBASE_APP_ID=your-app-id-here
FIREBASE_MEASUREMENT_ID=your-measurement-id-here
```

#### Stripe Configuration

For the payment integration, you'll need your Stripe Publishable Key and Price ID. The Price ID should be associated with the subscription product you created in Stripe.

**Important:** When developing and testing the payment flows, make sure to use **test keys** from Stripe, not the production keys. You can find your test keys in the Stripe Dashboard under the "Developers" section. Production keys should only be used in a live environment.

```bash
STRIPE_PUBLISHABLE_KEY=insert_your_stripe_publishable_key_here
STRIPE_PRICE_ID=insert_your_stripe_price_id_here
```

#### Base URL

You will need the URL for the backend API that handles payments. In local development, this will be the Firebase function URL that processes the payment. You will see the function URL when you run the Firebase functions emulator, for example:

```bash
NUXT_PUBLIC_PAYMENT_API_URL=http://localhost:5001/your-project-id/us-central1/your-function-name
```

This URL will be generated after running Firebase emulators for functions. Make sure to replace it with the correct URL when deploying to production.

### 6. .env File Setup for Firebase

These variables are required for processing payments and handling Stripe webhooks in Firebase functions:

```bash
STRIPE_API_KEY=your-stripe-api-key-here
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret-here
```

**Note:** The `STRIPE_WEBHOOK_SECRET` is generated when you use the Stripe CLI to listen to your webhook function.

This secret is essential for verifying webhook events sent to your Firebase function.

**Important:** When developing and testing the payment flows, make sure to use **test keys** from Stripe, not the production keys. You can find your test keys in the Stripe Dashboard under the "Developers" section. Production keys should only be used in a live environment.




# Auth Payment Template

This directory contains an authentication and payment template using Nuxt 3 and Firebase. It provides user sign-up, login functionality, and payment integration with Stripe. This template also includes middleware protection for premium content and examples of Stripe integration for subscription and one-time payments.

## Getting Started

Follow the steps below to set up the auth-payment template:

### 1. Clone the Repository
Start by cloning the main repository:

```bash
git clone git@github.com:willymanoandrews/NuxtFireProd.git
```

### 2. Copy the `auth-payment` Directory
Navigate into the project and copy the `auth-payment` directory into a new directory where you'd like to start your project:

```bash
cp -r auth-payment <your-new-directory-name>
cd <your-new-directory-name>
```

### 3. Install Dependencies
Make sure you have Node.js and npm installed. Then, run the following command to install the necessary dependencies:

```bash
npm install
```

### 4. Create an .env File
Create a new `.env` file in the root directory of your project and add your Firebase and Stripe project details. These include your Stripe API keys, webhook signing secret, and Firebase configuration.

### 5. Initialize Firebase in the Project Directory
If you haven't already installed Firebase tools, follow these steps to initialize Firebase in your project directory:

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```
2. **Login to Firebase** (if not already logged in):
   ```bash
   firebase login
   ```

3. **Initialize Firebase Functions** (if not already logged in):
   ```bash
   firebase init functions
   ```
When prompted:
- Select your Firebase project.
- Choose Python for the functions runtime.
- Do not install dependencies yet (you'll do this later).

### 6. Navigate to Functions Directory and Install Dependencies
Once Firebase initialization is complete:
- Navigate to the 'functions' directory:

```bash
cd functions
```

- Copy/paste the `requirements.txt` and `main.py` into the `functions` directory.
- On macOS or Linux: Run the following command to activate the virtual environment:

```bash
source venv/bin/activate
```

- On Windows: Run the following command:

```bash
.\venv\Scripts\activate
```

- Install the necessary dependencies:

```bash
pip install -r requirements.txt
```

- After the installation, test your functions locally using Firebase Emulators:

```bash
firebase emulators:start
```

- After starting the emulators retrieve your functions URL:

```bash
✔ functions[us-central1-create_subscription]: http function initialized (http://127.0.0.1:5001/your-project/us-central1/create_subscription)
```

- Use the Stripe CLI to test your webhook function. For example, use the following command to forward events to your webhook URL:

```bash
stripe listen --forward-to http://127.0.0.1:5001/your-project/us-central1/stripe_webhook
```

- Create an `.env` file in the functions directory using your Stripe API key (testing) and the webhook signing secret obtained from the Stripe CLI.

- Example `.env` content:

```bash
STRIPE_API_KEY=sk_test_your_stripe_api_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_signing_secret
```

- Initiliaze Firebase Emulators:

```bash
firebase init emulators
```

- When prompted, select `Auth` and `Firestore` emulators
- Use the default ports for the emulators.
- Enable the Emulator UI and download the emulators if prompted:

```bash
firebase emulators:start
```

- Ensure that the emulators are running properly before proceeding. You should see the local services initialized and ready for use.

- Once the emulators are running correctly, install the Firebase extension to send emails from Firestore. This will allow you to automatically send emails when triggered by events:

```bash
firebase ext:install firebase/firestore-send-email@0.1.34
```

Follow the prompts to configure the extension:

1. Grant the necessary roles for the extension to send emails.
2. Enter your SMTP URI details (you will need this information from your email provider).
3. Choose where to store the secret (e.g., local file or a secure environment).
4. Enter the SMTP password when prompted.
5. Set the default Firestore collection to store email data (keep it as the default `mail` collection unless you want a custom one).
6. Enter the default "from" email address (this will be the sender of your outgoing emails).
7. Optionally, configure TTL (Time-to-Live) if needed to automatically delete documents after a set time.
8. Choose default values or customize the extension configuration as needed.

### 7. Test the Firebase Extension

After configuring the extension, test that it's working by triggering an email send from Firestore. Add a document to the Firestore `mail` collection and ensure the email is sent through your SMTP server.

### 8. Add Your .env File

Add your working `.env` file based on the `.env.example` provided. This file should be placed in the root directory of your Nuxt project, separate from the `.env` file used for Firebase functions.


### 9. Run the Development Server

Make sure your Firebase emulators are still running. Then, run the Nuxt 3 development server:

```bash
npm run dev
```
Your application should now be running locally, and you can test user sign-up, login, payment flows, and email notifications.

### 10. Test and Code

Verify that all authentication and payment flows are working as expected. Check that emails are sent when appropriate (e.g., after a successful payment).

From here, you can customize the code and start building your project!

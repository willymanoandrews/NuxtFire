
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

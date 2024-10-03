# Nuxt 3 + Firebase Boilerplate Service

This repository contains multiple boilerplate templates for building Nuxt 3 projects with Firebase integrations. Each directory serves a specific use case, providing you with ready-to-use code templates.

## Available Boilerplates

### 1. Basic Site
- **Directory:** `basic-site`
- **Description:** A simple 5-page website template, perfect for small business websites.
- **Features:**
  - Home page, About page, Services page, Projects page, Contact page.
  - Integrated with Flowbite Tailwind CSS components.

### 2. Auth Basic
- **Directory:** `auth-basic`
- **Description:** A basic user authentication template using Firebase for sign-up and login functionality.
- **Features:**
  - Firebase authentication integration.
  - Middleware protection for routes.

### 3. Auth Payment
- **Directory:** `auth-payment`
- **Description:** A user authentication and payment boilerplate for premium access.
- **Features:**
  - Firebase authentication with payment integration.
  - Middleware to restrict access to premium content for non-paying users.
  - Example of Stripe integration for recurring payments.
  - Includes backend functions for Stripe webhook processing.
  - Automatically sends email receipts to users after successful payments.

### 4. One-Time Payment
- **Directory:** `one-time-payment`
- **Description:** A boilerplate for creating one-time payment flows, suitable for selling plans (e.g., PDF downloads or access to exclusive content).
- **Features:**
  - Simple Stripe integration for one-time payments.
  - Backend functions for processing Stripe webhooks and handling payments.
  - Ready-to-use checkout and payment confirmation flows.
  - Email receipt sent to users upon successful payment.

### 5. Flowbite Components
- **Directory:** `flowbite-components`
- **Description:** Pre-built Flowbite Tailwind CSS components converted to Vue files for easy integration into your project.
- **Features:**
  - Ready-made UI components for building interfaces quickly.

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
If you are using the `auth-payment` or `one-time-payment` templates, you will need a Stripe account and API keys to process payments.

- Sign up at [Stripe](https://stripe.com) and obtain your API keys.
- Additionally, install the Stripe CLI for testing webhooks locally:

  To install the Stripe CLI, follow the official instructions at [Stripe CLI Documentation](https://stripe.com/docs/stripe-cli).

With the Stripe CLI, you can easily test webhooks and ensure that payment flows work properly in your local environment.

### 5. .env File Setup

Ensure that you have the necessary Firebase and Stripe configuration variables ready to be placed in the .env files. You will configure these details in the specific sections for each template.

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

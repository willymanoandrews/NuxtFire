# Nuxt 3 + Firebase Boilerplate Service

This repository contains multiple boilerplate templates for building Nuxt 3 projects with Firebase integrations. Each directory serves a specific use case, providing you with ready-to-use code templates.

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

### Key Modules and Features

This boilerplate takes advantage of several powerful Nuxt modules and features to streamline development and enhance functionality:

#### 1. Nuxt SEO Module
- **Module:** [`@nuxtjs/seo`](https://nuxtseo.com/)
- **Description:** This module simplifies managing SEO-related meta tags and Open Graph properties. It automatically generates SEO-friendly meta tags for each page and ensures best practices for search engines.

**Features:**
  - A collection of responsive and customizable components.
  - Simple integration into your project.

### 2. Flowbite Tailwind CSS
**Module:** flowbite
**Description:** Flowbite is a Tailwind CSS component library. Pre-built UI components help accelerate development.

**Features:**
  - A collection of responsive and customizable components.
  - Simple integration into your project.

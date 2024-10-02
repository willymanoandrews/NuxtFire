
# Auth Basic Template

This directory contains a simple authentication template using Nuxt 3 and Firebase. It provides basic user sign-up and login functionality, with Firebase integration for authentication.

## Getting Started

Follow the steps below to set up the auth-basic template:

### 1. Clone the Repository
Start by cloning the main repository:

```bash
git clone git@github.com:willymanoandrews/NuxtFireProd.git
```

### 2. Copy the `auth-basic` Directory
Navigate into the project and copy the `basic-site` directory into a new directory where you'd like to start your project:

```bash
cp -r basic-site <your-new-directory-name>
cd <your-new-directory-name>
```

### 3. Install Dependencies
Make sure you have Node.js and npm installed. Then, run the following command to install the necessary dependencies:

```bash
npm install
```

### 4. Create an .env File
Create a new `.env` file in the root directory of your project and fill in the Firebase configuration details as needed.

### 5. Initialize Firebase
Initialize Firebase in your project by running the following command:

```bash
firebase init
```

When prompted:

- Select the **Emulators** option.
- Choose your Firebase project.
- Enable the **Authentication** and **Firestore** emulators.

### 6. Enable Firebase UI
Enable Firebase's Authentication UI by configuring it in your Firebase console or adding Firebase UI to your project as needed.

### 7. Download Firebase Emulators
If not already installed, download the Firebase emulators when prompted or manually install them.

### 8. Start Firebase Emulators
To start the Firebase emulators locally, run the following command:

```bash
firebase emulators:start
```

### 9. Run the Development Server
Once the emulators are running, you can start the Nuxt 3 development server with:

```bash
npm run dev
```

### 10. Test and Code
You're now ready to start building! Test the authentication features and start coding your project.

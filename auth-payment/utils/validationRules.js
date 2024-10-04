// src/utils/validationRules.js
//
// This file contains utility functions for form validation.
// It provides validation rules for email, password, and confirm password fields,
// returning specific error messages based on the input values.
// These functions are typically used in authentication forms to validate user input.

export const validateEmail = (emailValue) => {
  if (!emailValue) {
    return "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
    return "Please enter a valid email address.";
  } else {
    return "";
  }
};

export const validatePassword = (passwordValue) => {
  if (!passwordValue) {
    return "Password is required.";
  } else if (passwordValue.length < 6) {
    return "Password must be at least 6 characters long.";
  } else {
    return "";
  }
};

export const validateConfirmPassword = (
  passwordValue,
  confirmPasswordValue,
) => {
  if (!confirmPasswordValue) {
    return "Please confirm your password.";
  } else if (passwordValue !== confirmPasswordValue) {
    return "Passwords do not match.";
  } else {
    return "";
  }
};

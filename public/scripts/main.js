
// Importing auth scripts
import { toggleLogin, closeToggleLogin } from './auth/login.js';
import { toggleSignup, closeToggleSignup } from './auth/signup.js';

// Initialize scripts
document.addEventListener('DOMContentLoaded', () => {
  // Initialize login
  window.toggleLogin = toggleLogin;
  window.closeToggleLogin = closeToggleLogin;

  // Initialize Signup
  window.toggleSignup = toggleSignup;
  window.closeToggleSignup = closeToggleSignup;

  // Page-specific initialization
});

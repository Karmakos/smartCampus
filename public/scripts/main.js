// Importing auth scripts
import { toggleLogin, closeToggleLogin } from './auth/login.js';
import { toggleSignup, closeToggleSignup } from './auth/signup.js';
import { getStarted } from './pages/home.js';


// Initialize scripts
document.addEventListener('DOMContentLoaded', () => {
  // Initialize login
  window.toggleLogin = toggleLogin;
  window.closeToggleLogin = closeToggleLogin;

  // Initialize Signup
  window.toggleSignup = toggleSignup;
  window.closeToggleSignup = closeToggleSignup;

  // Page-specific initialization
  window.getStarted = getStarted;
});

// Importing auth scripts
import { toggleLogin, closeToggleLogin } from './auth/login.js';
import { toggleSignup, closeToggleSignup } from './auth/signup.js';
import { getStarted } from './pages/home.js';
<<<<<<< HEAD
import { donationPage} from './pages/donation.js';
=======
>>>>>>> 0e7e5c0680b51b9d5f414e43683d8c0336651d27


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
<<<<<<< HEAD
  window.donationPage = donationPage;
=======
>>>>>>> 0e7e5c0680b51b9d5f414e43683d8c0336651d27
});

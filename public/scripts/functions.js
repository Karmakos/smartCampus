
function toggleLogin() {
const loginSection = document.getElementById('login');
if (loginSection.style.display === 'none' || loginSection.style.display === '') {
loginSection.style.display = 'block';
}
}

function toggleSignup() {
    const loginSection = document.getElementById('signup');
    if (loginSection.style.display === 'none' || loginSection.style.display === '') {
    loginSection.style.display = 'block';
    }
    }

function closeToggle() {
    document.getElementById('login').style.display = 'none';  
    document.getElementById('signup').style.display ='none';
}
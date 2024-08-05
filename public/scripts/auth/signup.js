export function toggleSignup() 
{
    const loginSection = document.getElementById('signup');
    if (loginSection.style.display === 'none' || loginSection.style.display === '') {
    loginSection.style.display = 'block';
    }
}

export function closeToggleSignup() 
{
    document.getElementById('signup').style.display ='none';
}

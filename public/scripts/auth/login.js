export function toggleLogin() {
    const loginSection = document.getElementById('login');
    if (loginSection.style.display === 'none' || loginSection.style.display === '') {
    loginSection.style.display = 'block';
    }
    }
    
export function closeToggleLogin() 
{
        document.getElementById('login').style.display = 'none';  
}

function validateEmail(email) 
{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateForm() 
{
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');

    emailError.innerText = '';

    if (!validateEmail(email)) 
    {
        emailError.innerText = 'Domain name not included';
        return false;
    }
    return true;
}  

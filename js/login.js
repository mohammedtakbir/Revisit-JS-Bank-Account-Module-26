document.getElementById('submit-btn').addEventListener('click', () => {
    const emailField = document.getElementById('email-field');
    const emailText = emailField.value;

    const passwordField = document.getElementById('password-field');
    const passwordText = passwordField.value;

    if(emailText === 'takbir@gmail.com' && passwordText === 'tkbr'){
        window.location.href = '/bank.html';
    }else if(emailText.length < 1 && passwordText.length < 1){
        alert('Please insert your Email and Password');
        return;
    }
    else{
        alert('Please insert valid info');
        return;
    }
})
const signup = async function(event){
    event.preventDefault();

    const usernameInput = document.querySelector('#username').value;
    const passwordInput =  document.querySelector('#password').value;

    await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameInput,
            password: passwordInput
        }),
        headers: { 'Content-Type': 'application/json'}
    })
}

document.querySelector('#signupForm').addEventListener('submit', signup)
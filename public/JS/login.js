const login = async function(event){
    event.preventDefault();

    const usernameInput = document.querySelector('#username').value;
    const passwordInput =  document.querySelector('#password').value;

    await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameInput,
            password: passwordInput
        }),
        headers: { 'Content-Type': 'application/json'}
    })
//add conditional to check if response is ok and redirect user to the dashboard

}

document.querySelector('#loginForm').addEventListener('submit', login)
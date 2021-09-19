const login = async function (event) {
  event.preventDefault();

  const usernameInput = document.querySelector("#username").value;
  const passwordInput = document.querySelector("#password").value;

  const fetchResponce = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameInput,
      password: passwordInput,
    }),
    headers: { "Content-Type": "application/json" },
  });
  //add conditional to check if response is ok and redirect user to the dashboard
  console.log(fetchResponce);
  const body = await fetchResponce.json();
  console.log(body);
  if(fetchResponce.status == 200){
    window.location.replace('/dashboard');
  }
};

document.querySelector("#loginForm").addEventListener("submit", login);

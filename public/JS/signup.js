const signup = async function (event) {
  event.preventDefault();

  const usernameInput = document.querySelector("#username").value;
  const passwordInput = document.querySelector("#password").value;

  const fetchResponce = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameInput,
      password: passwordInput,
    }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(fetchResponce);
  if(fetchResponce.status == 200){
    window.location.replace('/dashboard/');
  }
};

document.querySelector("#signupForm").addEventListener("submit", signup);

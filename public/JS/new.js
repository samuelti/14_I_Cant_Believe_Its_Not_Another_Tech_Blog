const newPost = async function (event) {
  event.preventDefault();

  const titleValue = document.querySelector("#post-title").value;
  const bodyValue = document.querySelector("#post-body").value;

  const fetchResponce = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({
      title: titleValue,
      body: bodyValue,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (fetchResponce.status == 200) {
    window.location.replace("/dashboard");
  }
};

document.querySelector("#newPost").addEventListener("submit", newPost);

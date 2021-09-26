const updatePost = async function (event) {
    event.preventDefault();
  
    const titleValue = document.querySelector("#post-title").value;
    const bodyValue = document.querySelector("#post-body").value;
    const idValue = document.querySelector('#post-id').value;
  
    const fetchResponce = await fetch(`/api/post/${idValue}`, {
      method: "PUT",
      body: JSON.stringify({
        title: titleValue,
        body: bodyValue,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(fetchResponce);
    if (fetchResponce.status == 200) {
      window.location.replace("/dashboard");
    }
  };
  
  document.querySelector("#updatePost").addEventListener("submit", updatePost);
  
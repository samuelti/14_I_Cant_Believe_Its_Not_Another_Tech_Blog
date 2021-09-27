const deletePost = async function (event) {
    event.preventDefault();

    const idValue = document.querySelector('#post-id').value;
  
    const fetchResponce = await fetch(`/api/post/${idValue}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    console.log(fetchResponce);
    if (fetchResponce.status == 200) {
      window.location.replace("/dashboard");
    }
  };
  
  document.querySelector("#deletePost").addEventListener("submit", deletePost);
  
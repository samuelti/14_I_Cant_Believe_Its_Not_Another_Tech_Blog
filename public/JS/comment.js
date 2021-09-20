const newComment = async function (event) {
    event.preventDefault();
  
    const commentValue = document.querySelector("#commentBody").value;
    const postIdValue = document.querySelector('#post-id').value;

    const fetchResponce = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        body: commentValue,
        postId: postIdValue
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(fetchResponce);
    if (fetchResponce.status == 200) {
      window.location.replace(`/Post/${postIdValue}`);
    }
  };
  
  document.querySelector("#new-comment").addEventListener("submit", newComment);
  
const newPost = async function (event){
    event.preventDefault();

    const titleValue = document.querySelector('input[name="post-title"]').value;
    const bodyValue = document.querySelector('input[name="post-body"]').value;


    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            titleValue,
            bodyValue
        }),
        headers: { "Content-Type": "application/json"}
    });
}

document.querySelector('#newPost').addEventListener('submit', newPost);
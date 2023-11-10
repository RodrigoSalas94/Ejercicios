async function fetchPosts(){
    try {
        const response = await fetch (` https://jsonplaceholder.typicode.com/posts`);
        
        const data = await response.json();

        document.getElementById(`contador`).innerHTML = `Cantidad de posts: <strong>${data.length}</strong>`;

        document.getElementById(`post`).innerHTML = `Primer post: <strong>${data[0].title}</strong>`;
    } catch (error) {
        alert("Ha ocurrido un error");
    }
}
fetchPosts()


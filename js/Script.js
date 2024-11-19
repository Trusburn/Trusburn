document.addEventListener("DOMContentLoaded", () => {
    fetchComments();
});

function fetchComments() {
    fetch('fetch_comments.php')
        .then(response => response.json())
        .then(data => {
            const commentsSection = document.getElementById("comments");
            commentsSection.innerHTML = "";
            data.forEach(comment => {
                const commentDiv = document.createElement("div");
                commentDiv.classList.add("comment");
                commentDiv.innerHTML = `<strong>${comment.name}</strong> <p>${comment.comment}</p>`;
                commentsSection.appendChild(commentDiv);
            });
        });
}
console.log("page loaded...");

function addLikes(num) {
    var likes = document.querySelector(`#likes_${num}`);
    likes.textContent = parseInt(likes.textContent) + 1;
}
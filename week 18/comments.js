document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.querySelector('.login-input').value = name
    }
    let avatar = localStorage.getItem('avatar');
    if (avatar != null) {
        document.querySelector('.avatar').value = avatar
    }
})

function checkSpam() {
    let comment = document.querySelector('.comment-area');
    let author = document.querySelector('.login-input').value;
    let avatar = document.querySelector('.avatar').value;

    if (!comment) {
        return
    }
    let text = comment.value;
    text = text.replace(/viagra/gi, "***");
    text = text.replace(/XXX/gi, "***");
    document.querySelector('.visual').innerHTML += author + ':' + text + '<br>';
    document.querySelector('.avatar-img').src = avatar;
    if (localStorage.getItem('name') === null) {
        localStorage.setItem('name', author);
    }
    if (localStorage.getItem('avatar') === null) {
        localStorage.setItem('avatar', avatar);
    }

}
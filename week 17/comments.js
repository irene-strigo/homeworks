function checkSpam() {
    let comment = document.querySelector('.comment-area');
    if (!comment) {
        return
    }
    let text = comment.value;
    text = text.replace(/viagra/gi, "***");
    text = text.replace(/XXX/gi, "***");
    document.querySelector('.visual').innerHTML = text;

}
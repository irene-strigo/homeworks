formbutton.onclick = function (event) {
    event.preventDefault();
    let form = document.querySelector('.petsowner-container');
    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => response.json())
        .then(form => {
            console.log(form);
        })
        .catch(error => console.log(error))

}
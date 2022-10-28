document.addEventListener("DOMContentLoaded", function (event) {
    getPlanets();

})

function getPlanets() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=fGa6ndYimsNWAto9YL6xv148NovonNPKO1yy6B6t')
        .then(response => response.json())
        .then(title => {
            console.log(title.date)
            document.querySelector('.date').innerText = title.date
            console.log(title.explanation)
            document.querySelector('.text').innerText = title.explanation
            console.log(title.hdurl)
            document.querySelector('.galaxy').src = title.hdurl
        })
        .catch(error => console.log(error))
}
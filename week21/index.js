function onSearch() {
    let gifTheme = document.querySelector('#gifSearch').value;
    fetch('https://api.giphy.com/v1/gifs/search?api_key=FS7FBoDLWkxB0QtJAVqowJQDXWlfrNx2&limit=5&q=' + gifTheme)
        .then(response => response.json())
        .then(result => {
            const resultDiv = document.querySelector('.result')
            resultDiv.innerHTML = ''
            if (result.data && result.data.length > 0) {
                result.data.forEach(item => {
                    resultDiv.innerHTML += `<img class="pict"src=${item.images.original.url}><br>`
                });
            }
        })
        .catch(error => console.log(error))
}
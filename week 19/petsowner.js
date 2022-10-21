class Cat {
    constructor(catname, yourname, address, cattype, catfood, catweight, catsex, catinfo) {
        this.catname = catname; //1 кличка
        this.yourname = yourname; //2 имя хозяина
        this.address = address; //3 адрес
        this.cattype = cattype; //4 порода
        this.catfood = catfood //5 что ест
        this.catweight = catweight //6 вес
        this.catsex = catsex //7 пол
        this.catinfo = catinfo //8 информация
    }
}

function showCat() {
    let mcatname = document.querySelector('#petname').value
    let myourname = document.querySelector('#youname').value
    let maddress = document.querySelector('#address').value
    let mcattype = document.querySelector('#cattype').value
    let mcatfood = Array.from(document.querySelectorAll('input[name=food]:checked')).map(input => input.parentNode.childNodes[0].textContent).join(', ')
    let mcatweight = document.querySelector('#catweight').value
    let mcatsex = document.querySelector('input[name=sex]:checked').value
    let mcatinfo = document.querySelector('#info').value


    let mycat = new Cat(mcatname, myourname, maddress, mcattype, mcatfood, mcatweight, mcatsex, mcatinfo)
    document.querySelector('#result').innerHTML =
        `Данные питомца: <br> Кличка - ${mycat.catname}<br> Имя хозяина - ${mycat.yourname}<br> Адрес - ${mycat.address}<br> Мой питомец - ${mycat.cattype}<br> Питомец ест - ${mycat.catfood}<br> Вес питомца - ${mycat.catweight} кг<br> Пол питомца - ${mycat.catsex}<br> Дополнительная информация - ${mycat.catinfo}`
}
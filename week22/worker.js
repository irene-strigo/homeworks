class Worker {
    constructor(name, surname, rate, days) {
        this.name = name; //имя
        this.surname = surname; //фамилия
        this.rate = rate; //ставка
        this.days = days; //дни
    }
    getSalary(days, rate) {
        let salary = this.days * this.rate
        return salary
    }
}
const errorDiv = document.getElementById('error')
window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
    errorDiv.innerHTML = 'Отсутствует подключение к интернету'
});



function showSalary() {
    errorDiv.innerHTML = ''
    let vname = document.querySelector('#name').value
    let vsurname = document.querySelector('#surname').value
    let vrate = document.querySelector('#rate').value
    let vdays = document.querySelector('#days').value
    let vasya = new Worker(vname, vsurname, vrate, vdays)
    console.log(vasya)


    try {

        if (vname === '') {
            throw new SyntaxError("Данные неполны: нет имени")
        }
        if (vsurname === '') {
            throw new SyntaxError("Данные неполны: нет фамилии")
        }
        if (vrate === '') {
            throw new SyntaxError("Данные неполны: нет данных ставки")
        }
        if (vdays === '') {
            throw new SyntaxError("Данные неполны: не указано количество дней")
        }
        /*if (this.status != 200) {
            throw new SyntaxError("Невозможно связаться с сервером")
        }*/
        else {
            document.querySelector('#result').innerHTML = `Зарплата сотрудника ${vasya.name} ${vasya.surname} составляет ${vasya.getSalary()} руб.`
        }

    } catch (error) {
        errorDiv.innerHTML = error.message
        console.log(error)
    }


}

async function sendInfo() {
    let vname = document.querySelector('#name').value
    let vsurname = document.querySelector('#surname').value
    let vrate = document.querySelector('#rate').value
    let vdays = document.querySelector('#days').value
    let vasya = new Worker(vname, vsurname, vrate, vdays)
    console.log(vasya)


    try {
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            body: JSON.stringify(vasya),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })

        const user = await response.json()
        console.log(user);
    } catch (error) {
        errorDiv.innerHTML = error
    }

    /*fetch('https://httpbin.org/post', {
            method: 'POST',
            body: JSON.stringify(vasya),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => errorDiv.innerHTML = error)*/
}
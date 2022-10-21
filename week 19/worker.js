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

function showSalary() {
    let vname = document.querySelector('#name').value
    let vsurname = document.querySelector('#surname').value
    let vrate = document.querySelector('#rate').value
    let vdays = document.querySelector('#days').value
    let vasya = new Worker(vname, vsurname, vrate, vdays)
    document.querySelector('#result').innerHTML = `Зарплата сотрудника ${vasya.name} ${vasya.surname} составляет ${vasya.getSalary()} руб.`
}
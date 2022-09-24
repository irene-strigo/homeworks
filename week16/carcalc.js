function sumInput() {
    //константа, которая привязана к пустому диву
    const summaryDiv = document.querySelector('.summary')
    summaryDiv.innerHTML = ''

    const inputs = document.querySelectorAll('select, input[type=radio]:checked, input:not([type=radio])')

    //заводится переменная (это важно что не const, чтоб туда можно было складывать)
    let sum = 0
    // цикл для сложения чисел в массиве
    for (const input of inputs) {
        const coefficient = input.name === 'mileage' ? -1 : 1
        sum += coefficient * Number(input.value)
    }
    //выводим в див результат сложения
    summaryDiv.innerHTML += ('Цена автомобиля: ' + sum + ' евро')
}
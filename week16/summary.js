//SUMMARY
const digits = [] //константа для массива

// функция для сохранения введённых значений, пушит их в массив в конец
function saveInput() {
    const newDigit = Number(document.querySelector('input').value)
    digits.push(newDigit)
}

//складывает значения в массиве
function sumInput() {
    //константа, которая привязана к пустому диву
    const summaryDiv = document.querySelector('.summary')
    summaryDiv.innerHTML = ''

    // сортировка
    digits.sort((a, b) => a - b)

    summaryDiv.innerHTML += 'отсортированный массив<br>'
    for (let digit of digits) {
        summaryDiv.innerHTML += (digit + '<br>')
    }

    //заводится переменная (это важно что не const, чтоб туда можно было складывать)
    let sum = 0
    // цикл для сложения чисел в массиве
    for (let digit of digits) {
        sum += digit
    }
    //выводим в див результат сложения
    summaryDiv.innerHTML += ('сумма равна ' + sum)
}
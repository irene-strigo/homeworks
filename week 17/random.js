function randomNumbers() {
    const getNumbers = []

    for (let i = 0; i < 10; i++) {
        let newNumber = Math.round(Math.random() * 20 - 10);
        getNumbers.push(newNumber)

    }
    const max = Math.max(...getNumbers)
    const min = Math.min(...getNumbers)

    let sum = 0
    for (let number of getNumbers) {
        sum += number
    }

    let mid = sum / getNumbers.length

    let multip = 1
    for (let i = 0; i < getNumbers.length; i++) {
        multip *= getNumbers[i];
    }

    const result = document.querySelector('.random-result')
    result.innerHTML = 'Ряд случайных чисел:  ' + getNumbers + '<br> Максимальное: ' + max + '<br> Минимальное: ' + min +
        '<br> Сумма: ' + sum + '<br> Среднее арифметическое: ' + mid + '<br> Произведение: ' + multip

}
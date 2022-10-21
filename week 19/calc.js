class Calculator {
    static sum(a, b) {
        return Number(a) + Number(b)
    }
    static minus(a, b) {
        return Number(a) - Number(b)
    }
    static multip(a, b) {
        return Number(a) * Number(b)
    }
    static division(a, b) {
        return Number(a) / Number(b)
    }
}


function mySum(a, b) {
    let aNum = document.querySelector('#first').value;
    let bNum = document.querySelector('#second').value;
    let result = Calculator.sum(aNum, bNum)
    document.querySelector('#result').value = result
}

function myMinus(a, b) {
    let aNum = document.querySelector('#first').value;
    let bNum = document.querySelector('#second').value;
    let result = Calculator.minus(aNum, bNum)
    document.querySelector('#result').value = result
}

function myMultip(a, b) {
    let aNum = document.querySelector('#first').value;
    let bNum = document.querySelector('#second').value;
    let result = Calculator.multip(aNum, bNum)
    document.querySelector('#result').value = result
}

function myDivision(a, b) {
    let aNum = document.querySelector('#first').value;
    let bNum = document.querySelector('#second').value;
    let result = Calculator.division(aNum, bNum)
    document.querySelector('#result').value = result
}
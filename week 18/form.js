//Проверка для одного поля
let errors = [];

function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push('Поле ' + input.placeholder + ' заполнено в неверном формате');
    }

}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        errors.push('Пароли не совпадают');
    }
}

//Проверка для всех полей
function checkAll() {
    errors = [];
    let errorDiv = document.querySelector('.errorsInfo');
    errorDiv.innerHTML = ""
    //получаем все инпуты
    let inputs = document.querySelectorAll("input");

    //перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

    const passwords = Array.from(inputs).filter(input => input.type === 'password')
    checkPasswordsMatch(...passwords)

    //выводим ошибки в div 
    if (errors.length) {
        errorDiv.innerHTML = errors.join('.<br>');
    } else {
        errorDiv.innerHTML = ('Вы успешно зарегистрировались')
    }
}
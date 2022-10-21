class ValidatorStatic {
    static isLogin(input) {
        return input && input.validity.valid
    }
    static isEmail(input) {
        if (!input) {
            return false
        }
        if (input.validity.patternMismatch) {
            return false
        }
        return true
    }
    static isDomain(input) {
        if (!input) {
            return false
        }
        if (input.validity.patternMismatch) {
            return false
        }
        return true
    }
    static isDate(input) {
        if (!input) {
            return false
        }
        if (input.validity.patternMismatch) {
            return false
        }
        return true
    }
    static isPhone(input) {
        if (!input) {
            return false
        }
        if (input.validity.patternMismatch) {
            return false
        }
        return true
    }
}

function checkLogin() {
    let myLogin = document.querySelector('#login')
    return ValidatorStatic.isLogin(myLogin)
}

function checkEmail() {
    let myEmail = document.querySelector('#address')
    return ValidatorStatic.isEmail(myEmail)
}

function checkDomain() {
    let myDomain = document.querySelector('#address')
    let result = ValidatorStatic.isDomain(myDomain)
    if (result === false) {
        return false
        /*document.querySelector('.errorsInfo').innerHTML = 'Неправильно указан домен электронной почты'*/
    }

}

function checkDate() {
    let myDate = document.querySelector('#date')
    let result = ValidatorStatic.isDate(myDate)
    if (result === false) {
        return false
        /*document.querySelector('.errorsInfo').innerHTML = 'Дата указана в неверном формате'*/
    }

}

function checkPhone() {
    let myPhone = document.querySelector('#phone')
    let result = ValidatorStatic.isPhone(myPhone)
    if (result === false) {
        return false
        /*document.querySelector('.errorsInfo').innerHTML = 'Телефон указан неверно'*/
    }

}

function checkAll() {
    let errorDiv = document.querySelector('.errorsInfo')
    errorDiv.innerHTML = ''

    if (!checkLogin()) {
        errorDiv.innerHTML = 'Неверный формат логина'
    }
    if (checkEmail() !== true) {
        errorDiv.innerHTML = 'Адрес электронной почты введён в неверном формате'
    }
    if (checkDomain() === false) {
        errorDiv.innerHTML = 'Неправильно указан домен электронной почты'
    }
    if (checkDate() === false) {
        errorDiv.innerHTML = 'Дата указана в неверном формате'
    }
    if (checkPhone() === false) {
        errorDiv.innerHTML = 'Телефон указан неверно'
    }

}
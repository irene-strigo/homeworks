class Validator {

    isEmail(string) {
        return /^.+@.+\..+$/.test(string)
    }
    isDomain(string) {
        return /^([a-z0-9]+\.)?[a-z0-9][a-z0-9-]*\.[a-z]{2,6}$/.test(string)
    }
    isDate(string) {
        return /^\d{2}.\d{2}.\d{4}$/.test(string)
    }
    isPhone(string) {
        return /^((8|\+7)[\(]?)?(\(?\d{3}\)?)?[\d\-\) ]{10,16}$/.test(string)
    }
}
var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));
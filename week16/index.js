let cars = ['Выберите тип машины', 'Легковой', 'Грузовой', 'Сельхозтехника', 'Автодом', 'Автобус'];

let carsBodyForPass = ['Выберите вид кузова', 'Седан', 'Хэтчбек', 'Универсал', 'Лифтбэк', 'Купе', 'Кабриолет', 'Родстер', 'Стретч', 'Тарга', 'Внедорожник', 'Кроссовер', 'Пикап', 'Фургон', 'Минивэн'];
let carsBodyForCargo = ['Выберите вид кузова', 'Самосвал', 'Еврофура', 'Jumbo', 'Автосцепка', 'Рефрижераторный фургон', 'Открытая платформа', 'Автоцистерна'];
let carsBodyForAgricult = ['Выберите вид кузова', 'Косилка', 'Грабли', 'Пресс-подборщик', 'Волокуша', 'Стогометатель', 'Погрузчик-копновоз']
let carsBodyForCarHous = ['Выберите вид кузова', 'Жилой минивэн', 'Полуинтегрированный кемпер', 'Альковный дом на колесах', 'Интегрированный автодом', 'Прицеп-дачa', 'Прицеп-палатка', 'Капля']
let carsBodyForBus = ['Выберите вид кузова', 'Одноэтажный', 'Двухэтажный', 'Открытый', 'Закрытый']
let carsManufactForPass = ['Выберите марку', 'Audi', 'Acura', 'Alfa Romeo', 'Aston Martin', 'Bentley', 'Byd', 'BMW', 'Brilliance', 'Vector', 'Venturi', 'Volkswagen', 'Volvo', 'Vorte', 'Wartbur', 'Westfield', 'Wiesmann', 'Wuling', 'ВАЗ (Lada)']
let carsModel = ['Выберите модель', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'S', 'RS', 'TT', ]

function fillSelect(selectId, options) {
    const select = document.getElementById(selectId)
    if (!select) {
        return
    }
    select.innerHTML = ''
    options.forEach(option => {
        select.innerHTML += `<option value="${option}">${option}</option>`
    });
}

function choiсeCarType() {
    const select = document.getElementById('carType')
    const selectedCarType = select.value

    if (selectedCarType === 'Легковой') {
        fillSelect('carBody', carsBodyForPass)
        fillSelect('carManufact', carsManufactForPass)
        fillSelect('carModel', carsModel)
        return
    }
    if (selectedCarType === 'Грузовой') {
        fillSelect('carBody', carsBodyForCargo)
        fillSelect('carManufact', carsManufactForPass)
        fillSelect('carModel', carsModel)
        return
    }
    if (selectedCarType === 'Сельхозтехника') {
        fillSelect('carBody', carsBodyForAgricult)
        fillSelect('carManufact', carsManufactForPass)
        fillSelect('carModel', carsModel)
        return
    }
    if (selectedCarType === 'Автодом') {
        fillSelect('carBody', carsBodyForCarHous)
        fillSelect('carManufact', carsManufactForPass)
        fillSelect('carModel', carsModel)
        return
    }
    if (selectedCarType === 'Автобус') {
        fillSelect('carBody', carsBodyForBus)
        fillSelect('carManufact', carsManufactForPass)
        fillSelect('carModel', carsModel)
        return
    }

}


fillSelect('carType', cars)
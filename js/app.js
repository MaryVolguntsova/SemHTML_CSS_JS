// Пример вывода и ввода через всплывающее окно на сайте
// var x = parseInt(prompt("Введите х"));
// alert(`x = ${x}`)
// function app() {
//     let x = 2
//     x = (1 + 2) / x;
//     alert(x)
// }

// Можно добавить в функция для выведения текста в консоль (инст разработчика)
// console.log(message)

function app() {
    var message = document.getElementById("text").value
    document.getElementById("message3").innerText = message
    document.getElementById("text").value =''
}
// function hello() {
//     var age = parseInt(document.getElementById("age").value)
//     str = ''
//     if (age <= 18) {
//         str = 'Маловат будешь!'
//     } else {
//         str = 'Хороший возраст!'
//     }
//     document.getElementById("result").innerText = str;
// }

// ИМТ ПОЧЕМУ ТО СЧИТАЕТ НЕ ВЕРНО!
function calc() {
    var rost = parseInt(document.getElementById("rost").value)
    var ves = parseInt(document.getElementById("ves").value)
    var imt = (ves / (rost*rost)) * 10000
    console.log(imt)
    var str = ''
    if (imt <= 16) str = 'Выраженный дефицит веса'
    if (imt > 18 &&  imt < 18,49) str = 'Недостаточная масса тела'
    if (imt > 18,5 && imt < 24,99) str = 'Норма'
    if (imt > 25 && imt < 29,99) str = 'Избыточный вес'

    document.getElementById("result").innerText = str;
}

// Функция ввода/вывода через всплывающее окно
function hi() {
    var name = document.getElementById("name").value
    document.getElementById("res").innerText = name;
    console.log(name)
}

// Функция ввода/вывода через всплывающее окно
function askName() {
    let name = prompt("Привет, как тебя зовут?", "введи здесь имя");
    alert(`Приятного пользования, ${name}!`);
}
askName()

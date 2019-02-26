'use strict';
// ================================================= начал DATE =================================================
// function sayHello() {
//     console.log("Hello!");
// }
//
// // const ID = setTimeout(sayHello, 5000);
// const ID = setInterval(sayHello, 100);
// console.log(ID);
// let btn = document.querySelector('.stop');
// btn.addEventListener('click', function () {
//     clearTimeout(ID);
//     clearInterval(ID);
//     console.log('timer stop');
// });

// ================================================= реальное время =================================================
// let date = new Date();
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());  // console.log(date.getYear()) - СТАРИЙ СПОСІБ , що рахуе -1900 від потчного року(буде 118)

// ====================================== задача на визначення дати  ===============================================
// let days = ['Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота','Неділя'];
// let month = prompt('введіть місяць');
// let day = prompt('ввeдіть день');
// let year = prompt('введіть рік');
// let date = new Date(`"${month}, ${day}, ${year}"`);
// let a = alert(days[date.getDay()]);

// ====================================== визначення дати українською  =================================================
// const options = {
//     weekday: 'long',
//     year    : 'numeric',
//     month   : 'short',
//     day     : 'numeric',
//     hour    :'2-digit',
//     minute  :'2-digit'
// };
//
// // Україна
// let localeUa = date.toLocaleString('UA-ua', options);
// console.log(localeUa); // понеділок, 19 бер. 2018 р., 17:42
//
// let localeUs = date.toLocaleString("en-US", options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43

// _________________________________________  підключення ссилки в index.html  _________________________________________
// // https://momentjs.com/    //- ссилка на визначення дати в різних форматах
// var now = moment().format('DD.MM.YYYY');  // - варіант підключення по цій ссилці
// console.log(now);          // - щоб зрозуміти принцип роботи потрібно прочитати документацію по використанню

// ==================================================  Таймер  ===================================================
const deadline = new Date(2020, 0, 1, 0, 0, 0);  //deadline
let secText = document.querySelector('.seconds');
let minText = document.querySelector('.minutes');
let hoursText = document.querySelector('.hours');
let dayText = document.querySelector('.days');

function timer() {
    const today = new Date();  // at that moment
    let result = deadline - today;
    let sec = Math.floor(result / 1000 % 60);
    let min = Math.floor(result / 60000 % 60);
    let hour = Math.floor(result / 3600000 % 24);
    let day = Math.floor(result / 86400000);
    secText.textContent = sec < 10 ? `0${sec}` : sec;
    minText.textContent = min < 10 ? `0${min}` : min;
    hoursText.textContent = hour < 10 ? `0${hour}` : hour;
    dayText.textContent = day < 10 ? `0${day}` : day;
}

setInterval(timer, 1000);




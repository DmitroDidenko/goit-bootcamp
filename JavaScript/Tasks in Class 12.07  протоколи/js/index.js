'use strict';
// // ======  старий спосіб  ========== Протоколи та робота з інформацією витягнутою з севера ===========================
// const req = new XMLHttpRequest();
// // console.log(req);
// // settings
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
// req.setRequestHeader('Content-Type', 'application/json');
// // req.send([body])
// req.send();
//
// // req.abort()
//
// // status
// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status
//
// if (req.status !== 200) {
//     console.error(`${req.status}: ${req.statusText}`)
// } else {
//     console.log(JSON.parse(req.response));
// }
// console.log(`test`);

// ====================================================================================================================
// // =================================== асинхронний запуск запроса на сервер ========================================
// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () {
//     if (req.readyState !== 4) {
//         console.log(req.readyState);
//         return
//     }
//
//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//     }
// };
// console.log(`test`);
//
// // readystatechange - відстежує стан запиту
// // 0 - початок
// // 1 - викликаний open
// // 2 - отримані заголовки
// // 3 - отримуємо данні
// // 4 - запит закінчено

// ====================================================================================================================
// ===================================================  новий спосіб  ==================================================
// CRUD
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE

// let id = 152;
// fetch(url,{                        // обовязковий параметр url, другий не обовязковий , так як за замовчуванням вже прописаний GET
//     method: 'DELETE',
//     body: JSON.stringify(id),
//     headers: new Headers({
//         'Content-Type': 'application/json',
//     }),
// });

// ====================================================================================================================
// ===================================  стягнення інформацшї та обробка данних  ========================================
// let div = document.querySelector('#container');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//     })
//     .then(data => data.map(el => el.email))
//     .then(mapResult => mapResult.sort())
//     .then(sortResult => create(sortResult, div))
//     .catch(error => console.log(error));
//
// function create(arr, container) {
//     let result = arr.reduce((acc, el) => acc + `<li>${el}</li>`, '')
//     let list = `<ul>${result}</ul>`
//     container.innerHTML = list;
// }

// ====================================================================================================================
// =========================================  вхід на сайт створення ссилки  =========================================
// let a = document.querySelector('#container');
// let body = document.body;
// let url = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=popular&per_page=9';
// fetch(url)
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//     })
//     .then(data => data.hits)
//     .then(imegs => create(imegs, a));
//
// function img(arr) {
//     let result = arr.reduce((acc, el) => acc + el,'');
//     a.innerHTML = result
// }
// ====================================================================================================================
// =================================================  задача Gallery  =================================================
let btn = document.querySelector('.btn');
let galleryContainer = document.querySelector('#container');

function getValue() {
    let input = document.querySelector('.cars').value;
    let url = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${input}&per_page=9`;
    fetch(url)
    // .then(response => response.ok ? response.json(): null)       // стрелочний варіант
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => data.hits)
        .then(galleryArr => galleryCreate(galleryArr, galleryContainer));
    document.querySelector('.cars').value = ''
}

function galleryCreate(arr, container) {
    let result = arr.reduce((acc, el) => acc + `<div class="one"><p>Photographer is${el.user} </p><img src=${el.webformatURL}></div>`, '')
    container.innerHTML = result
}

btn.addEventListener('click', getValue);
window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getValue();
    }
});
// ====================================================================================================================

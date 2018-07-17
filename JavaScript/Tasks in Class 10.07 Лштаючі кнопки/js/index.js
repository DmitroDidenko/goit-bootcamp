'use strict';
// =================================== Лічильник вартості продукту(мясо) =========================================
// 2) Написати скрипт який буде рахувати загальну вартість мяса і виводити її на екран
// 3) При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
// 4) Завжди має відображатися валюта - гривня
// 5) Загальна сума відображається з копійками (2 знаки після коми)
// 6) В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// 7) Кольрова підказка має змінювати своє значення при перетягувані повзунка.
// 8) В інпуті №2 мін і мах поріг встановлюєте самостійно.
// 9) При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням які ви встановите в розмітці.

// let form = document.querySelector(".form");
// let priceTotal = document.querySelector('.total');
// let span = document.querySelector('.amount');
//
// function totalPrice() {
//     let priceInput = document.querySelector('#price').value;
//     let quantityInput = document.querySelector('#quantity').value;
//     let sum = priceInput * quantityInput;
//     priceTotal.textContent = `${sum.toFixed(2)} грн`;
//     span.textContent = quantityInput
// }
// form.addEventListener('input', totalPrice);
// window.addEventListener('DOMContentLoaded', totalPrice);

// =============================== Літаючі кнопки створені з допомогою event====================================
// 1) Створити в HTML 5 кнопок
// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія двома способами:
//     7.1) event
// 7.2) this
// 8) Корисні команди:
//     window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter

// let btns = document.querySelectorAll('.btn');
// function moveBtn(e) {
//     let btnH = e.target.clientHeight;
//     let btnW = e.target.clientWidth;
//     let randomLeft = Math.floor(Math.random() * (window.innerWidth - btnW));
//     let randomTop = Math.floor(Math.random() * (window.innerHeight - btnH));
//     e.target.style.top = `${randomTop}px`;
//     e.target.style.left = `${randomLeft}px`;
// }
// btns.forEach(el => el.addEventListener('mouseenter', moveBtn));

// let btns = document.querySelectorAll('.btn');
// function moveBtn(e) {
//     let btnH = thiss.clientHeight;                                                                    // замість e.target можна писати this
//     let btnW = this.clientWidth;
//     let randomLeft = Math.floor(Math.random() * (window.innerWidth - btnW));
//     let randomTop = Math.floor(Math.random() * (window.innerHeight - btnH));
//     this.style.top = `${randomTop}px`;
//     this.style.left = `${randomLeft}px`;
// }
// btns.forEach(el => el.addEventListener('mouseenter', moveBtn));

// ============================== створення меню ul та стилізація за допомогою event ==================================
let ul = document.querySelector('.ul');
let li = document.querySelectorAll('.ul__li');
let Arr = Array.from(li);
let btn = document.querySelector('.btn');
function click(e) {
    console.log(Arr.indexOf(e.target) + 1);
    Arr.forEach(el => el.classList.remove('change'));
    e.target.classList.toggle('change');
}
function baton() {
    ul.classList.toggle('ulNone');
}
ul.addEventListener('click', click);
btn.addEventListener('click', baton);

// ================================ 3 Способи написання галереї з картинками =====================================
//вариант с полключенным HTML
// let vont = document.querySelector('.cont');
// let body = document.body;
// function gallery(e) {
//     let overlay = document.createElement('div');
//     let img = document.createElement('img');
//     img.classList.add('big-img');
//     overlay.classList.add('overlay');
//     img.setAttribute('src', e.target.dataset.big);
//     img.setAttribute('alt', 'picture');
//     overlay.append(img);
//     body.prepend(overlay);
//     overlay.addEventListener('click', function (e) {
//         if (e.target === this) {
//             this.remove();
//         }
//     })
// }
// vont.addEventListener('click', gallery);


// вариант с созданием HTML через JS

// let galleryArr = [
//     {small: 'https://placeimg.com/480/240/animals', big: 'https://placeimg.com/960/480/animals'},
//     {small: 'https://placeimg.com/480/240/arch', big: 'https://placeimg.com/960/480/arch'},
//     {small: 'https://placeimg.com/480/240/nature', big: 'https://placeimg.com/960/480/nature'},
//     {small: 'https://placeimg.com/480/240/people', big: 'https://placeimg.com/960/480/people'},
//     {small: 'https://placeimg.com/480/240/tech', big: 'https://placeimg.com/960/480/tech'},
//     {small: 'https://placeimg.com/480/240/animals/grayscale', big: 'https://placeimg.com/960/480/animals/grayscale'},
//     {small: 'https://placeimg.com/480/240/tech/sepia', big: 'https://placeimg.com/960/480/tech/sepia'},
//     {small: 'https://placeimg.com/480/240/people/sepia', big: 'https://placeimg.com/960/480/people/sepia'},
//     {small: 'https://placeimg.com/480/240/arch/sepia', big: 'https://placeimg.com/960/480/arch/sepia'},
// ];
//
// let vont = document.querySelector('.cont');
// let body = document.body;
// function createGallery(arr) {
//     let frag = document.createDocumentFragment();
//     for(let el of arr) {
//         let img = document.createElement('img');
//         img.setAttribute('src', el.small);
//         img.setAttribute('alt', 'picture');
//         img.setAttribute('data-big', el.big);
//         frag.append(img);
//     }
//     vont.append(frag)
// }
// createGallery(galleryArr);
// vont.addEventListener('click', gallery);


// вариант с созданием HTML через JS через шаблонную строку

// let vont = document.querySelector('.cont');
// let body = document.body;
// function createTemp(arr) {
//     let result = arr.reduce((acc, el) => acc + `<img src=${el.small} alt='picture' data-big= ${el.big}>`, '');
//     vont.innerHTML = result
// }
// createTemp(galleryArr);
// vont.addEventListener('click', gallery);

// ==================================================  ===================================================

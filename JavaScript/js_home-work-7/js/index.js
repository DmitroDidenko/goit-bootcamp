'use strict';
/*
  1. Модифицируйте готовую функцию createPostCard() из задания
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так,
    чтобы она принимала объект post с данными для заполнения полей
    в карточке.

  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// const body = document.querySelector('body');
//
// function createPostCard() {
//     const div = document.createElement('div');
//     div.classList.add('post');
//
//     const img = document.createElement('img');
//     img.classList.add('post__image');
//     img.setAttribute('src', 'http://via.placeholder.com/400x150');
//     img.setAttribute('alt', 'post image');
//
//     const h2 = document.createElement('h2');
//     h2.classList.add('post__title');
//     h2.textContent = 'Lorem ipsum dolor';
//
//     const p = document.createElement('p');
//     p.classList.add('post__text');
//     p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
//
//     const a = document.createElement('a');
//     a.classList.add('button');
//     a.textContent = 'Read more';
//     a.setAttribute('href', '#');
//     div.append(img, h2, p, a);
//
//     return div
// }
//
// function createCards(posts){
//     const div = document.createElement('div');
//     for(let el of posts){
//         div.append(createPostCard(el));
//     }
//     return div;
// }
//
// body.append(createCards(posts));
//
//
// const animal = { eats: true };
//
// const dog = Object.create(animal);
// dog.barks = true;
//
// for (const key in dog) {
//     console.log(key); // barks, eats
// }
//
//

// ===========================================================================================================================

class Guest {
    // аналог функции-конструктора
    constructor (name, days, roomNumber) {
        this.name = name;
        this.days = days;
        this.roomNumber = roomNumber;
    }

    // аналог Guest.prototype.getFullInfo
    getFullInfo () {
        console.log(`
      Guest ${this.name}
      Will stay for ${this.days} more days
      In room number ${this.roomNumber}
    `);
    }
}

const mango = new Guest('Mango', 7, 26);

mango.getFullInfo();
// Guest Mango
// Will stay for 7 more days
// In room number 26

console.log(mango instanceof Guest); // true
console.log(mango instanceof Object); // true
// ===========================================================================================================================



const article = document.querySelector('.article');
const text = '<p class="article-text">Some random text</p>';
// Уберите += и поставьте =, видите результат? заголовок удаляется, еще раз перечитайте сноску о работе innerHTML, о том как содержимое перезаписывается
article.innerHTML += text;


// Можно делать множественные вставки, для этого мы конкатенируем всю необходимую разметку в одну строку, после чего присваиваем ее innerHTML родителя. Почему именно так, а не поэлементно? Об этом мы поговорим далее.
const list = document.querySelector('.list');
let items = '';

for(let i = 0, max = 5; i < max; i += 1) {
    items += `<li>item ${i}</li>`;
}

console.log(items); // посмотрите что будет в консоли, одна длинная строка с тегами

list.innerHTML = items; // вешаем всю разметку за одно обращение к DOM



list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
list.insertAdjacentHTML('afterbegin', '<li>afterbegin item</li>');
list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');
// ===========================================================================================================================



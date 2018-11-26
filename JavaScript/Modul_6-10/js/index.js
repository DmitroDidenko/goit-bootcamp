'use strict';
// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
// };
//
// let dog = Object.create(animal);
// dog.canBark = true;
// dog.canSwim = true;
//
// let dog = {
//     canBark: true,            //ПРОТОТИП ЕНЫМАЛЗ
//     canSwim: true,
// };
//
// let buldog = {
//     canSluna: true,             //ПРОТОТИП ДОГ И ЕНЫМАЛЗ
//     canJump: false,
// };

// console.log('animal',animal);
// console.log('dog',dog);
// console.log(dog.canBark);
// console.log(dog.canEat);
// console.log(buldog);

// let dog = Object.create(null);           //ОБЬЕКТ БУЗ ПРОТОТИПА
// dog.age = 25;
// console.log(dog);

// [[Prototype]] це запис __proto__ в специфікації ECMAScript        //ВАРИАНТ ЗАПИСИ ПРОТОТИПА, ПО УМОЛЧАНИЮ

// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
// };
// let dog = Object.create(animal);
// dog.age = 25;
// dog.canBark = true;
// dog.canSwim = true;
//
// // console.log('animal',animal);
// console.log('dog',dog);
// console.log('dog proto',dog.__proto__);


// function Human(name, age) {
//     // this ={}
//     // Human.prototype = {}
//     this.name = name;
//     this.age = age;
//     // return this
// }
// // Human.prototype.hello = 'Hello Max';
// Human.prototype.eat = function () {
//     console.log(`${this.name} can eat`);
// };
// Human.prototype.great = function () {
//     console.log(`Hello my name is ${this.name}`);
// };
// Human.prototype.friends = ['Jack', 'Ravshan', 'Nasalnika', 'Bambucha'];
//
// let max = new Human('Max',12);
// max.great();
// // console.log(max.__proto__ === Human.prototype);
// // max.__proto__.test = 'test';
// // console.log('Max proto', max.__proto__);
// // console.log('human.prototype',Human.prototype);
// let jane = new Human('Jane', 25);
// jane.friends.pop();
// console.log(jane.friends);
// console.log(max.friends);
// console.log(jane);
// console.log(max);
// max.great();
// max.eat();


// const Hero = function (name, level) {
//     // this = {}
//     // Hero.prototype = {}
//     this.name = name;
//     this.level = level;
// };
//
// Hero.prototype.greet = function () {
//     console.log(`Hello, I'm ${this.name}`);
// };
//
// //   const Alister = new Hero('Alister', 1);
// // Alister.greet();
//
//
// //Warrior class, extends Hero
// const Warrior = function (name, level, weapon) {
//     // this = {}
//     // Warrior.prototype = {}
//     // Hero.prototype = {}
//     Hero.call(this, name, level);
//     this.weapon = weapon;
//     // {name, level, weapon,}
// };
//
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
//
// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with an ${this.weapon}.`);
// };
//
// const Swordman = function (name, level, weapon, ability) {
//     Warrior.call(this, name, level, weapon);
//     this.ability = ability;
// };
//
// Swordman.prototype = Object.create(Warrior.prototype);
// Swordman.prototype.constructor = Swordman;
// Swordman.prototype.rush = function () {
//     console.log(`Attack aaaaaaaaaaahhhhhhhhhhhh!!!!!!!`);
// };
// Swordman.prototype.fatal = function () {
//     console.log(`You are dead`);
// };
// let archibald = new Swordman('Archi', 5, 'sword', '100 gram');
//
// // archibald.rush();
// console.log(archibald);
// console.log(Swordman.prototype);

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         console.log(`${this.name} can eat`);
//     }
//
//     great() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }
// class Warrior extends Human {
//     constructor(name, age, weapon) {
//         super(name, age);
//         this.weapon = weapon;
//     }
//
//     attack() {
//         console.log(`Attack ${this.name}`);
//     }
// }
// class Knight extends Warrior {
//     constructor(name, age, weapon, horse) {
//         super (name, age, weapon);
//         this.horse = horse;
//     }
//
//     static showMoney(){
//         console.log(`${this.name} have many golden coins`);
//     }
//
//     move() {
//         console.log(`${this.horse} move`);
//     }
// }
// let lanselot = new Knight('Lanselot', 25, 'Sword', 'Plotva');
// lanselot.move();
// lanselot.attack();
// lanselot.eat();
// Knight.showMoney();
// =============================================================================================================
/*
    Создать функцию-конструктор Account, которая добавляет будущему
    объекту поля login, email и friendsCount.

    В prototype функции-конструктора добавить метод getAccountInfo(),
    который выводит в консоль значения полей login, email и friendsCount.

    Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
    а использовать его смогут все экземпляры, по ссылке.

    Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// const Account = function(login, email, friendsCount = 0){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
// };
//
// Account.prototype.getAccountInfo = function () {
//     console.log(this.login, this.email, this.friendsCount);
// };
//
// let Dima = new Account('Dima', 'Dima@ukr.net', 1);
// let Max = new Account('Max', 'Max@ukr.net', 2);
//
// Dima.getAccountInfo();
// Max.getAccountInfo();

// class Account {
//     constructor(login, email, friendsCount = 0) {
//         this.login = login;
//         this.email = email;
//         this.friendsCount = friendsCount;
//     }
//
//     getAccountInfo() {
//         console.log(this.login, this.email, this.friendsCount);
//     }
// }
//
// let Dima = new Account('Dima', 'Dima@ukr.net', 1);
// let Max = new Account('Max', 'Max@ukr.net', 2);
//
// Dima.getAccountInfo();
// Max.getAccountInfo();

// =============================================================================================================
/*
  Напишите функцию-конструктор StringBuilder.

  На вход она получает один параметр string - строку.

  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/


// function StringBuilder(string = "") {
//     this.value = string;
// }
//
//
// StringBuilder.prototype.getValue = function () {
//     console.log(this.value)
// };
// StringBuilder.prototype.append = function (str) {
//     this.value = this.value + str
// };
// StringBuilder.prototype.prepend = function (str) {
//     this.value = str + this.value
// };
// StringBuilder.prototype.pad = function (str) {
//     this.value = str + this.value + str
// };
// const myString = new StringBuilder('.');

//
// myString.append('^');
// myString.getValue(); // '.^'
//
// myString.prepend('^');
// myString.getValue(); // '^.^'
//
// myString.pad('=');
// myString.getValue(); // '=^.^='


// class StringBuilder {
//     constructor(string = '') {
//         this.value = string;
//     }
//
//     getValue() {
//         console.log(this.value)
//     };
//
//     append (str) {
//         this.value = this.value + str
//     };
//
//     prepend (str) {
//         this.value = str + this.value
//     };
//
//     pad (str) {
//         this.value = str + this.value + str
//     };
// }
//
// const myString = new StringBuilder('.');
// myString.append('^');
// myString.getValue(); // '.^'
//
// myString.prepend('^');
// myString.getValue(); // '^.^'
//
// myString.pad('=');
// myString.getValue(); // '=^.^='

// =============================================================================================================
//Создайте класс Car с указанными полями и методами.
/*
    Добавьте свойства:
          - speed - для отслеживания текущей скорости, изначально 0.

          - maxSpeed - для хранения максимальной скорости

          - running - для отслеживания заведен ли автомобиль,
            возможные значения true или false. Изначально false.

          - distance - содержит общий киллометраж, изначально с 0
*/

// class Car {
//     constructor(maxSpeed, speed = 0, running = false, distance = 0) {
//         this.speed = speed;
//         this.maxSpeed = maxSpeed;
//         this.running = running;
//         this.distance = distance;
//     }
// // Добавьте код для того чтобы завести автомобиль
// // Просто записывает в свойство running значание true
//     turnOn() {
//         this.running = true;
//     }
// // Добавьте код для того чтобы заглушить автомобиль
// // Просто записывает в свойство running значание false
//     turnOff() {
//         this.running = false;
//     }
// // Записывает в поле speed полученное значение, при условии что
// // оно не больше чем значение свойства maxSpeed
//     accelerate(spd) {
//         this.speed = spd < this.maxSpeed?this.speed = spd: this.speed;
//     }
// // Записывает в поле speed полученное значение, при условии что
// // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     decelerate(spd) {
//         this.speed = spd > 0 && spd <this.maxSpeed ? this.speed = spd: this.speed
//     }
// // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
// // но только в том случае если машина заведена!
//     drive(hours) {
//         this.distance = this.running ? hours*this.speed: this.distance
//     }
// }
//
// const BMW = new Car(100, 30, true, 0);
// BMW.turnOn();
// BMW.accelerate(150);
// BMW.decelerate(90);
// BMW.drive(5);
// BMW.turnOff();
// console.log(BMW);

// =============================================================================================================
'use strict';
// class Tank {
//     constructor(name, color, x, y) {
//         this.x = x;
//         this.y = y;
//         this.life = 100;
//         this.ammunition = 5;
//         this.engineStatus = true;
//         this.name = name;
//         this.color = color;
//     }
//
//     moveX(x) {
//         this.x = this.x + x
//     };
//
//     moveY(y) {
//         this.y = this.y + y
//     };
//
//     fireTo(x, y) {
//         if (this._canFire()) {
//             this.amunition = this.amunition - 1
//         } else {
//             alert('You have no bullets')
//         }
//     };
//
//     _canFire() {
//         return this.ammunition > 0
//     };
//
//     _checkHealth() {
//         return this.life > 0 && this.life < 100
//     };
//
//     health(x) {
//         if (this._checkHealth()) {
//             this.life = this.life + x
//         } else {
//             alert('Health is full')
//         }
//     };
//
//     _checkEngine() {
//         return this.engineStatus === true;
//     };
//
//     repairEngine() {
//         if (this._checkEngine()) {
//             alert('Engine is repaired')
//         } else {
//             this.engineStatus = true
//         }
//     };
//
//     showCoordinate() {
//         return {
//             x: this.x,
//             y: this.y,
//         }
//     };
// }
//
//
// const Dima = new Tank('Dima', 'green', 10, 10);
// console.log(Dima);
// const Anton = new Tank('Anton', 'Blue', 0, 0);
// console.log(Anton);
// const Sasha = new Tank('Sasha', 'Yellow', 20, 20);
// console.log(Sasha);
// const Jora = new Tank('Jora', 'Black', 5, 5);
// console.log(Jora);
//
// Dima.moveX(20);
// Anton.moveX(50);
// Dima.moveY(30);
// Anton.moveY(40);
// Jora.moveY(10);
// console.log(Dima.showCoordinate());
// console.log(Anton.showCoordinate());
// console.log(Jora.showCoordinate());
// console.log(Sasha.showCoordinate());
// Jora.fireTo();
// Jora.fireTo();
// Anton.fireTo();
// Anton.fireTo();
// Anton.fireTo();
// Dima.fireTo();
// console.log(Dima);
// Dima.life -= 50;
// Dima.engineStatus = false;
// console.log(Dima);
// Dima.repairEngine();
// console.log(Dima);
// Dima.health(30);
// console.log(Dima);

// =============================================================================================================

// class User {
//     constructor(name, surname) {
//         // this.name = name;
//         // this.surname = surname;
//         // private
//         this._name = name;
//         this._surname = surname;
//     }
//
//     getFullName() {
//         return `${this._name} ${this._surname}.`
//     }
//
//     // getFullName() {
//     //     return `${this.name} ${this.surname}.`
//     // }
//
//     // // getter
//     //
//     get name() {
//         return this._name;
//     }
//     //
//     // //
//     // // get surname() {
//     // //     return this._surname;
//     // // }
//     // // // setter
//     // //
//     set age(age) {
//         this._age = age;
//     }
//
//     get age() {
//         return this._age;
//     }
//     //
//     // set setName(name) {
//     //     this._name = name;
//     // }
//     //
//     // //
//     // get age() {
//     //     return this._age;
//     // }
// }

// =============================================================================================================
// 1) Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати
// 4) Модифікувати клас так щоб всі 4 властивості з пункта №1 були приватними і написати для їх читання гетери
// 5) Для властивостей rate, days додати методи сетери

// class Worker {
//     constructor(name, surname, rate, days) {
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }
//
//     getSalary() {
//         return this.rate * this.days;
//     }
//
//     get name() {
//         return this._name
//     }
//     get surname() {
//         return this._surname
//     }
//     get rate() {
//         return this._rate
//     }
//     get days() {
//         return this._days
//     }
//     set rate(rate){
//         return this._rate = rate
//     }
//     set days(days){
//         return this._days = days
//     }
// }
//
// let Den = new Worker('Den', 'Doe' ,40 ,22);
// let Max = new Worker('Max', 'Vasek', 50, 22);
//
// Den.rate = 300;
// console.log(Den.getSalary());
// console.log(Max.getSalary());

// =============================================================================================================
// 1) Створити клас User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити клас Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран

// class User {
//     constructor(name, surname) {
//         this._name = name;
//         this._surname = surname;
//     }
//
//     getFullName() {
//         return (`${this._name}, ${this._surname}`)
//     }
// }
//
// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.yearIn = year;
//     }
//
//     getCourse() {
//         // return 2018 - this.yearIn
//         let today = new Date();
//         return today.getFullYear() - this.yearIn
//
//     }
//
//     getFullInfo() {
//         return `${this.getFullName()}, ${this.getCourse()}`
//     }
// }
//
// let Dima = new Student('Dima', 'Didenko', 2014);
// console.log(Dima);
// console.log(Dima.getFullInfo());

// =============================================================================================================
// const menu = {
//     size: {
//         small: {
//             name: 'small',
//             price: 100,
//             calories: 100,
//         },
//         large: {
//             name: 'large',
//             price: 250,
//             calories: 350,
//         }
//     }
// }
// const BIG = menu.size.large;
// const SMALL = menu.size.small;

// 1 CommentCollapse
// Меню в домашці робити таким чином

// =============================================================================================================
// let enemy = [{left: 25, top: 100},
//     {left: 125, top: 100},
//     {left: 225, top: 100},
//     {left: 325, top: 100},
//     {left: 425, top: 100},
//     {left: 525, top: 100},
//     {left: 625, top: 100},
//     {left: 725, top: 100},
//     {left: 825, top: 100},
//     {left: 925, top: 100},
//     {left: 25, top: 175},
//     {left: 125, top: 175},
//     {left: 225, top: 175},
//     {left: 325, top: 175},
//     {left: 425, top: 175},
//     {left: 525, top: 175},
//     {left: 625, top: 175},
//     {left: 725, top: 175},
//     {left: 825, top: 175},
//     {left: 925, top: 175},];

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     for (let k = 1; k < 6; k++) {
//         console.log(k);
//     }
// }

// let enemy = [];                                                          //счетчик движения
// for (let i = 100; i < 250; i += 75) {
//     // console.log(i);
//     for (let k = 25; k < 1025; k += 100) {
//         // console.log(k);
//         enemy.push({left: k, top: i})
//     }
// }
// console.log(enemy);

// ===================================================== добавление Java Script на страницу HTML ========================================================
// old
// console.log(document.getElementsByClassName('text'));     // поиск по классу
// console.log(document.getElementsByTagName('li'));         // поиск по тегу
// console.log(document.getElementById('title'));            // поиск по id

// new
// let title = document.querySelector('#title');
// let li = document.querySelectorAll('.item');

// classList                                                 // ключ що показуэ классы какие существуют

// const text = document.querySelector('.text');
// console.log(text);
// console.log(text.classList);
// console.log(text.classList.contains('par'));
// text.classList.add('big');
// console.log(text.classList);
// console.log(text.classList.contains('big'));
// title.classList.add('small');                             // метод ключа classList, що добавляє класси
// console.log(title.classList);
// text.classList.remove('big');                             // метод ключа classList, що удаляє класси
// console.log(title.classList.contains('big'));
// text.classList.toggle('big');                             // метод ключа classList, що удаляє класс якщо він є добавляє, якщо його немає
// console.log(title.classList.contains('big'));


// const a = document.querySelector('a');
// console.log(a);
// a.setAttribute('title', 'superlink');
// a.setAttribute('id', 'idfromjs');
//
// const fromid = document.querySelector('idfromjs');
// console.log(fromid);

// const title = document.createElement('h1');
// title.textContent = 'Title created from JS';
// const container = document.querySelector('div');
// container.appendChild(title);                              // ставит елемент в конец блока
// const article = document.querySelector('article');
// container.insertBefore(title, article);                    //нужно обьявить с помощью сменной, так как контейнер не будет видеть article (в данном случае)
// container.append(title);                                   // способ новее (вставка всегда в конец)
// container.prepend(title);                                  // всегда в начало
// article.after(title);                                      // ставит после конкретного елемента который интересует
// article.before(title);                                     // перед тем елементом что интересует
// article.replaceWith(title);                                // заменяет елемент на странице
// document.querySelector('.list').remove();                  // удаляет елемент на странице
// const div = document.querySelector('div');
// div.innerHTML = '<h1>\'Hello World\'</h1>';
// div.innerHTML += '<p>Hello World</p>';                     // вставка новой страницы вместо всей существующей(это не точно , надо еще перечитать урок)
// const frag = document.createDocumentFragment();

// let root = document.querySelector('div');
// let str = '';
// for (let i = 0; i< 100; i++) {
//     str += '<div class="box"></div>'
// }
// root.innerHTML = str;
// // const frag = document.createDocumentFragment();           // сспозоб замены на странице
// // for (let i = 0; i < 100; i++) {
// //     let box = document.createElement('div');
// //     box.classList.add('box');
// //     frag.append(box);
// // }
// // root.append(frag);

// const ul = document.querySelector('ul');
// const text = '<li>Hello World!</li>';
// // ul.insertAdjacentHTML('beforebegin', text);                  // перед
// // ul.insertAdjacentHTML('afterend', text);                     // після
// // ul.insertAdjacentHTML('afterbegin', text);                   // всередині спочатку
// // ul.insertAdjacentHTML('beforeend', text);                    // всередині вкінці

// const article = document.querySelector('.article');
// const a = article.cloneNode(true);                                 // делает копию всей статьи и только тега если false
// console.log(a);

// const a = function () {
//     let b = arguments.length;
//     let c = 0;
//
//     for (let i = 0; i < b; i += 1) {
//         c = c + c + arguments[i];
//     }
//
//     return c;
// };
//
// console.log( a(2, 2, 3, 4, 1));


// const html = document.documentElement;
// console.log(html);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes);
// console.log(body.children);
// console.log(body.firstChild);
// console.log(body.firstElementChild);
// console.log(body.lastChild);
// console.log(body.lastElementChild);
// const div = body.children[0];
// console.log(div);
// console.log(div.children);
// console.log(div.lastElementChild);
// console.log(div.lastChild);
// const p = div.children[1];
// console.log(p);
// console.log(p.previousElementSibling);
// console.log(p.previousSibling);
// console.log(p.nextElementSibling);
// console.log(p.nextSibling);
// console.log(p.parentNode);

// const text = document.querySelector('.text');
// text.style.fontSize = '50px';
// console.log(text.style);

// const userName = document.querySelector('.name');
// const btn = document.querySelector('#send');                    // запускаем функцию, которая снимает дефолтные значения и запускает те значения что указали мы
// btn.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     console.log(userName.value);
//     userName.value = '';
// });


//====================================================== задача 1 ===================================================
/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// 'use strict';
// const a = document.querySelector('.categories');
// const p = Array.from(a.children);
// // console.log(a);
// // console.log(p.children);
// console.log(p[0].firstChild);
// console.log(p[0].firstElementChild.children.length);
// p.map(el => {
//     console.log(`Категория = ${el.firstChild.textContent}, кылькысть лішок ${el.firstElementChild.children.length}`);
// });

//====================================================== задача 2 ===================================================
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const a = document.querySelector('.list');
// console.log(a.firstElementChild.style.color = 'red');
// console.log(a.lastElementChild.style.color = 'blue');

//====================================================== задача 3 ===================================================
/*
  Дан ul склассом .list и массив строк.

  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// let Arr = document.querySelector('.list');
// for (let el of elements){
//     let li = document.createElement('li');
//     li.textContent = el;
//     Arr.append(li)
// }

//====================================================== задача 4 ===================================================
/*
  Напишите скрипт для создания списка ul.

  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/

// const ul = document.createElement('ul');
// const body = document.querySelector('body');
// body.append(ul);
//
// let text = '';
// while (text !== null){
//     text = prompt('enter text');
//     let li = document.createElement('li');
//     li.textContent = text;
//     ul.append(li);
// }

//====================================================== задача 5 ===================================================
/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// 'use strict';
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
//    return div
// }
//
// body.append(createPostCard());

//====================================================== задача 6 ===================================================

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/


// let root = document.querySelector('#root');
// let frag = document.createDocumentFragment();
// let width = 20;
// let height = 20;
//
// function createBoxes(num) {
//     for (let i = 0; i < num; i++) {
//         let div = document.createElement('div');
//         let color = Math.floor(Math.random() * 1000000);
//         div.style.backgroundColor = `#${color}`;
//
//         // div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//         // div.style.width = `${30 + 10 * i}px`;
//         // div.style.height = `${30 + 10 * i}px`;
//         // let r = Math.floor(Math.random() * 256);
//         // let g = Math.floor(Math.random() * 256);
//         // let b = Math.floor(Math.random() * 256);
//
//         frag.append(div)
//     }
//     return frag;
// }
// root.append(createBoxes(10));

// let rootDiv = document.querySelector('#root');
// let frag = document.createDocumentFragment();
// let createBoxes = function (num) {
//     for (let i = 0; i < num; i++) {
//         let div = document.createElement('div');
//         let r = Math.floor(Math.random() * 256);
//         let g = Math.floor(Math.random() * 256);
//         let b = Math.floor(Math.random() * 256);
//
//         div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//         div.style.width = `${30 + 10 * i}px`;
//         div.style.height = `${30 + 10 * i}px`;
//
//         frag.append(div);
//     }
//     return frag;
// };
// rootDiv.append(createBoxes(10));

// =======================================================================================================================

// const one = document.querySelector('#one');
// // const many = document.querySelector('#many');
//
// function first() {
//     alert(`I am action from first button`);
// }
// function second() {
//     alert(`I am action from second button`);
// }
// function hello() {
//     alert(`I am action from second button and hello function`);
// }

// one.addEventListener('click', first);

// many.addEventListener('click', first);
// many.addEventListener('click', second);                                  // активация обработчика по очереди
// many.addEventListener('click', hello);
// many.addEventListener('click', function () {
//     first();
//     second();                                                               // активация обработчика в одной модели обработчика
//     hello();
// });

// function withRemoveListener() {
//     alert(`I am action from first button and i remove after end`);
//     one.removeEventListener('click', withRemoveListener);                    // мщжна сразу же после выполнения прикратить работу функии
// }
// one.addEventListener('click', withRemoveListener);

// function clickCount() {
//     let clickNumber = 0;
//     let limit = 3;
//     let fake = clickNumber;
//     function increment() {
//         fake += 1;
//         if (fake > limit) {
//             alert('Не балуйся, йди на роботу');
//         }
//         console.log(clickNumber);
//     }
//     return increment;
// }
// let counter = clickCount();
// console.log(counter);
// let firstButton = document.querySelector('#one');
// firstButton.addEventListener('click', counter);

// 'use strict';
// function classAdd() {
//     this.classList.toggle('bigBtn');
// }
// // showThis();
// let one = document.querySelector('#one');
// one.addEventListener('click', classAdd);

// function showEvent(e) {
//     console.log(e);
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // console.log(this);
// }
// let one = document.querySelector('#one');
// one.addEventListener('click', showEvent);
// window.addEventListener('keypress', showEvent);

// function resizeFont(e) {
//     console.log('this',this);
//     console.log('target',e.target);
//     e.target.classList.toggle('bigText');
// }
// // bad practice
// // let listItem = document.querySelectorAll('.item');
// // listItem.forEach(el => el.addEventListener('click', resizeFont));
// // console.log(listItem);
//
// // good practice
// let list = document.querySelector('.list');
// list.addEventListener('click', resizeFont);









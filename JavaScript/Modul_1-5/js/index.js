
// ===============================  Prompt, alert, Переменные, if...else, switch  ======================================
// let age = prompt('Сколько Вам полных лет?');
// console.log('Ваш возраст:', age, 'лет');
// let day = (age * 365);
// console.log('Вы прожили дней:', day, 'дней');
// let hour = (day * 24);
// console.log ('Вы прожили часов:', hour, 'часов');
// let min = (hour * 60);
// console.log ('Вы прожили минут:', min, 'минут');
// let sec = (min * 60);
// console.log ('Вы прожили секунд:', sec, 'секунд');

// let name = prompt('Enter your name');
// let age = prompt(' Enter your age');
// console.log(`My name is ${name} i am ${age} years old`);

// let day = 18;
// let month = 6;
// let year = 2018;
// console.log(`date = ${day}\\0${month}\\${year}`);

// let time = prompt('введшть час');
// if(time>=14 && time <= 15){
//     alert('Йди вже ъсти');
// }
// else {
//     alert('Нефиг жрать, пора писать код')
// }

// let balanse = prompt('введшть , баланс');
// if(balanse >= 200){
//     alert('Поїздка до Єгипту');
// }
// else {
//     alert('Залишайтесь вдома')

// let luckyNumber = +prompt('numb');
// if (luckyNumber === 1) {
//     console.log('more');
// } else if (luckyNumber === 3) {
//     console.log('little more');
// } else if (luckyNumber === 7) {
//     console.log('You win');
// } else {
//     console.log('try again');
// }

// let luckyNumber = 1;
// switch (luckyNumber) {
//     case 1:
//     case 2:
//         console.log('more');
//         break;
//     case 3:
//         console.log('little more');
//         break;
//     case 7:
//         console.log('You win');
//         break;
//     default:
//         console.log('try again');
//         break;
// }

// let month = prompt('введите месяц').toLowerCase();
// if (month === 'june' || month === 'july' || month === 'august') {
//     alert('summer');
// } else if (month === 'september' || month === 'october' || month === 'november') {
//     alert('autumn');
// } else if (month === 'december' || month === 'junuary' || month === 'february') {
//     alert('winter');
// } else if (month === 'march' || month === 'april' || month === 'may') {
//     alert('spring');
// }

// let month = prompt('введите месяц').toLowerCase();
// switch (month) {
//     case 'june':
//     case 'july':
//     case 'august':
//         alert('summer');
//         break;
//     case 'september':
//     case 'october':
//     case 'november':
//         alert('autumn');
//         break;
//     case 'december':
//     case 'junuary':
//     case 'february':
//         alert('winter');
//         break;
//     case 'march':
//     case 'april':
//     case 'may':
//         alert('spring');
//         break;
//     default:
//         alert('none information');
//         break;
// }

// =====================================================  Массиви  =====================================================
// let a = 'qwertyuiop';
// let b = 'asdfghjkl;';
// let c = 'zxcvbnm,./';
// console.log(b[5]+a[2]+b[8]+b[8]+a[8]+a[1]+a[8]+a[3]+b[8]+b[2]);

// let c = 'Hello'
// console.log(c.toLowerCase());
// console.log(c.toUpperCase());

// let a = 'heroplus';
// console.log(a.substring(1,3));
// console.log(a.substr(1, 3));

// ========================  как  создать массив   ============================
// два способа записи массива
// let firstArray = [1, 2, 3];
// let secondarray = new Array(5, 6, 7, 8);
//
// let summer = ['june', 'jule', 'august'];
//
// ...........пустой массив...........
// let empty = [];
//
// =========================   витягнути елемент   =========================
// let firstArr = [1,2,3,4,5,6,10,7,8,9];
// console.log(firstArr[6]);
// console.log(firstArr[2]);

// ............вытянуть любую цыфру внутри массивов....................
// let firstArr = [1,2,3,4[4,5,6,[1,2,3,4,5,6,10,7,8,9[error]]]];
// console.log(firstArr[4][3][10]); // error - достукатись можна до нього таким чином

// ............способы добавления в массив.............
// let firstArr = [1,2,3];
// firstArr.push(10); плюс 1 елемент c конца массива
// firstArr.pop(10); минус 1 елемент с конца массива (удаляет элемент и записывает его в переменную например let del(10))
// firstArr.shift(10); минус 1 елемент с начала массива (работает по аналогии с pop)
// firstArr.unshift(10) плюс 1 елемент с начала массива (работает по аналогии с push )

// let firstArray = [1, 2, 3, 4];
// let secondArr = [5, 6, 7];
// let thirdArr = ['a', 'b', 'c'];
// let first = firstArray.pop();
// let second = secondArr.shift();
// let third = thirdArr.pop();
// let fourArr = [];
// fourArr.push(first, third, second);

// ............  длинна массива(количество елементов)  .............
// let firstArray = [5, 8, 13, 14];
// console.log(firstArray.length);

// ..............   slice and splice   .............
// let arr = [1,2,3,4,5,6,10,7,8,9];
// let newarr = arr.slice(2.3); копия елемента с массива в скобках задано начало и конец, если конец не задать вырежет все после начала, если ничего не задать вырежет все

// let arr = [1,2,3,4,5,6,10,7,8,9];
// let x = arr.splice(1, 3); вырезка елемента с массива, первая цифра в скобках указывает на елемент  с которого начать,вторая на количество едементов для вырезки
// let у = arr.splice(1, 0, 25); если запись с трех цифр , то третья записывает элемент( вторая 0 - не вырезает ничего , если цифра то вырезает количество едементов)

// let arr = [1, 5, 9, 8, 7, 10];
// delete
// let x = arr.splice(1, 3);
// console.log(arr);
// console.log(x);
// // paste
// arr.splice(4, 0, 'b');
// arr.splice(1, 0, 'javascript');
// console.log(arr);
// // replace
// arr.splice(5, 1, 'abc');
// console.log(arr);
// arr.splice(1, 4, 'java', 'script');
// console.log(arr);


// вивести в консоль випадкову тваринку з масиву
// let animals = ["cat","dog","rabbit","bird","fish"];
// let random = Math.floor(Math.random()*animals.length);
// console.log(animals[random]);
// let comp = (animals[random]);
// let user = prompt('enter - "cat","dog","rabbit","bird","fish"');
//
// if (comp === user) {
//     alert('your win');
// } else {
//     alert('your lose');
// }

// // 1) Запропонувати користувачу ввести логін
// // 2) Якщо логін є в масиві повідомити юзера що такий логін існує
// // 3) Якщо такого логіна немає привітати користувача з реєстрацією і додати його логін в масив loginArr
// let loginArr = ['bob', 'mango', 'admin', 'batman', 'superuser'];
// let log = prompt('write your nickname');
//
// if (loginArr.includes(log)){
//     alert('choose another name');
// } else {
//     loginArr.push(log);
//     alert('ok!')
// }
// console.log(loginArr);


// ================  split, reverse, join  =================
// 1)Перевірити чи являється слово паліндромом (слово що читається справа на ліво і зліва на право однаково)
// 2)Зробити перевірку і вивести в консоль true or false

// let str = 'oko';
// let str2 = 'test';
//
// console.log(str.split('').reverse().join(''));
// console.log(str2.split('').reverse().join(''));

// ====================================================  ЦИКЛЫ  =======================================================
// while - сначала проверяет потом выполняет действие
// do while- сначала выполняет потом провеяет
// for - выполняет проверку со считчиком(не обязательно) , счетчиков может быть несколько
// for...of - выполняет проверку по заданной длинне массива

// ==============================================  ЦИКЛ  while  =======================================================
// let number = 3;
// let arr = [];
//
// while (number >= 1) {
//     let result = +prompt('enter number');
//     arr.push(result);
//     namber--;
// }

// let number = 8;
// let arr = [];
//
// while (number < 10) {
//     let result = Math.floor(Math.random()*10);
//     arr.push(result);
//     number++;
// }
// console.log(arr);


// ============================================  ЦИКЛ  do while =======================================================
// let work = 1;
// do {
//     console.log('Done');
//     work++;
// } while (work > 5);

// ====================================== цикл for ======================================
// let arr = [5, 10, 25, 68, 78, 95];
// for ( let i = 0, max = arr.length; i < max; i++) {
//     console.log(Math.pow(arr[i],2))
// }

// 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки
// 4) Ці назви зберігати в масиві
// 5) Вивести масив з покупками по закінченю цикла в консоль.

// let buy = +prompt('скільки товарів хочете купити7');
// let arr = [];
// for (let product = 0; product < buy; product++) {
//     let ask = prompt('назва товару');
//     arr.push(ask)
// }
// console.log(arr);

// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         break
//     }
//     console.log(i);
// }
//
// for (let i = 1; i < 11; i++) {
//     if (i % 2 !==0){
//         continue
//     }
// }

// ====================================== цикл for...of ======================================
// let arr = [1,2,3,4,5,6];
// for (let element of arr) {
//     console.log(element*2)
// }

// let arr = [1,2,3,4,5,6];
// let sum = 0;
// for (let element of arr) {
//     // можна записать двумя вариантами
//     sum = sum + element;
//
//     sum += element;
// }
// console.log(sum);

// let students = ['Stupak', 'Yurchenko', 'Tabanyk', 'Baranov', 'Didenko', 'Chuprun', 'Babenko', 'Mukanovskyi', 'Plaski',
//     'Sokolov', 'Galatuk', 'Savin', 'Grygorchuk', 'Krasnoiarov', 'Rotman', 'Scryagin', 'Humenchuk'];
// let random = Math.floor(Math.random() * students.length);
// console.log(students[random]);

// ===================================================   Function   ===================================================
// function sum() {
//     console.log(5 + 6)
// }
// sum();

// function sum(x, y) {
//     console.log(x + y)
// }
// sum(10,12);
// sum(100,12);
// sum(10,52);
// sum(0,73);

// function showText() {
//     let str = 'I am function';
//     return str;
// }
// console.log(showText());

// function calculator(a, b) {
//     let sum = a + b; // 15
//     let mult = a * b; // 50
//     let minus = a - b; // 5
//     let div = a / b; // 2
//     let result = sum + mult + minus + div; // 72
//     return ['сума ' + sum, mult, minus, div, result];
// }

// ======================  3варіанта запису однакової функції  =========================
// function sum(a, b) {                 // варіант 1
//     return a + b;
// }
// console.log(sum(2, 4));
//
// let sum1 = (a, b) => {               // варіант 2
//     return a + b
// };
// console.log(sum1(2, 4));
//
// let sum2 = (a, b) => a + b;          // варіант 3
// console.log(sum2(2, 4));

// 1) Написати функцію spliceElement() що вирізає з массива третій елемент
// 2) Написати функцію checkExist() що перевіряє чи є цей вирізаний елемент в базі
// 3) Якщо його немає додати його, якщо є нічого не робити addNumber()

// let dataBase = [5, 10, 25, 68, 75, 43];
// let workArr = [10, 20, 30, 40];
//
// function spliceElement(arr, position) {
//     return arr.splice(position,1)[0];
// }
//
// function checkExist(arr, number) {
//     return arr.includes(number)
// }
//
// function addNumber(arr, number) {
//     let result = spliceElement(workArr, 2);
//     if (!checkExist(arr, result)){
//         arr.push(result);
//     }
// }
// addNumber(dataBase);
// console.log(dataBase);

// ================================== аргумент функции ===================================
// function sumArg() {
//     // console.log(arguments);
//     // arguments = 1, 5, 9, 12, 1, 100;
//     // return arguments;
//     // console.log(arguments[1]);
//     let arr = Array.from(arguments);
//     // console.log('Array arguments', arr);
//     if (typeof arr[0] === 'number') {
//         let sum = 0;
//         for (let item of arr) {
//             sum += item;
//         }
//         return sum;
//     } else {
//         let sum = '';
//         for (let item of arr) {
//             sum += item + ' ';
//         }
//         return sum;
//     }
// }
//
// console.log(sumArg(1, 5, 9, 12, 1, 100.56));
// console.log(sumArg(5, 9));
// console.log(sumArg('test', 'string', 'hello'));


// ========================================= замыкание =========================================
// замыкание это область виденья функции на которую не могут влиять внешние факторы. к ней можно
// достучатся только изнутри...

// function secretPassword() {
//     let password = 'xh38sk';
//     function guessPassword(guess) {
//         if (guess === password) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return guessPassword;
// }
//
// let passwordGame = secretPassword();
// console.log(passwordGame);
// let tryOne = passwordGame('heyisthisit?');
// let tryTwo = passwordGame('xh38sk');
// console.log(tryOne);
// console.log(tryTwo);


//количество покупок двух покупателей...
// function counter() {
//     let count = 0;
//     function increment() {
//         count +=1;
//         return count;
//     }
//     return increment;
// }
// let user1 = counter();
// console.log(user1);
// let first = user1();
// let user2 = counter();
// let user2First = user2();
// let user2Second = user2();
// let user2Third = user2();
// let user2Fourth = user2();
// console.log('first user counter',first);
// console.log('second user counter',user2Fourth);

// (function () {
//     let x = 10;
//     let y = 20;
//
//     console.log(x);  // 10
//     console.log(y);  // 20
// })();

// const printString = function (cb) {
//     let str = cb();
//     let sum = 5 + 6;
//     return str + sum;
// };
//
// function hello() {
//     return 'Hello World';
// }
//
// console.log(printString(hello));


// const pow = (base, exponent) => {
//     if (exponent === 0) return 1;
//
//     return base * pow(base, exponent - 1);
// };

// function pow(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i +=1){
//         result = result * a;
//     }
//     return result;
// }

// ;const igorevich = (base) => {
//     if (base === 0) return 1;
//     return base*igorevich(base-1);
// };
//
// console.log(igorevich(6));

// Написати ф-ю що приймає аргументом строку формата '160px' і вертає строку формата '10rem'
// function rem(px) {
//     let a = 16;
//     return parseFloat(px) / a + 'rem'
// }
//
// console.log(rem('160px')); // 10rem
// console.log(rem('16px')); // 1rem
// console.log(rem('80px')); // 5rem
// console.log(rem('8px')); // 0.5rem
//
// // написати ф-ю що приймає 2 параметра (розмір елемента і розмір контейнера) і повертає розмір елемента в %
// function prc(box, conteiner) {
//     let a = 100;
//     return parseFloat(box) / parseFloat(conteiner) * a + '%'
// }
//
// console.log(prc('160px', '1600px')); // 10%
// console.log(prc('16px', '1600px')); // 1%
// console.log(prc('80px', '1600px')); // 5%
// console.log(prc('8px', '1600px')); // 0.5%


// Написаьи ф-ю що приймає 3 параметра:
// 1) Розмір елемента - string
// 2) Розмір контейнера - string
// 3 ) одиниці виміру в які треба конвертувати - 'rem' or 'prc'

// function pixelConvert(el, cont, unit) {
//     let a = 16;
//     if (unit === 'rem') {
//         return parseFloat(el) / a + 'rem';
//     } else {
//         return parseFloat(el) / parseFloat(cont) * a + '%';
//     }
// }
// console.log(pixelConvert('160px', null, 'rem')); // 10rem
// console.log(pixelConvert('160px', '1600px', 'prc')); // 10%


// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.


// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
// };
//
// let hasName = 'name' in hotel;
// let hasStars = hotel.hasOwnProperty('stars');
// let hasPool = 'pool' in hotel;
//
// console.log(hasName); // true
// console.log(hasStars); // true
// console.log(hasPool); // false

// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     getName: function () {
//         return hotel.name;
//     },
//     getName() {
//         return hotel.name;
//     },
//     getStars: () => hotel.stars,
//
//     changeCapacity(value) {
//         hotel.capacity += value;
//     },
//     createKey(value) {
//         hotel.address = value
//     }
// };

// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};
// //
// // Object.assign(first, last);
// const copy = Object.assign({}, first, last);
// // console.log(person);
// //
// console.log(first);
// console.log(last);
// console.log(copy);


// const defaultSettings = {
//     name: "Mango",
//     age: 2,
//     status: "happy",
//     isActive: false,
//     isAdmin: false,
// };
//
// const updatedSettings = {
//     age: 3,
//     status: "cheerful",
//     isActive: true,
// };
//
// Object.assign(defaultSettings, updatedSettings);

// Перебор ключей key объекта hotel
//   for (let key in hotel) {
//     // console.log('Key: ', key);
//     //   console.log(hotel[key])
//       console.log(`Key = ${key}, value = ${hotel[key]}`)
//   }


// =======================================  правильність написання кода for in  ========================================
// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
// // console.log(hotel);
// for (const key in hotel) {
//     let hasKey = hotel.hasOwnProperty(key);
//     if (hasKey) {
//         console.log('Value: ', hotel[key]);
//     }
// }
// // console.log(hotel);


//   const keys = Object.keys(hotel);
//   const values = Object.values(hotel);
//   const entries = Object.entries(hotel);
//   console.log(keys);
//   console.log(values);
//   console.log(entries);


// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// let name = hotel.name;
// let stars = hotel.stars;
// let capacity = hotel.capacity;

// const { name, stars, status ,capacity } = hotel;
// console.log(name);
//   // Объявим переменные и присвоим им значения из объекта


// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
//
// const {name = "hotel", stars = 3, status = "empty"} = hotel;
//
// console.log(name);
// console.log(stars);
// console.log(status);


// let dog = {
//     name: 'Mango',
//     age: 5,
//     isHappy: true,
// };
//
// // function showObjVal(obj) {
// //     console.log(obj.name);
// //     console.log(obj.age);
// //     console.log(obj.isHappy);
// // }
//
// function showObjVal({name, age, isHappy}) {
//     // console.log(name);
//     // console.log(age);
//     // console.log(isHappy);
//     return `dog name is ${name} age is ${age} happy ${isHappy}`;
// }
//
// console.log(showObjVal(dog));

// let {name, stars, status} = hotel;
// dest arr
// let strNum = ['one', 'two', 'three'];
// let [a, b, c, d] = strNum;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// let numb = [5, 10, 20];

// function showArrVal(arr) {
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
// }

// function showArrVal([a, b, c]) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// showArrVal(numb);


/*
  Напишите скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение
      используя цикл for...in

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };
//
// user.mood = 'happy';
// console.log(user);
// user.hobby = 'javascript';
// delete user.premium;
//
// for(let key in user) {
//     console.log(`${key}: ${user[key]}`)
// }
// let arrKeys = Object.keys(user);
// console.log(arrKeys);
// for (let keyName of arrKeys) {
//     (`${keyName}: ${user[keyName]}`)
// }
// let objEnt = Object.entries(user);
// console.log(objEnt);
// for(let arrEntry of objEnt) {
//     (`${arrEntry[0]}: ${arrEntry[1]}`)
// }

/*
  Напишите скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/
// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
// };
//
//
// let max = 0;
// let name = '';
// for (let key in tasksCompleted) {
//     if (tasksCompleted[key] > max) {
//         name = key;
//         max = tasksCompleted[key]
//     }
// }
// console.log(name);

// let values = Object.values(tasksCompleted);
// let users = Object.keys(tasksCompleted);
// // console.log(values);
// console.log(users);
// // console.log(Math.max(...values));
// // Math.max([29, 35, 1, 99]) // Math.max(values)
// // let maxTask = Math.max(29, 35, 1, 99); // Math.max(...values)
// let maxTask = Math.max(...values);
// let winnerIndex = values.indexOf(maxTask);
// let winner = users[winnerIndex];
// console.log(winner);


/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// function countProps(obj) {
//    return Object.keys(obj).length;
// }
// countProps = obj => Object.keys(obj).length;
//
// console.log(
//     countProps({})
// ); // 0
// console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
// ); // 3


// ================================  спред оператор. рест оператор. умови роботи  ======================================

// // add the elements of an existing array into a new array
// let certsToAdd = ['Algorithms', 'Front End'];
// let certifications = ['Web Design', ...certsToAdd,'Data Visualization', 'APIs', 'Information Security'];
// console.log(certifications);

// // pass elements of an array as arguments to a function
// function addThreeNumbers(x, y, z) {
//     console.log(x + y + z)
// }
//
// variant #1
// let salary = [100, 200, 500, 800];
// addThreeNumbers(salary[0],salary[1],salary[2]);
// variant #2
// let salary = [100, 200, 500, 800];
// let [a, b, c] = salary;
// addThreeNumbers(a, b, c)
// variant #3
// let salary = [100, 200, 500, 800];
// console.log(addThreeNumbers(...salary));
// console.log(addThreeNumbers(100, 200, 500, 800));

// // copy arrays
// let arr = [1, 2, 3];
// let arr2 = arr;

// let arr = [1, 2, 3];
// let arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr);
// console.log(arr2);

// // concatenate arrays
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // let arr3 = arr1.concat(arr2);
// arr1 = ["BootCamp",...arr2,...arr1];
// // console.log(arr3);
// console.log(arr1);

// REST: condense multiple elements into an array
// function multiply(multiplier,...theArgs) {
//     console.log('multiplier', multiplier);
//     console.log('theArgs', theArgs);
// }
//
//  multiply(2, 1, 2, 3, 8, 9);

// numbers.methodName(function(element,index,arr){}); ----- в кожній функції що працює з методами має бути за замовчуванням 3 параметра

// let numbers = [0,2,4];
// let newNumbers = numbers.map(function (element,index,arr) {
//     return element * 2;
// });
// console.log(numbers);
// console.log(newNumbers);


// ===================map===================
// let numbers = [0,2,4];
// numbers.map(function (item) {
// return item*2
// });

// let arrowNumbers = numbers.map(element => element*20);
// console.log(arrowNumbers);
// const addOne = arr.map(n => n + 1);
// console.log(addOne); // [1, 3, 5]
//
// к значению массива добавим значение позиции этого числа
// const numbers = [0, 2, 4, 6, 8, 10];
// const flipFlop = numbers.map(function (element, index) {
//     return element + index
// });
// console.log(flipFlop);
//
// const flipFlop = numbers.map((element, index) => element + index);
// console.log(flipFlop);
//
// const addPosition = odd.map((n, i) => n + i);
// console.log(addPosition); // [0, 3, 6, 9, 12, 15]


// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filteredArr = numbers.filter(function (item) {
//     if (item > 5) {
//         return item
//     }
// });
//
// let updateFilter = numbers.filter(item => item > 5 ? item : null);
//
// console.log(filteredArr);
// console.log(numbers);


// const logins = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
// let findLogin = logins.find(function (el) {
//     return el === 'Newton';
// });
//
// let arrowFind = logins.find(el => el === 'Newton');
//
// console.log(findLogin);


// const money = [100, 500, 150, 250, 5]; //[true, true, false, true]
// const go1 = money.every(function (element) {
//     return element > 0;
// });
// console.log(go1);


// const money2 = [100, 500, 300, 250];
// const go = money2.some(function (element) {
//     return element >= 1000
// });
// console.log(go);


// let numbers2 = [4, 2, 5, 1, 3, 11];
// numbers2.sort(function (a, b) {
//     // if (a > b) {
//     //     return -1
//     // } else {
//     //     return 1
//     // }
//     // return b - a;
//     return a > b;
// });
// console.log(numbers2);


// let arr = [
//     {name: 'A', price: 500},
//     {name: 'C', price: 700},
//     {name: 'B', price: 800},
//     {name: 'B', price: 50}
// ];
//
// arr.sort(function (el1, el2) {
//     return el1.name > el2.name;
// }).sort(function (el1, el2) {
//     if (el1.name === el2.name) {
//         return el1.price > el2.price;
//     }
//
// });
// console.log(arr);


// const logins = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
// logins.sort();
// logins.sort().reverse();
// console.log(logins);


// const hoursWorkedPerWeek = [
//     {day: 'M',number: 9},
//     {day: 'T',number: 10},
//     {day: 'W',number: 11},
//     {day: 'T',number: 5},
//     {day: 'F',number: 12}
// ];
// // let sum = 0;
// // for (let el of hoursWorkedPerWeek) {
// //     sum +=el
// // }
// // console.log(sum);
//
// let result = hoursWorkedPerWeek.reduce(function (acc, el) {
//     return acc + el.number;
// },0);
// let arrResult = hoursWorkedPerWeek.reduce((acc, el) => acc + el.number, 0);
// console.log(result);

// let superArr = [[1, 5, 10, 11], [12, 15, 18, 17], [25, 65, 47, 89]];
// let flatArr = superArr
//     .reduce(function (acc, arr) {
//         return acc.concat(arr)
//     }, []).sort((a, b) => a - b).filter(el => el > 16);
//
// console.log(flatArr);

// let superArr = [[1, 5, 10, 11], [12, 15, 16, 17], [25, 65, 47, 89]];
// let flatArr = superArr
//     .reduce((acc, arr) => acc.concat(arr),[])
//     .sort((a, b) => a - b)
//     .filter(el => el > 16);


/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */
/*
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// // const findGreaterThen = (num, arr) => {
// //     const result = [];
// //     for (let i = 0, max = arr.length; i < max; i += 1) {
// //         if (arr[i] > num) {
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // };
// const findGreaterThen = (num, arr) => arr.filter(item => item > num);              //НОВЫЙ ВАРИАНТ
// console.log(findGreaterThen(2, [1, 2, 3, 4, 5])); // [3, 4, 5,]
// console.log(findGreaterThen(3, [1, 2, 3, 4, 5])); // [4, 5,]
// console.log(findGreaterThen(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5,]

/*
  Функция multiplyBy принимает два аргумента - число и массив.
  Возвращает массив все значения которого умножены на число.
*/
// // const multiplyBy = (num, arr) => {
// //     let result = [];
// //
// //     for (let i = 0, max = arr.length; i < max; i += 1) {
// //         result.push(arr[i] * num);
// //     }
// //
// //     return result;
// // };
// const multiplyBy = (num, arr) => arr.map(item => item*num);              //НОВЫЙ ВАРИАНТ
// console.log(multiplyBy(2, [1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
// console.log(multiplyBy(3, [1, 2, 3, 4, 5])); // [3, 6, 9, 12, 15]
// console.log(multiplyBy(4, [1, 2, 3, 4, 5])); // [4, 8, 12, 16, 20]

/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/
// // function summAllNumbers(...args) {
// //     let accumulator = 0;
// //
// //     for (let i = 0, max = args.length; i < max; i += 1) {
// //         accumulator += args[i];
// //     }
// //
// //     return accumulator;
// // }
// const summAllNumbers = (...args) => args.reduce((acc, item) => acc+item,0);                 //НОВЫЙ ВАРИАНТ
// console.log(summAllNumbers(1, 2, 3)); // 6
// console.log(summAllNumbers(1, 2, 3, 4)); // 10
// console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15

/*
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
// // const findEvery = (num, arr) => {
// //     for (let i = 0, max = arr.length; i < max; i += 1) {
// //         if (arr[i] < num) {
// //             return false;
// //         }
// //     }
// //
// //     return true;
// // };
// const findEvery = (num, arr) => arr.every(item => item >= num);                    //НОВЫЙ ВАРИАНТ
// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true


/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.

  Функция должна возвращать массив всех значений этого ключа из arr.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
// const getPropValues = (arr, prop) => arr.map(item => item[prop]);                       //НОВЫЙ ВАРИАНТ
// console.log(getPropValues(guests, "name")); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
// console.log(getPropValues(guests, "age")); // [20, 18, 30, 45]
// console.log(getPropValues(guests, "isActive")); // [true, false, true, false]


/*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const users = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];

// function setGuestState(arr, period) {
//     return arr.map(elem => period < elem.inactiveDays ? {...elem, isActive: false} : {...elem, isActive: true})
// }

// const setGuestState = (arr, period) => arr.map(elem => period < elem.inactiveDays ? {...elem, isActive: false} : {...elem, isActive: true});            //НОВЫЙ ВАРИАНТ
// console.log(setGuestState(users, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
// console.log(setGuestState(users, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
// console.log(setGuestState(users, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true


/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
// // const getActiveGuests = (guests) => {
// //    return guests.filter(function(el){
// //         if (el.isActive === true) {
// //             return el
// //         }
// //     })
// // };
// const getActiveGuests = (guests) =>  guests.filter(el => el.isActive === true ? el: null);                   //НОВЫЙ ВАРИАНТ
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax


/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
// const getGuestsOlderThan = (guests, age) => guests.filter(item => item.age > age ? true : null);                 //НОВЫЙ ВАРИАНТ
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
// console.log(getGuestsOlderThan(guests, 55)); // []


/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
// ];
// const getGuestById = (guests, id) => guests.find(item => item.id === id);
// console.log(getGuestById(guests, 3)); // {id: 3, name: 'Ajax', age: 30}
// console.log(getGuestById(guests, 1)); // {id: 1, name: 'Mango', age: 20}
// console.log(getGuestById(guests, 5)); // undefined


/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*/
// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
// };
// const numb = Object.values(order).reduce((acc, item) => acc + item, 0);
// console.log(numb); // 150


/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*/
// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     cheese: 30,
//     chicken: 40
// };
// const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
// };
// const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 3
// };
// const getTotalPrice = (products, order) => {
//     const ARR = [];
//     for (let key in order) {
//         let numb = order[key] * products[key];
//          ARR.push(numb)
//     }
//     return ARR.reduce((acc, item) => acc + item,0);
// };
// console.log(getTotalPrice(products, orderA)); // 140
// console.log(getTotalPrice(products, orderB)); // 130


/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/
// const guestsA = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true }
// ];
//
// const guestsB = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: true },
//     { name: "Ajax", isActive: true }
// ];
// const allGuestsActive = (guests) => Object.values(guests).every(item => item.isActive === true);
// console.log(allGuestsActive(guestsA)); // false
// console.log(allGuestsActive(guestsB)); // true


// const scientist = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// // 1) отримати масив вчених що народилися в 19 ст
// const names = arr => arr.filter(item => item.year >= 1800).map(el => el.last);
// console.log(names(scientist));
// // 2) знайти суму років скільки прожили всі вченні
// const years = arr => arr.reduce((acc, el) => acc + (el.passed - el.year), 0);
// console.log(years(scientist));
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який родився саме пізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A


/*
  Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/
// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({a: 1})); // false
// console.log(isObjectEmpty({a: 1, b: 2})); // false


/*
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/
// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80})); // 330

/*
  Напишите функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа,
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
// ];
// console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']
// console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']
// console.log(getAllPropValues(users, 'active')); // []


// ed this MATLAB snippet: Untitled
// Написати функцію що видає фінальний результат в гольфі
// function golfScore(par, strokes) приймає 2 аргумента
// par - кількість ударів що дозволено, strokes - реальна кількість ударів
// Потрібно порівняти strokes з такими критеріями
// 1 дасть "Hole-in-one!"
// strokes <= par -2 дасть "Eagle"
// strokes == par -1 дасть "Birdie"
// strokes == par дасть "Par"
// strokes == par +1 дасть "Bogey"
// strokes == par +2 дасть "Double Bogey"
// Все інше "Go Home!"

// ======================================= <  29.06.2018  > =======================================

// Написати об'єкт tank який буде мати такі властивості і методи.
// 1) coordinate 10 координати Х
// 2) CoordinateY 10 координати по У
// 3) life 100 здоровя
// 4) ammunition 5 кількість патронів
// 5) engineStatus true статус двигуна
// 6) moveToX(x) рухається до точки х
// 6) moveToY(у) рухається до точки у
// 7) fireTo(x, y) стріляє в точку х, у
// 8) canFire() перевірка чи є патрони
// 9) checkHealth() перевірка чи є неповне здоров'я
// 10) heal(x) додає здоровя
// 11) checkEngine() перевірка статусу двигуна
// 12) repairEngine() починка двигуна
// 13) showCoordinate() показує координати танка
// 14) name імя гравця
// 15) color

// 'use strict';
// const tank = {
//     x: 10,
//     y: 10,
//     life: 100,
//     ammunition: 5,
//     engineStatus: true,
//     name: 'T-34',
//     color: 'green',
//     moveToX(x) {
//         this.x = this.x + x
//     },
//     moveToY(y) {
//         this.y = this.y + y
//     },
//     fireTo(x, y) {
//         if (this.canFire()) {
//             this.amunition = this.amunition - 1
//         } else {
//             alert('You have no bullets')
//         }
//     },
//     canFire() {
//         return this.ammunition > 0;
//     },
//     checkHealth() {
//         return this.life > 0 && this.life < 100
//     },
//     health(x) {
//         if (this.checkHealth()) {
//             this.life = this.life + x
//         } else {
//             alert('Health is full')
//         }
//     },
//     checkEngine() {
//         return this.engineStatus === true;
//     },
//     repairEngine() {
//         if (this.checkEngine()) {
//             alert('Engine is repaired')
//         } else {
//             this.engineStatus = true
//         }
//     },
//     showCoordinate() {
//         return {
//             x: this.x,
//             y: this.y,
//         }
//     },
// };

// 'use strict';
// function Tank(name, color, x, y) {
//     this.x = x;
//     this.y = y;
//     this.life = 100;
//     this.ammunition = 5;
//     this.engineStatus = true;
//     this.name = name;
//     this.color = color;
//     this.moveX = function (x) {
//         this.x = this.x + x
//     };
//     this.moveY = function (y) {
//         this.y = this.y + y
//     };
//     this.fireTo = function(x, y) {
//         if (this.canFire()) {
//             this.amunition = this.amunition - 1
//         } else {
//             alert('You have no bullets')
//         }
//     };
//     this.canFire = function() {
//         return this.ammunition > 0;
//     };
//     this.checkHealth = function() {
//         return this.life > 0 && this.life < 100
//     };
//     this.health = function(x) {
//         if (this.checkHealth()) {
//             this.life = this.life + x
//         } else {
//             alert('Health is full')
//         }
//     };
//     this.checkEngine = function() {
//         return this.engineStatus === true;
//     };
//     this.repairEngine = function() {
//         if (this.checkEngine()) {
//             alert('Engine is repaired')
//         } else {
//             this.engineStatus = true
//         }
//     };
//     this.showCoordinate = function() {
//         return {
//             x: this.x,
//             y: this.y,
//         }
//     };
// }

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


// const hotel = {
//     name: 'Resort Hotel'
// };const hotel1 = {
//     name: '4 Seasons Hotel'
// };const hotel2 = {
//     name: '7 days Hotel'
// };
//
// function showName(name) {
//     console.log(`${name} name is ${this.name}`);
// }
// showName.call(hotel2, 'Tony');
// showName.call(hotel, 'Tony');
// showName.call(hotel1, 'Tony');
//
// const hotel = {
//     name: 'Resort Hotel',
// };
// const hotel2 = {
//     name: '4 Seasons Hotel',
// };
//
// const hotel3 = {
//     name: '7 days Hotel',
// };
//
//
// function showName(name, city) {
//     // console.log(`${name} welcomen to ${city} hotel name ${this.name}`);
//     console.log(this);
// }
// showName.call(hotel3, 'Tony', 'Kyiv',5,'dsfsdf');

// call
// showName.call(hotel);
// showName.call(hotel2);
// showName.call(hotel3);
// add arguments

// apply
// showName.apply(hotel,['Tony', 'Maroccccco']);
// showName.apply(hotel2,['Tony', 'Magadan']);
// showName.apply(hotel3,['Tony', 'Paris','Zhmerynka']);

// call - coma
// apply - Array

// bind
// const boundShowName = showName.bind(hotel);
// boundShowName();

// const mick = {
//     name: 'Mick',
//     modules: 3,
//     learn(theme) {
//         this.modules += 1;
//         return `Student ${this.name} passed ${theme}`;
//     }
// };
// // //
// const jane = {
//     name: 'Jane',
//     modules: 5,
//     learn(theme) {
//         this.modules += 1;
//         return `Student ${this.name} passed ${theme}`;
//     }
// };
//
// function Student(name, modules ) {
//     // this = {}
//     this.name = name;
//     this.modules = modules;
//     this.learn = function (theme) {
//         this.modules += 1;
//         return `Student ${this.name} passed ${theme}`;
//     };
//     this.isActive = true
//     // {
//     // name: nameArg,
//     // modules: modulesArg,
//     // learn: func,
//     // isActive: true
//     // }
//     // return this
// }
//
// const mick = new Student('Mick', 5); // {}
// const jane = new Student("Jane", 3);
// console.log(mick);
// console.log(jane);


// function User(setting) { // obj with settings
//     this.age = setting.age;
//     this.name = setting.name;
//     this.isActive = setting.isActive;
//     this.isPremium = setting.isPremium;
//     this.likesCount = setting.likesCount;
//     this.showLikes = function () {
//       return this.likesCount;
//   }
// }
// ​
// const jane = new User({age: 25,name: 'Jane',isActive: true,isPremium: true,likesCount: 500});
// const mick = new User({name: 'Mick',age: 30,likesCount: 150,isActive: false,isPremium: true});
// console.log(mick);
// console.log(jane);

// function User({age, name, isActive = false, isPremium = false, likesCount = 0}) {
//     this.age = age;
//     this.name = name;
//     this.isActive = isActive;
//     this.isPremium = isPremium;
//     this.likesCount = likesCount;
//
//     this.showLikes = function () {
//         return this.likesCount;
//     }
// }
// //
// const jane = new User({age: 25,name: 'Jane', isPremium: true});


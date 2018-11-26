'use strict';
//======================================= задача 1 ===========================================
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
// user.hobby = 'javascript';
// delete user.premium;
// for (let key in user) {
//     console.log(`${key}: ${user[key]}`)
// }
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.entries(user));
//
// // let key = Object.keys(user);
// // console.log(key);
// // for (let el of key) {
// //     (`${el}: ${user[el]}`)
// // }
// // let ent = Object.entries(user);
// // console.log(ent);
// // for (let el of ent) {
// //     (`${el[0]}: ${el[1]}`)
// // }

//======================================= задача 2 ===========================================
/*
  Напиште скрипт который определит и выведет в консоль имя сотрудника который выполнил больше всех задач.
  Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
};
//======================================= задача 3 ===========================================
/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// console.log(countProps({})); // 0
// console.log(countProps({a: 1, b: 3, c: 'hello'})); // 3

//======================================= задача 4 ===========================================
/*
  Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({a: 1})); // false
// console.log(isObjectEmpty({a: 1, b: 2})); // false

//======================================= задача 5 ===========================================
/*
  Напишите функцию countTotalSalary(salaries), получающую объект и считающую общую сумму запрплаты работников.
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  Функция возвращает общую сумму зарплаты.
*/

// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80})); // 330

//======================================= задача 6 ===========================================
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
//
// console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']
// console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']
// console.log(getAllPropValues(users, 'active')); // []

//======================================= задача 7 ===========================================
/*
  Напишите код, который бы  с помощью
  функции-конструкора User, позволял создавать
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей,
  необходимо передать как аргументы
  при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью
  функции getUserInfo вывести строку в консоль.
*/

// const User = function (name = '', isActive = null, age = 0, friends = 0) {
//     this.name = name;
//     this.isActiv = isActive;
//     this.age = age;
//     this.friends = friends;
//
//     this.getUserInfo = function () {
//         return this.getUserInfo(`User ${name} is ${age} years old and has ${friends} friends`);
//     }
// };
//
// let Dima = new User('Dima', null, 25, 70);
// let Ira = new User('Ira', null, 18, 130);
// let Den = new User('Den', null, 20, 44);
// console.log(Dima);
// console.log(Ira);
// console.log(Den);

//======================================= задача 8 ===========================================
//Расставьте отсутствующие this в методах объекта store
// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],
//     addManager(manager) {
//         this.managers.push(manager);
//         console.log(this.managers);
//     },
//     removeManager(manager) {
//         const idx = this.managers.indexOf(manager);
//         this.managers.splice(idx, 1);
//         console.log(this.managers);
//     },
//     getProducts() {
//         console.log(this.products);
//         return this.products;
//     }
// };
//
// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
// store.removeManager('mango'); // ['poly', ajax', 'chelsey']
// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

//======================================= задача 9 ===========================================
//Расставьте отсутствующие this в конструкторе объектов Account
// function Account({login, password, type = "regular"}) {
//     this.login = login;
//     this.password = password;
//     this.type = type;
//
//     this.changePassword = function (newPassword) {
//         this.password = newPassword;
//         console.log(this.password);
//     };
//
//     this.getAccountInfo = function () {
//         console.log(`Login: ${this.login}, Pass: ${this.password}, Type: ${this.type}`)
//     };
// }
//
// const account = new Account({
//     login: "Mango",
//     password: "qwe123",
//     type: "premium"
// });
// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'
// console.log(account.changePassword("asdzxc")); // 'asdzxc'
// console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'



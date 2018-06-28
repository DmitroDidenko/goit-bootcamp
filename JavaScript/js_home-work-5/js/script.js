// Функция должна возвращать объект гостя с совпадающим id.

    // PS: обязательно используйте функциональные методы массивов, никаких for!
    //                                                                        */
// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];

//   // Вызовы функции для проверки
// function getGuestById(guests, id){
//     return guests.find(elem => elem.id === id);
// }
//   console.log(
//     getGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}

//   console.log(
//     getGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}

//   console.log(
//     getGuestById(guests, 5)
//   ); // undefined


//   Add Comment
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
//   };
//   let mass = [];
// for (let key in order){
//  mass.push(order[key]);
// // console.log(order[key]);
// }
// let red = mass.reduce((acc, elem) => acc + elem, 0)
// console.log(red)
// //   console.log(...); // 150


// //   Add CommentColla
    /*
      Напишите функцию getTotalPrice(products, order), где
      products - объект со свойствами "имя продукта":"цена за единицу"
      order - объект со свойствами "имя продукта":"количество единиц".

      Функция возвращает общую сумму стоимости всех продуктов заказа.

      PS: используйте метод reduce
    */
//     const products = {
//         bread: 10,
//         milk: 15,
//         apples: 20,
//         cheese: 30,
//         chicken: 40
//     };
//
// const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
// };
//
// const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 3
// };
//
// // Вызовы функции для проверки
//
// // let obj = {
// //     ...products,
// //     ...orderA,
// // }
// // console.log(obj);
//
// function getTotalPrice(products, order){
//     // products = Object.keys(products);
//     orderArr = Object.keys(order);
//
//     return orderArr.map(elem => order[elem] * products[elem]).reduce((acc, elem) => acc + elem, 0);
//
//
//
// }
// console.log(getTotalPrice(products, orderA)); // 140
//
// console.log(getTotalPrice(products, orderB)); // 130
//
//
// // Add CommentCollapse
// //
// // bootcamp6goit is on a roll
// // Your team’s now 23 members strong, with 2495 messages sent across 15 channels. You can track your team’s progress via the main menu.
// //
// //     Show Me
// // Message Input
// //
// // Message @Георгий
// //
// // Thread
// // Irina Levchenko and Rotman Yan
//
//
// // return products.map(elem => elem + order[elem]);
// // order = Object.values(order);
// // return products.reduce((acc, elem) => acc * elem, 0);
// // let total = [];
// // for (let key in products){
// //      total.push(products[key]);
// // }
// // return total
// // return products.map((elem) => {
// //     for (let key in order){
// //         elem *= order[key];
// //
// //     }
// //     return elem
// // }).reduce((acc, elem) => acc + elem, 0);
// // return products.map(elem => products[elem] * 2)
// // return products.reduce((acc, elem) => {
// //     let total = 0;
// //     for (let key in order){
// //                 // elem *= order[key];
// //         total = order[key];
// //     }
// //     return total
// // })
//


/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/

// const guestsA = [
// //     { name: "Mango", isActive: true },
// //     { name: "Poly", isActive: false },
// //     { name: "Ajax", isActive: true }
// // ];
// //
// // const guestsB = [
// //     { name: "Mango", isActive: true },
// //     { name: "Poly", isActive: true },
// //     { name: "Ajax", isActive: true }
// // ];
// //
// // // Вызовы функции для проверки
// //
// // function allGuestsActive(guests){
// //     return guests.every(elem => elem.isActive === true)
// // }
// // console.log(allGuestsActive(guestsA)); // false
// //
// // console.log(allGuestsActive(guestsB)); // true



/*
  Используя массив (users) объектов пользователей, напишите функции которые с помощью
  функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
*/

/*
 * Получить массив имен (поле name) всех пользователей
 */

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


/*
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
 */
// const getUsersByEyeColor = (arr, color) => {...};
//
// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
//
//
// /*
//  * Получить массив имен пользователей по полу (поле gender)
//  */
// const getUsersByGender = (arr, gender) => {...};
//
// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//
//
// /*
//  * Получить массив только неактивных пользователей (поле isActive)
//  */
// const getInactiveUsers = arr => {...};
//
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//
//
// /*
//  * Получить пользоваля (не массив) по email (поле email, он уникальный)
//  */
// const getUserByEmail = (arr, email) => {...};
//
// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
//
//
// /*
//  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
//  */
// const getUsersWithAge = (arr, min, max) => {...};
//
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
//
// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
//
//
// /*
//  * Получить общую сумму баланса (поле balance) всех пользователей
//  */
// const getTotalBalance = arr => {...};
//
// console.log(getTotalBalance(users)); // 20916
//
//
// /*
//  * Массив имен всех пользователей у которых есть друг с указанным именем
//  */
// const getUsersByFriend = (arr, name) => {...};
//
// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        phone: '+1 (848) 556-2344',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        phone: '+1 (855) 582-2464',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        phone: '+1 (814) 593-3825',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        phone: '+1 (909) 547-2687',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        phone: '+1 (956) 512-2693',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        phone: '+1 (876) 411-2433',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        phone: '+1 (979) 504-2554',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];

// console.log(users[2].eyeColor);

const getAllNames = arr => {return arr};

console.log(getAllNames(users));

const getUsersByEyeColor = (arr, color) => {
    return arr.filter(elem => elem.eyeColor === color)
};

console.log(getUsersByEyeColor(users, 'brown')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersByGender = (arr, gender) => {
    return arr.filter(elem => elem.gender === gender).map(elem => elem.name)
};

console.log(getUsersByGender(users, 'male'));




const getInactiveUsers = arr => {
    return arr.filter(elem => elem.isActive === false)
};

console.log(getInactiveUsers(users));



const getUserByEmail = (arr, email) => {
    return arr.find(elem => elem.email === email)
};

console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


console.log(`-----------`);
const getUsersWithAge = (arr, min, max) => {
    return arr.filter(elem => elem.age < min || elem.age > max)
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// * Получить общую сумму баланса (поле balance) всех пользователей
// */
const getTotalBalance = arr => {
    // return arr.reduce((acc, elem) => acc + elem.balance)
    return arr.map(elem => elem.balance).reduce((acc, elem) => acc + elem);
};

console.log(getTotalBalance(users)); // 20916


const getUsersByFriend = (arr, name) => {
    return arr.filter(elem => elem.friends.includes(name)? true: null)
    // return arr.find(elem => elem.email === email)
};

console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// /*
//   ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
// */
//
// /**
//  * Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
//  * повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
//  */
// let mass = [];



const getAllSkills = arr => {
  return arr = arr.map(elem => elem.skills).reduce((acc, elem) =>acc.concat(elem)).sort().filter((elem, index, arr) => arr[index] !== arr[index+1]? arr[index]:null)

};

console.log(getAllSkills(users));




// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
//
//
// /**
//  * Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
//  */
const getUserNamesSortedByFriendsCount = arr => {
    return arr.sort((elem, elem2) => elem.friends.length - elem2.friends.length).map(elem => elem.name)
    // return arr.map(elem => elem.friends.length)
};

console.log(getUserNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

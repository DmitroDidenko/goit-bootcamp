'use strict';
// ===============================================  Задача 1  ==========================================================
/*
  Есть массив имен пользователей. В первом console.log вывести длину массива.
  В последующих console.log дополнить конструкцию так, чтобы в консоль вывелись указаные в комментариях элементы массива.
*/
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// console.log(users.length); // 4
// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax
// ===============================================  Задача 2  ==========================================================
/* Есть массив имен пользователей */
// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// /* Используя методы массива, последовательно выполнить следующие операции */
// // Удалить из начала массива нулевой элемент
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
//
// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]
//
// // Добавить в начало массива любое имя
// users.unshift('Dima');
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
//
// // Добавить в конец массива два любых имени за одну операцию
// users.push('Den', 'Max');
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
// ===============================================  Задача 3  ==========================================================
/*
  Попросить пользователя ввести произвольную строкуи записать ее в переменную string
  PS: для перебора массива используте цикл for или for...of
*/
// let string = 'Welcome to Bahamas!';
// let arr = string.split(' ');
// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);
//
// // Вывести в консоли общую длину массива arr
// console.log(arr.length);
//
// // Используя цикл, вывести в консоль все индексы массива arr
// for(let el of arr){
//     console.log(arr.indexOf(el));
// }
//
// // Используя цикл, вывести в консоль все элементы массива arr
// for (let el of arr) {
//     console.log(el);
// }
// // Используя цикл, вывести в консоли все пары индекс:значение массива arr
// for (let el of arr){
// console.log(arr.indexOf(el),el);
// }

// ===============================================  Задача 4  ==========================================================
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100.
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel.
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод вроде строк 'qweqwe' в этой задаче
  необязательно.
  PS: используйте цикл do...while
*/
let number = 0;
do {
    number = Number(prompt('введіть число більше 100', ''));
    if (number < 100) {
        number = prompt('введите снова')
    }
} while (number < 100);

// ===============================================  Задача 5  ==========================================================
// ===============================================  Задача 6  ==========================================================
// ===============================================  Задача 7  ==========================================================
// ===============================================  Задача 8  ==========================================================
// ===============================================  Задача 9  ==========================================================

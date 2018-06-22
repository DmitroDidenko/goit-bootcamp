// var x = 5;
// console.log(x);
//
// /*
//   - Объявите две переменные: guest и name
//   - В переменную name запишите строку 'Mango'
//   - Скопируйте значение из name в guest
//   - Выведите в консоли значение переменной guest (должно вывести 'Mango')
// */
//
// let guest = 'Mango';;
// let name = 'Mango';
// console.log(guest);

// /*
//   Напишите скрипт который:
//   - при загрузке страницы спрашивает имя пользователя (используйте prompt)
//   - после того как было введено имя показывает alert с тем что ввели в prompt
// */
//
// let a = prompt('your name');
// alert(a);

//
// /*
//  Есть три переменные содержащие день, месяц, и год.
//  Необходимо получить строку день\месяц\год
//  в формате xx\xx\xxxx
// */
// ​
// const day = 18;
// const month = 06;
// const year = 2018;
// ​
// const date =
// ​
// console.log(date); // 18\06\2018

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
// let age = prompt(' Enter your age')
// console.log(`My name is ${name} i am ${age} years old`);
// console.log(`My name is ${name} i am ${age} years old`);

//
// let day = 18;
// let month = 6;
// let year = 2018;
// console.log(`date = ${day}\\0${month}\\${year}`);

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

// /*
//   Есть две переменные name и date, roomType, содержащие
//   имя гостя, дату его прибытия на отдых и тип комнаты отеля.
//
//   Используя шаблонные строки необходимо записать
//   в перменную message сообщение формата:
//   "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
//
//   Найти ошибки в коде и исправить их, при верном решении
//   в консоль будет выведена строка идентичная той что
//   напротив console.log
// */
//
// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';
//
// const message = `${name} прибывает на отдых ${date} в ${roomType}`;
// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

/*
  Есть 3 переменные в которых хранится  размер составляющих
  блочной модели в формате Npx, где N это целое число.

  Используя эти переменные, запишите в переменную totalWidth
  общую ширину блока в формате Npx.

  К примеру "сумма" '20px' и '30px' будет равна '50px'.

  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";
//
// let totalWidth = ;
// console.log(totalWidth); // '125px'

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

//
// let month = prompt('введите месяц').toLowerCase();
//
// if(month === 'june'|| month ==='july'|| month==='august'){
//     alert('summer');
// }
//
// else if(month === 'september'|| month ==='october'|| month==='november'){
//     alert('autumn');
// }
//
// else if(month === 'december'|| month ==='junuary'|| month==='february'){
//     alert('winter');
// }
//
// else if(month === 'march'|| month ==='april'|| month==='may'){
//     alert('spring');
// }

// let luckyNumber = 1;
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
//     alert('spring');
//         break;
//     default:
//         alert('none information');
//         break;
// }

// ,,,,,,,,,,,, как  создать массив ,,,,,,,,,,,,,
// два способа записи массива
// let firstArray = [1, 2, 3];
// let secondarray = new Array(5, 6, 7, 8);
//
// let summer = ['june', 'jule', 'august'];
//
// ...........пустой массив...........
// let empty = [];
//
// ...........вытянуть любую цыфру...........
// let firstArr = [1,2,3,4,5,6,10,7,8,9];
// console.log(firstArr[6]);
// console.log(firstArr[2]);

// ............вытянуть любую цыфру внутри массивов....................
// let firstArr = [1,2,3,4[4,5,6,[1,2,3,4,5,6,10,7,8,9[error]]]];
// console.log(firstarr[4][3][10]);
//
// ............задача.............
// let arr = [[1,2,3],[5,',','qwerty'],[2.5,5.6,'/']];

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

// ............длинна массива(количество едементов).............
// let firstArray = [5, 8, 13, 14];
// console.log(firstArray.length);

// ..............slice and aplise.............
// let arr = [1,2,3,4,5,6,10,7,8,9];
// let newarr = arr.slice(2.3); копия елемента с массива в скобках задано начало и конец, если конец не задать вырежет все после начала, если ничего не задать вырежет все

// let arr = [1,2,3,4,5,6,10,7,8,9];
// let x = arr.splice(1, 3); вырезка елемента с массива, первая цифра в скобках указывает на елемент  с которого начать,вторая на количество едементов для вырезки
// let у = arr.splice(1, 0, 25); если запись с трех цифр , то третья записывает элемент( вторая 0 -не вырезает ничего , если цифра то вырезает количество едементов)

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

/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.

  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях
  элементы массива.
*/

// const sersu = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
//
// console.log(sersu.length); // 4
//
// console.log(sersu [1]); // Poly
// console.log(sersu [3]); // Chelsey
// console.log(sersu [0]); // Mango
// console.log(sersu [2]); // Ajax


// /* Есть массив имен пользователей */
// /* Используя методы массива, последовательно выполнить следующие операции */
// let users = ["Mango", "Poly", "Ajax", "Chelsey"];
// // Удалить из начала массива нулевой элемент
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]
// // Добавить в начало массива любое имя
// users.unshift('Dima');
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
// // Добавить в конец массива два любых имени за одну операцию
// users.push('Pasha', 'Anton');
// console.log(users); // ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
// // let animals = ["cat","dog","rabbit","bird","fish"];
// // вивести в консоль випадкову тваринку з масиву

// // вивести в консоль випадкову тваринку з масиву
// let animals = ["cat","dog","rabbit","bird","fish"];
// let random = Math.floor(Math.random()*animals.length);
// console.log(animals[random]);
// let comp = (animals[random]);
// let user = prompt('enter');
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


// split
// reverse
// join
// 1)Перевірити чи являється слово паліндромом (слово що читається справа на ліво і зліва на право однаково)
//
// 2)Зробити перевірку і вивести в консоль true or false
// let str = 'oko';
// let str2 = 'test';
//
// console.log(str.split('').reverse().join(''));
// console.log(str2.split('').reverse().join(''));

// ++++++++++++++++++++++++++++++++++++++++++ЦИКЛЫ+++++++++++++++++++++++++++++++++++++++++++++++
// while- сначала проверяет потом выполняет действие
// do while- сначала выполняет потом провеяет


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

// let work = 1;
// do {
//     console.log('Done');
//     work++;
// } while (work > 5);

// ........................цикл for........................

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

// let number = 0;
// do {
//     number = prompt('enter number > 100')
// } while (number <= 100 && number !== null);

// let students = ['Stupak', 'Yurchenko', 'Tabanyk', 'Baranov', 'Didenko', 'Chuprun', 'Babenko', 'Mukanovskyi', 'Plaski',
//     'Sokolov', 'Galatuk', 'Savin', 'Grygorchuk','Krasnoiarov',
//     'Rotman', 'Scryagin', 'Humenchuk'];
// let random = Math.floor(Math.random()*students.length);
// console.log(students[random]);

// Напишите скрипт, который выводит через console.log все
// числа от min до max, с двумя исключениями:
//
// - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
//
// - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
//
// PS: используйте цикл for
// const min = 1;
// const max = 100;
// for (let i = min; i <= max; i++) {
//     if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('bizz');
//     } else {
//         console.log(i);
//     }
// }

// Напишите скрипт, который выбирает из массива numbers
// все числа, которые больше чем значение переменной num,
// записывая эти числа в массив newArray.
//
// В результате в массиве newArray будут все подходяшие числа.
//
// PS: используйте цикл for или for...of и оператор ветвления if

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > num) {
//         newArray.push(numbers[i]);
//     }
// }
// console.log(newArray);
// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] > num ? newArray.push(numbers[i]) : null;
// }
// console.log(newArray);
// console.log(numbers);

// for (let el of numbers) {
//     el > num ? newArray.push(el) : null;
// }
// console.log(newArray);
// console.log(numbers);

// Напишите скрипт, который проверяет произвольную строку
// в переменной string и находит в ней самое длинное слово,
// записывая его в переменную longestWord.

// const string = "May the force be with you";
// let longestWord = '';
// let arr = string.split(' ');
// for (let word of arr) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }
// console.log(longestWord); // 'force'

/*
  Напишите скрипт который:
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.

  - Заканчивает запрашивать числа, как только посетитель введёт не число
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - После того как ввод был завершен, если массив не пустой,
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let arrnum = [];
// let num = 0;
// let sum = 0;
// do {
//     num = prompt("число?");
//     if (!isNaN(num) && num !== null && num !== '') {
//         arrnum.push(+num);
//     }
// } while (!isNaN(num) && num !== null);
//
// for (let el of arrnum) {
//     if (arrnum !== null) {
//         sum += el;
//     }
// }
// console.log(arrnum);
// console.log(sum);








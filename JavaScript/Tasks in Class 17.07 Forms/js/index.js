'use strict';
// Флаги
// i - ігнорує регістр*
// g - глобальний погук а не перший збіг*
// m - багатостроковий пошук*
// Класи
// \d - numbers 0-9*
// \D - not numbers*
// \s - space*
// \S - not space*
// \w - word*
// \W - not word*
// \b - word or symbol with spase around*
// \B - not word*
// [] - набір *
// - діапазон *
// ^ - в [] це виключення за межами набору це початок строки*
// {} - показник кількості*
// () - група символів*
// + - один або більше
//     ? - нуль або один
// * - нуль або більше
//     . - будь - який символ*
// $ - кінець строки*
// (?:) - виключення результату
// x(?=y) - відповідність
// x(?!y) - відплвідність якщо не йде у після х
// x|y - або
// ?<=

// let pattern = /in/;
// const string = 'text windows win';
// console.log(string.match(pattern));
// console.log(pattern.test(string));

// let string = 'Is that all there is?';
//     reg = /is/, //Шукаєм посеред строки
//     reg2 = /is/i, // Пошук не звертаючи увагу на регістр. Але зупиняємось на першому.
//     reg3=/is/ig; //шукаю всі співпадіння по нижньому регістру.
// console.log(string.match(reg));
// console.log(string.match(reg2));
// console.log(string.match(reg3));

// let string = '12345, q5ww. www h - whwhwh',
//     reg = /\d/g, // d шукає цифри , а g всі цифри, велика D шукає не цифри
//     reg2 = /\s/g, // s шукає пробіли, велика S шукає нне пробіли
//     reg3 = /\w/g,// в фоматі строки шукає просто букви , цифри теж сриймає як букви
//     reg4 = /\b/g;// b початок слова, B не почато слова(в середині)
// console.log(string.match(reg));
// console.log(string.match(reg2));
// console.log(string.match(reg3));
// console.log(string.match(reg4));

// let string = '92345 123 243 467 5234 987 5',
//     regV = /\b\w{3}\b/ig; // виведе фіксовано 3 літери
//     regV = /\b\w{1,3}\b/ig; // виведе від 1 до 3 літер
//     regV = /\b\w{2,}\b/ig; // виведе від 1 до 3 літер
// console.log(string.match(regV));

// let string = '1 random text 5',
// regV = /\d$/g // шукає вкінці стоки з допомогою $
// regV = /^\d/g // шукає спочатку стоки з допомогою ^

// let str = 'The car parked in the ga@age!.';
// let regV = /..age\./g; // шукає знаки в тому місці де прописан. кількість крапок видає кількість символів, щоб вивести саму крапку треба екранувати
// console.log(str.match(regV));

// let regV = /\d+/ig; // шукає всі слова більше 1
// let  str = '2597-7896-8974-3698';
// console.log(str.match(regV));

// let str = 'The car is parked in the garage.';
// let regV = /\b(c|g|p)ar\b/g; // шукає чітко слово з 3 букв , що починається з букви в дужках і закінчується на ar
// console.log(str.match(regV));

// ========================================================================================================================

// .com  .ua  .net
// проверка на все английские ,буквы
// мин 1 цифра в коде
// мин 4 максмум 16 символов
// ========================================================================================================================
// 1 API Lost FM
// 2 API youtube v3
// 3 зверстати інформацію про альбом , або виконавця




let registr = function () {
    let login = /(\.com$|\.ua$|\.net$)/;
};







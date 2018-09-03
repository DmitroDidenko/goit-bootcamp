'use strict';
// ===================================================<  Promise  >===================================================
// let myPromise = new Promise(function (ok, fatal) {
//     let isDone = false;
//     if(isDone){
//         ok('this is done'); // да
//     } else {
//         fatal('error') // нет
//     }
// });
//
// myPromise.then(function (data) {
//     console.log(data);
// }).catch(function (error) {    // then виконується коли функція виконується успішно - catch коли виконується помилка
//     console.log(error);
// });

// =============================================  задача з   Promise  =================================================
// const promise = new Promise((resolve, reject)=> {
//     if (status > 200 && status < 300) {
//         resolve(response);
//         console.log('resolve',resolve);
//     }
//
//     if (status > 400 && status < 500) {
//         reject("no data back from server, there was an error");
//         console.log('resolve',resolve);
//     }
// });

// ===================================== як отримати результат і перетворити його ======================================
const promiseNames = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Homer', 'Bender', 'Filip']);
    }, 1000);

    setTimeout(() => {
        reject("no data back from server, there was an error")
    }, 3000);
});

promiseNames
.then(answer => {
    let result = answer.map(el => el.toUpperCase());
    return result
})
.then(result => {
    for (let el of result) {
        console.log(el);
    }
})
.catch(error => console.log(error));

// ===================================== Promise all ======================================
// const promiseNames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Homer', 'Bender', 'Filip']);
//     }, 1000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 3000);
// });
// const promiseSurnames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Simpson', 'Rodriges', 'Fry']);
//     }, 3000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 5000);
// });
//
// Promise.all([promiseNames, promiseSurnames])
//     .then(data => data)
//     .then(resArr => {
//         let [name, lastNames] = resArr;
//     })
//     .catch(error => console.log(error));


// ===================================== Promise all 2 ======================================
// const promiseNames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Homer', 'Bender', 'Filip']);
//     }, 1000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 3000);
// });
//
// promiseNames
//     .then(answer => {
//         let result = answer.map(el => el.toUpperCase());
//         return result
//     })
//     .then(result => {
//         for (let el of result) {
//             console.log(el);
//         }
//     })
//     .catch(error => console.log(error));
//
// const promiseSurnames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Simpson', 'Rodriges', 'Fry']);
//     }, 3000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 5000);
// });
// // //
// Promise.all([promiseNames, promiseSurnames])
//     .then(data => data)
//     .then(resArr => {
//         // [['Homer', 'Bender', 'Filip'],['Simpson', 'Rodriges', 'Fry']]
//         let [names, lastNames] = resArr;
//         // names = ['Homer', 'Bender', 'Filip']
//         // lastNames = ['Simpson', 'Rodriges', 'Fry']
//
//         // let result = [...names, ...lastnames];
//         // let result = names.concat(lastnames);
//         // console.log(result);
//         // index = 2
//         names.map((el, index) => console.log(`${el} ${lastNames[index]}`))
//     })
//     .catch(error => console.log(error));


// ===================================== Promise all 2 ======================================
// const makePromise = (text, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(text), delay));
// //
// const promiseA = makePromise("promiseA", 4000);
// const promiseB = makePromise("promiseB", 2000);
// console.log(promiseA);
// console.log(promiseB);
//
// // выполнится спустя 1 секунду, когда выполнится
// // самый быстрый promiseA с задержкой в 1c.
// // Второй промис promiseB будет проигнорирован
// Promise.race( [promiseA, promiseB] )
//     .then(result => {
//         console.log(result); // promiseA
//     })
//     .catch(err => console.log(err));

















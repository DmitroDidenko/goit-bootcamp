'use strict';
// const source = document.querySelector('#address-template').innerHTML.trim();
// // console.log(source);
// const temp = Handlebars.compile(source);
// // console.log(temp);
// const context = {
//     "city": "London",
//     "street": "Baker Street",
//     "number": "221B"
// };


// const markup = temp(context);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

// ========================================================================================================================
// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };
//
// const source = document.querySelector('#example-template').innerHTML.trim();
// const template = Handlebars.compile(source);
// const person = template(data);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = person;
// console.log(person);

// ========================================================================================================================
// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };
// const source = document.querySelector('#menu').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template(menuData);
// const container = document.querySelector('#menu-container');
// container.innerHTML = markup;
// console.log(markup);

// ========================================================================================================================
// const data = {
//     animals:[
//         {
//             name: "cow",
//             noise: "moooo"
//         },
//         {
//             name: "cat",
//             noise: "meow"
//         },
//         {
//             name: "fish",
//             noise: ""
//         },
//         {
//             name: "farmer",
//             noise: "Get off my property!"
//         }
//     ]
// };
// const source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
// const template = Handlebars.compile(source);
// const result = template(data);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = result;

// ========================================================================================================================
// const gallery = {
//     title: 'Gallery',
//     items: [
//         {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//         {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//         {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//         {img: 'https://placeimg.com/300/150/people', text: 'people'},
//         {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//         {img: 'https://placeimg.com/300/150/any', text: 'random'}
//     ]
// };
//
// const work = document.querySelector('#work').innerHTML.trim();
// const temp = Handlebars.compile(work);
// const result = temp(gallery);
// const container = document.querySelector('.gallery');
// container.innerHTML = result;

// ========================================================================================================================
let mobile = {
    phones: [
        {
            id: "1",
            categoryId: "1",
            name: "Apple iPhone 5c",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 823,
            image: "uploads/iphone5c-selection-hero-2013.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "2",
            categoryId: "1",
            name: "Apple iPhone 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 953,
            image: "uploads/51u6y9Rm8QL._SY300_.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "3",
            categoryId: "4",
            name: "Lenovo A6000",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 764,
            image: "uploads/_35%20(1).JPG",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "4",
            categoryId: "5",
            name: "Nokia Lumia 1520",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/Lumia1520-Front-Back-png.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "5",
            categoryId: "3",
            name: "HTC One",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/htc-one-m7-802w-dual-sim-silver.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "6",
            categoryId: "2",
            name: "Samsung Galaxy S6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        }
    ]
};
const mobileShop = document.querySelector('#mobile-shop').innerHTML.trim();
const templateMobile = Handlebars.compile(mobileShop);
const containerMobile = document.querySelector('.container');
containerMobile.innerHTML = templateMobile(mobile);

const button = document.querySelectorAll('.module-card-button');
const ul = document.querySelectorAll('.hide');
const container = document.querySelector('.container');
container.addEventListener('click', click);

function click(event) {
    button.some((el, idx) => {
        if (event.target === el) {
            ul[idx].classList.toggle('show')
        }
    })
}

// /// creating show/hide button
// const button = document.querySelector('module-card-button');
// button.addEventListener('click', showMenu);
//
// function showMenu(e){
//     // console.log(e.target);
//     // if(e.target.classList.contains('module-card-button')){
//     e.target.previousElementSibling.classList.toggle('hide')
//     // e.stopPropagation();
//     // }
// };


// const laptop = {
//     laptops: [
//         {
//             size: 13,
//             color: 'white',
//             price: 28000,
//             releaseDate: 2015,
//             name: 'Macbook Air White 13"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//         {
//             size: 13,
//             color: 'gray',
//             price: 32000,
//             releaseDate: 2016,
//             name: 'Macbook Air Gray 13"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//         {
//             size: 13,
//             color: 'black',
//             price: 35000,
//             releaseDate: 2017,
//             name: 'Macbook Air Black 13"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//         {
//             size: 15,
//             color: 'white',
//             price: 45000,
//             releaseDate: 2015,
//             name: 'Macbook Air White 15"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//         {
//             size: 15,
//             color: 'gray',
//             price: 55000,
//             releaseDate: 2016,
//             name: 'Macbook Pro Gray 15"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//         {
//             size: 15,
//             color: 'black',
//             price: 45000,
//             releaseDate: 2017,
//             name: 'Macbook Pro Black 15"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//         {
//             size: 17,
//             color: 'white',
//             price: 65000,
//             releaseDate: 2015,
//             name: 'Macbook Air White 17"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//         {
//             size: 17,
//             color: 'gray',
//             price: 75000,
//             releaseDate: 2016,
//             name: 'Macbook Pro Gray 17"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//         {
//             size: 17,
//             color: 'black',
//             price: 80000,
//             releaseDate: 2017,
//             name: 'Macbook Pro Black 17"',
//             img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//             descr:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         },
//     ]
// };































// // ========================================== Створення HTML в JS для Сайта Deadpool =========================================
// // ================================ Оригінал розмітки знаходиться в index.html закоментований  =========================================
// const jumbotron = document.querySelector('.jumbotron');
// // create
// const titleContainer = document.createElement('div');
// const h1 =document.createElement('h1');
// const deadPoolSpan = document.createElement('span');
// const deadPoolP = document.createElement('p');
// const deadPoolSpan2 = document.createElement('span');
// const imgContainer = document.createElement('div');
// const mainimg = document.createElement('img');
// const subtitle = document.createElement('div');
// const listContainer = document.createElement('div');
// const ul = document.createElement('ul');
// const liArr = ['- BORN IN CANADA AS WADE WILSON.', '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.', '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.', '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.', '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.', '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM', '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE', '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.', '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD', '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL', '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];
// const spanArr = ['SOME YEAR ', 'SOME OTHER YEAR ', 'SOME OTHER DIFERENT YEAR ', 'YET ANOTHER YEAR ', 'YESTERDAY? ', 'NO... ', 'WHO CARES? ', 'DUNNO ', 'MEEH ', '???? ', '@$%^# '];
// for (k =0; k < 11; k++) {
//     let li = document.createElement('li');
//     let span = document.createElement('span');
//     li.classList.add('list-item');
//     span.classList.add('red-text');
//     li.textContent = liArr[k];
//     span.textContent = spanArr[k];
//     li.prepend(span);
//     ul.append(li);
// }
// const mainImgContainer = document.createElement('div');
// const mainImg2 = document.createElement('img');
// const subTitleContainer = document.createElement('div');
// const row = document.createElement('div');
// const colIs6 = document.createElement('div');
// const blockquote = document.createElement('blockquote');
// const p = document.createElement('p');
// const foot = document.createElement('footer');
// const cite = document.createElement('cite');
// const footer = document.createElement('div');
// const fmd1 = document.createElement('div');
// const pFoot = document.createElement('p');
// const fmd2 = document.createElement('div');
// const ul2 = document.createElement('ul');
// const mass = ['Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project', '<a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a>', '<a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a>', '<a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a>'];
// for(let el of mass){
//     let list = document.createElement('li');
//     list.innerHTML = el;
//     ul2.append(list);
// }
//
// // add class
// titleContainer.classList.add('row', 'title-container');
// h1.classList.add('text-center');
// deadPoolSpan.classList.add('red-text');
// deadPoolP.classList.add('text-center');
// deadPoolSpan2.classList.add('red-text');
// imgContainer.classList.add('row');
// mainimg.classList.add('img-responsive', 'inside-shadow');
// subtitle.classList.add('row', 'sub-title-container');
// const h1Two = h1.cloneNode(true);
// listContainer.classList.add('row', 'list-container');
// mainImgContainer.classList.add('row');
// mainImg2.classList.add('img-responsive', 'inside-shadow');
// subTitleContainer.classList.add('row', 'sub-title-container');
// const h1Three = h1.cloneNode(true);
// row.classList.add('row');
// colIs6.classList.add('col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3');
// blockquote.classList.add('blockquote-reverse');
// footer.classList.add('row', 'footer');
// fmd1.classList.add('col-md-6');
// pFoot.classList.add('small-text');
// fmd2.classList.add('col-md-6');
//
// // add attr
// imgContainer.setAttribute('id', 'main-image-container');
// mainimg.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
// mainimg.setAttribute('alt', 'picture');
// mainImgContainer.setAttribute('id' , 'main-image-container');
// mainImg2.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
// mainImg2.setAttribute('alt', 'picture');
// cite.setAttribute('Source', 'Title');
//
// // add text
// h1.textContent = ' TRIBUTE PAGE';
// deadPoolSpan.textContent = 'DEADPOOL';
// deadPoolP.textContent = 'WITH GREAT POWER COMES GREAT ';
// deadPoolSpan2.textContent = 'IRRESPONSIBILITY';
// h1Two.textContent = 'TIMELINE';
// h1Three.textContent = 'QUOTE';
// p.textContent = 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.';
// cite.textContent = 'Someone with a great ass';
// pFoot.textContent = 'All rights and lefts reserved.';
//
// // paste
// jumbotron.append(titleContainer);
// titleContainer.append(h1);
// h1.prepend(deadPoolSpan);
// titleContainer.append(deadPoolP);
// deadPoolP.append(deadPoolSpan2);
// jumbotron.append(imgContainer);
// imgContainer.append(mainimg);
// jumbotron.append(subtitle);
// subtitle.append(h1Two);
// jumbotron.append(listContainer);
// listContainer.append(ul);
// jumbotron.append(mainImgContainer);
// mainImgContainer.append(mainImg2);
// jumbotron.append(subTitleContainer);
// subTitleContainer.append(h1Three);
// jumbotron.append(row);
// row.append(colIs6);
// colIs6.append(blockquote);
// blockquote.append(p);
// blockquote.append(foot);
// foot.append(cite);
// jumbotron.append(footer);
// footer.append(fmd1);
// fmd1.append(pFoot);
// footer.append(fmd2);
// fmd2.append(ul2);

// ==================== Коротший варіант Створення HTML в JS для Сайта Deadpool з використанням функції =============================

const jumbotron = document.querySelector('.jumbotron');

let titleContainer = createNode('div', ['row', 'title-container'], null, null, jumbotron, 'append');
let h1 = createNode('h1', ['text-center'], null, 'TRIBUTE PAGE', titleContainer, 'append');
let deadPoolSpan = createNode('span', ['red-text'], null, 'DEADPOOL', h1, 'prepend');
let deadPoolP = createNode('p', ['text-center'], null, 'WITH GREAT POWER COMES GREAT ', titleContainer, 'append');
let deadPoolSpan2 = createNode('span', ['red-text'], null, 'IRRESPONSIBILITY', deadPoolP, 'append');
let imgContainer = createNode('div', ['row'], {id: 'main-image-container'}, null, jumbotron, 'append');
let mainimg = createNode('img', ['img-responsive', 'inside-shadow'], {src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg',alt: 'picture'}, null, imgContainer, 'append');
let subtitle = createNode('div', ['row', 'sub-title-container'], null, null, jumbotron, 'append');
let h1Two = createNode('h1', ['text-center'], null, 'TIMELINE', subtitle, 'append');
let listContainer = createNode('div', ['row', 'list-container'], null, null, jumbotron, 'append');
let ul = createNode('ul', null, null, null, listContainer, 'append');
const liArr = ['- BORN IN CANADA AS WADE WILSON.', '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.', '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.', '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.', '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.', '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM', '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE', '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.', '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD', '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL', '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];
const spanArr = ['SOME YEAR ', 'SOME OTHER YEAR ', 'SOME OTHER DIFERENT YEAR ', 'YET ANOTHER YEAR ', 'YESTERDAY? ', 'NO... ', 'WHO CARES? ', 'DUNNO ', 'MEEH ', '???? ', '@$%^# '];
for (k =0; k < 11; k++) {
    let li = createNode('li', ['list-item'], null, liArr[k], ul, 'append');
    let span = createNode('span', ['red-text'], null, spanArr[k], li, 'prepend');
}
let mainImgContainer =  createNode('div', ['row'], {id: 'main-image-container'}, null, jumbotron, 'append');
let mainImg2 =  createNode('img', ['img-responsive', 'inside-shadow'], {src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg', alt: 'picture'}, null, mainImgContainer, 'append');
let subTitleContainer =  createNode('div', ['row', 'sub-title-container'], null, null, jumbotron, 'append');
let h1Three = createNode('h1', ['text-center'], null, 'QUOTE', subTitleContainer, 'append');
let row = createNode('div', ['row'], null, null, jumbotron, 'append');
let colIs6 = createNode('div', ['col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3'], null, null, row, 'append');
let blockquote = createNode('blockquote', ['blockquote-reverse'], null, null, colIs6, 'append');
let p = createNode('p', null, null, 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.', blockquote, 'append');
let foot = createNode('footer', null, null, null, blockquote, 'append');
let cite = createNode('cite', null, {title: 'Source Title'}, 'Someone with a great ass', foot, 'append');
let footer = createNode('div', ['row', 'footer'], null, null, jumbotron, 'append');
let fmd1 = createNode('div', ['col-md-6'], null, null, footer, 'append');
let pFoot = createNode('p', ['small-text'], null, 'All rights and lefts reserved.', fmd1, 'append');
let fmd2 = createNode('div', ['col-md-6'], null, null, footer, 'append');
let ul2 = createNode('ul', null, null, null, fmd2, 'append');
let mass = ['Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project', '<a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a>', '<a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a>', '<a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a>'];
for(let el of mass){
    let list = createNode('li', null, null, null, ul2, 'append');
    list.innerHTML = el;
}

function createNode(tag, classArr, attrObj, text, container, mode) {
    let el = document.createElement(tag);
    if(classArr !== null){
        for (let className of classArr) {
            el.classList.add(className);
        }
    }
    for (let key in attrObj) {
        let hasKay = attrObj.hasOwnProperty(`${key}`);
        if (hasKay) {
            el.setAttribute(`${key}`, attrObj[`${key}`])
        }
    }
    el.textContent = text;
    container[mode](el);
    return el
}

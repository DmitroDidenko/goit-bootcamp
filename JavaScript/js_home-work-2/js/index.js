const numbers = [];
let total = 0;
let userInput = 0;

do {
    userInput = prompt('введшть будь яке число');
    if (!isNaN(userInput) && userInput !== null && userInput !== '')
        numbers.push(+userInput);
} while (!isNaN(userInput) && userInput !== null);

for (
    let el of numbers) {
    if (numbers !== null) {
        total += el;
    }
}

if (numbers.length > 0){
    alert(total);
}

console.log(numbers);
console.log(total);

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

do {
    let user = prompt('введите пароль');

    if (user === null) {
        break
    } else {
        for (el of passwords) {
            if (el === user) {
                alert('Добро пожаловать!');
                attempts = -1;
                break
            }
        }
        if (attempts > 1) {
            attempts--;
            alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
        } else if (attempts === 1) {
            attempts--;
            alert('У вас закончились попытки, аккаунт заблокирован!');
            break
        }
    }
} while (attempts > 0);





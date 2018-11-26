let login = prompt('login');
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'vodka';

if (login === null) {
    alert('Отменено пользователем!');
} else if (login !== ADMIN_LOGIN) {
    alert('Доступ запрещен!');
} else if (login === ADMIN_LOGIN) {
    let pass = prompt('your password');
    if (pass === null) {
        alert('Отменено пользователем!');
    } else if (pass !== ADMIN_PASSWORD) {
        alert('Доступ запрещен!');
    } else if (pass === ADMIN_PASSWORD) {
        alert('Добро пожаловать!');
    }
}



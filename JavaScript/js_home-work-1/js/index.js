let login = prompt('login');
let cancel = null;
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'vodka';

if (login === cancel) {
    alert('Отменено пользователем!');
} else if (login !== ADMIN_LOGIN) {
    alert('Доступ запрещен!');
} else if (login === ADMIN_LOGIN) {
    let pass = prompt('your password');
    if (pass === cancel) {
        alert('Отменено пользователем!');
    } else if (pass !== ADMIN_PASSWORD) {
        alert('Доступ запрещен!');
    } else if (pass === ADMIN_PASSWORD) {
        alert('Добро пожаловать!');
    }
}



const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const password = prompt("Введіть пароль");
// Якщо користувач натиснув кнопку "Скасувати", то змінна password буде мати значення null
if (password === null) {
  message = "Скасовано користувачем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}

alert(message);

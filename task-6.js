let input;
let total = 0; // початкова сума

while (true) {
  let input = prompt("Введіть число");

  if (input === null) { // якщо користувач натиснув Cancel
    break; // виходимо з циклу
  }

  let number = +input; // перетворюємо введений рядок на число

  if (isNaN(number)) { // якщо введено не число
    alert('Було написано не число, спробуйте ще раз');
  } else { // якщо введено число
    total += number; // додаємо до загальної суми
  }
}

alert(`Загальна сума чисел дорівнює ${total}`); // показуємо результат

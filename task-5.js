const country = prompt("Вкажіть країну доставки:").toLowerCase();
let price;

switch (country) {
  case 'китай':
    price = 100;
    break;
  case 'чилі':
    price = 250;
    break;
  case 'австралія':
    price = 170;
    break;
  case 'індія':
    price = 80;
    break;
  case 'ямайка':
    price = 120;
    break;
  default:
    alert("У вашій країні доставка недоступна");
}

if (price) {
  alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
}
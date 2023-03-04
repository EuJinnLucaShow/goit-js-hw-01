const total = 100;
let ordered = 50; 

// Перевір працездатність коду з різними значеннями змінної ordered, наприклад 20, 80 і 130
// ordered = 20;
// ordered = 80;
// ordered = 130;

if (ordered > total) {
    console.log("На складі недостатньо товарів!");
}
else {
    console.log("Замовлення оформлено, з вами зв'яжеться менеджер.");
}


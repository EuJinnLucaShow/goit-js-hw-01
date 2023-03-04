const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

const userInput = prompt("Скільки дроїдів ви хочете купити?");

if (userInput === null || userInput.trim() === '') {
    console.log("Скасовано користувачем!");
} else {    
    totalPrice = userInput * pricePerDroid;
    
    if (totalPrice > credits) {
        console.log('Недостатньо коштів на рахунку!');
    }
    else {
        console.log(`Ви купили ${userInput} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`);
    }
}
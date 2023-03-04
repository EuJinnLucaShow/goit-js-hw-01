const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

const userInput = prompt("Скільки дроїдів ви хочете купити?");

if (userInput === null) {
    console.log("Скасовано користувачем!");
} else {
    const inputEl = Number(userInput);
    if (Number.isNaN(inputEl) === false) {
        totalPrice = inputEl * pricePerDroid;    
        if (totalPrice > credits) {
            console.log('Недостатньо коштів на рахунку!');
        }
        else {
            console.log(`Ви купили ${inputEl} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`);
        }
    }
    else {
        console.log("Користувач ввів не число.");
        alert('Ви ввели не число.');        
    }
}
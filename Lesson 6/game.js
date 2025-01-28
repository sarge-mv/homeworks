const madeUpValue = Math.floor(Math.random() * (100) + 1); // загадываем случайное число в диапазоне [1..100]
let lowerBoundary = 1;
let upperBoundary = 100;
let stepNumber = 1;
let guess = 50;
console.log(`Компьютер 1: *я загадал следующее число: ${madeUpValue}*\n\n`);
while(true) {
    console.log(`Компьютер 2: шаг №${stepNumber}\nКомпьютер 2: диапазон для отгадывания: [${lowerBoundary}..${upperBoundary}]\nКомпьютер 2: загаданное число - ${guess}?\n`);
    if (guess === madeUpValue) {
        console.log('Компьютер 1: угадал!');
        break;
    } else if (guess < madeUpValue) {
        // если предложенное число оказалось меньше загаданного - "подтягиваем" нижнюю границу диапазона к предложенному числу, исключив его из диапазона
        console.log('Компьютер 1: больше!\n\n');
        lowerBoundary = guess++;
        guess = Math.floor((lowerBoundary + upperBoundary) / 2);
    } else {
        // если предложенное число оказалось больше загаданного - "подтягиваем" верхнюю границу диапазона к предложенному числу, исключив его из диапазона
        console.log('Компьютер 1: меньше!\n\n');
        upperBoundary = guess--;
        guess = Math.floor((lowerBoundary + upperBoundary) / 2);
    }
    stepNumber++;
}
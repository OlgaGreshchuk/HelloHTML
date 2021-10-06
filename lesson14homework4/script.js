let numbers = [];
let  min = 15;
let max = 35;
let length = prompt("Введіть довжину масиву: ");
for (let i=0; i<length; i++){
    numbers[i] = Math.round(min + Math.random() * (max - min) - 1);
}
let evenNumbers = [];
for (let i=0; i<length; i++){
    if (numbers[i] % 2 == 0) evenNumbers.push(numbers[i]);
}
console.log(numbers);
console.log(evenNumbers);
    

var numbers = [];
for (let i=0; i<10; i++){
    numbers[i] = prompt("Enter number:");
}

numbers.forEach((value, index) => {
    console.log('numbers[' + index + "] = " + value)
});
    
 
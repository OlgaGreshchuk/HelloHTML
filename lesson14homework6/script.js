let numbers = [];
while (true){
    let number = +prompt("Enter next number to arrey: ");
    if (!number) break;
    numbers.push(number);
}
console.log(numbers);

function findValue(numbers){
    let valueToFind = +prompt("Enter value: ");
    document.write("Searching for " + valueToFind + " ...  ");
    for (let i=0; i<numbers.length; i++){
        if (numbers[i] == valueToFind) return true;
    }
    return false;
}

let result = findValue(numbers);
document.write(result);
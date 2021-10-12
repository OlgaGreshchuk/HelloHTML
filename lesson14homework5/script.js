let start = +prompt("Enter start: ");
let end = +prompt("Enter end: ");

function getOddNumbers(start,end){
    let oddNumbers = [];
    for (let i=start; i<=end; i++){
        if (i % 2 != 0) oddNumbers.push(i)
    } 
    return oddNumbers;
}

 let oddNum = getOddNumbers(start,end);
console.log(oddNum);
    let sum = 0;
    oddNum.forEach(value => {
        sum += value
    }); 
document.write("The sum of odd numbers from " + start + " to " + end + " is " + sum);
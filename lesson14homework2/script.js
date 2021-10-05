var n = +prompt("Enter number:");
var sum = 1;
var arr = [];
arr[0] = 1;
for (let i=1; i<n; i++){  
    arr[i] = Math.pow(10, i) + arr[i-1];
    sum += arr[i];
} 
document.write("The sum is " + sum);  
var arr=[1,2,3,4,5,6,7,8,9];
alert("Початковий масив:");
for (let i=0; i<arr.length; i++){
    alert(arr[i])
}
alert("Перевернутий масив:");
for (let i=0; i<arr.length/2; i++){
    let temp=arr[i];
    arr[i]=arr[arr.length-i-1];
    arr[arr.length-i-1]=temp;
}
for (let i=0; i<arr.length; i++){
    alert(arr[i])
}
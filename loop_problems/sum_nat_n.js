// Write a program to display n terms of natural number and their sum.
// Test Data : 7
// Expected Output :
// The first 7 natural number is :
// 1 2 3 4 5 6 7
// The Sum of Natural Number upto 7 terms : 28

var sum=0
var n=prompt("Enter the number:")

console.log("The First ",n,"natural number is:")
for(var i=1;i<=n;i++){
    console.log(i)
    sum=sum+i
}
console.log("The sum of Natural number upto ",i-1,":",sum)
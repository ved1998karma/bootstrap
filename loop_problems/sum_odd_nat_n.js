// 8. Write a program to display the n terms of odd natural number and their sum .
// Test Data

// Input number of terms : 10
// Expected Output :
// The odd numbers are :1 3 5 7 9 11 13 15 17 19
// The Sum of odd Natural Number upto 10 terms : 100

var n=parseInt(prompt("Input number of terms"))

sum=0

for(var i=0;i<=n;i++){
     if(i%2!=0){
        console.log("The odd number are :",i)
        sum+=i
     }
}
console.log("The Sum of odd Natural Number upto 10 terms :",sum)
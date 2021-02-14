// 16. Write a program to display the n terms of even natural number and their sum.
// Test Data :
// Input number of terms : 5
// Expected Output :
// The even numbers are :2 4 6 8 10
// The Sum of even Natural Number upto 5 terms : 30


var n=parseInt(prompt("Input number of terms"))

sum=0

for(var i=0;i<=n;i++){
     if(i%2==0){
        console.log("The odd number are :",i)
        sum+=i
     }
}
console.log("The Sum of even Natural Number upto 10 terms :",sum)
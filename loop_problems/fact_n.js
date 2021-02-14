// 15. Write a program to calculate the factorial of a given number.
// Test Data :

// Input the number : 5
// Expected Output :
// The Factorial of 5 is: 120

var n=parseInt(prompt("Input number(To calculate factorial):"))
fact=1

for(var i=1;i<=n;i++)
{
    fact*=i
}
console.log("The factorial of the number is:",fact)
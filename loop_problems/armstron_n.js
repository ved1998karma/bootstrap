// 29. Write a program to check whether a 
// given number is an armstrong number or not.
// Test Data :
// Input a number: 153
// Expected Output :
// 153 is an Armstrong number.

var n=parseInt(prompt("Enter a number:"))
var sum=0
var temp=n
var rem=0

// function pow(base,power){
//     power=n.toSri
//     for(var j=1;j<=power;j++){
//         mul=mul*base
//     }
//     return mul
// }

for(var i=1;temp>0;i++){
    rem=temp % 10
    sum=sum+(rem*rem*rem)
    temp=(temp-(temp%10))/10
}

if(sum==n){
    console.log("Yes",n,"is a Armstrong")
}
else{
    console.log("No",n,"is not a Armstrong")
}
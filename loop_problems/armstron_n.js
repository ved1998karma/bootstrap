// 29. Write a program to check whether a 
// given number is an armstrong number or not.
// Test Data :
// Input a number: 153
// Expected Output :
// 153 is an Armstrong number.

var inpt = parseInt(prompt("Enter a number:"))
var rem = 0
var original = inpt
var count = original.toString().length
// console.log(count)
var sum = 0


//Multiply again & again
function multi(x, y) {//3,3  5,3
    var i=1
    var mul = 1
    while (i <= y) {
        mul *= x
        i++
    }
    return mul
}


//Checking Armstrongs Properties

for (var j = 1; j <= count; j++) {

rem = inpt % 10                   //  3,5
sum = sum + multi(rem, count)    //  27,125+27
inpt = (inpt - (inpt % 10)) / 10   //  15,1,

}



//Comparing Armstrong Conditionssss And Printing result
if (sum == original) {
    console.log("Yes", original, "is an Armstrong")
}
else {
    console.log("No", original, "is not a Armstrong")
}
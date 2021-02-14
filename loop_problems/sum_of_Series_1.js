// 21. Write a program to display the sum of the series [ 9 + 99 + 999 + 9999 ...].
// Test Data :
// Input the number or terms :5
// Expected Output :
// 9 99 999 9999 99999
// The sum of the saries = 111105

var numOfTerms=5
var inc=1
var str=""
var sum=0
var sumOfSeries=0

//loop for printing
for(var i=1;i<=numOfTerms;i++){
    inc=inc*10
    sum=inc-1
    var sumOfSeries=sumOfSeries+sum
    str=str+sum+" "
}
console.log(str)
console.log(sumOfSeries)



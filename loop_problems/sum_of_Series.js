// 18. Write a program to find the sum of the series [ 1-X^2/2!+X^4/4!- .........].

// Test Data :
// Input the Value of x :2
// Input the number of terms : 5

// Expected Output :
// the sum = -0.415873
// Number of terms = 5
// value of x = 2.000000

var n=5
var fact=1
var mul=1
function factorial(n){
    for(var i=1;i<=n;i++){
        fact=fact*i
    }
    return fact
}

function pow(base,power){
    for(var j=1;j<=power;j++){
        mul=mul*base
    }
    return mul
}


console.log(factorial(5))
console.log(pow(4,2))

// var noOfTerms=3
// var x=3

// var series=""


// for(var k=0;k<=noOfTerms;k++){
//     console.log(pow(x,k)/k)
// }

var numOfTerms = 5
var x = 2

var count = 1
var i = 0
var res = 0

while(count<=numOfTerms){
    if(i%2 == 0){
            var calc = pow(x, i)/factorial(i)
                if(count%2==0){
                    res -= calc
                }else{
                    res += calc
                }
                count ++
    }
    i++
}

console.log(res)
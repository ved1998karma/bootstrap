// 19. Write a program to display the n terms of harmonic series and their sum.
// 1 + 1/2 + 1/3 + 1/4 + 1/5 ... 1/n terms

// Test Data :
// Input the number of terms : 5
// Expected Output :
// 1/1 + 1/2 + 1/3 + 1/4 + 1/5 +
// Sum of Series upto 5 terms : 2.283334
var sum=0
var numOfTerms=5
var har_series=""

//Loop for printing

for(var i=1;i<=numOfTerms;i++){
    har_series+="1/"+i+" + "
    // sum+=har_series
}

//Loop for Adiing Series
for(var j=1;j<=numOfTerms;j++){
    sum+=1/j
}

console.log(har_series)
console.log(sum)

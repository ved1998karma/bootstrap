for (var original = 1; original <= 200; original++) {

  var rem = 0
  var inpt = original
  var count = original.toString().length
  // console.log(count)
  var sum = 0
  var str=""

  //Multiply again & again
  function multi(x, y) {        //3,3  5,3
    var i = 1
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
var i=0

  //Comparing Armstrong Conditionssss And Printing result
  if (sum == original) {
    console.log("Yes", original, "is an Armstrong")
    for( var i=0;i<=original.)
    var arr=[ ]
    arr[i]=original
    console.log(arr[i])
  }
  else {
    console.log("No", original, "is not a Armstrong")
  }
  
}

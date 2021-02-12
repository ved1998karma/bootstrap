// Write a  program to find all roots of a quadratic equation.

var a=1,b=0,c=8

var d=(b*b)-(4*a*c)
var i=Math.sqrt(-1)
if(d>0){
    var root1= (-b+Math.sqrt(d))/2*a
    var root2= (-b-Math.sqrt(d))/2*a
    console.log("Root1:",root1)
    console.log("Root2:",root2)
}
else if(d==0){
    var root1= -b/(2*a)
    var root1=root2
    console.log("Root1: ",root1)
    console.log("Root2: ",root2)
}
else if(d<0){
    var root1=(-b/2*a)+ i*Math.sqrt(-d)
    var root2=(-b/2*a)- i*Math.sqrt(-d)
    console.log("Root1: ",root1)
    console.log("Root2: ",root2)
}
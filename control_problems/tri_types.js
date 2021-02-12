var x=10
var y=12
var z=14

if(x==y&&y==z){
    console.log("Equilateral Triangle")
}
else if((x==y)||(y==z)||(z==x)){
    console.log("Isoceles Triangle")
}
else {
    console.log("Scalene Triangle")
}
// Write a  program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and 
// Computer. Calculate percentage and grade according to following:
// 			Percentage >= 90% : Grade A
// 			Percentage >= 80% : Grade B
// 			Percentage >= 70% : Grade C
// 			Percentage >= 60% : Grade D
// 			Percentage >= 40% : Grade E
// 			Percentage < 40% : Grade F

var Physics=65, Chemistry=69, Biology=55, Mathematics=75, Computer=90

var per=(Physics+Chemistry+Biology+Mathematics+Computer)/5

console.log(per)

if(per>=90){
    console.log('A')
}
else if(per>=80){
    console.log('B')
}
else if(per>=60){
    console.log('C')
}
else if(per>=40){
    console.log('D')
}
else if(per>=33){
    console.log('E')
}
else{
    console.log('F')
}
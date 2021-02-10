//     Write a  program to input electricity unit charges and calculate total electricity bill 
// 		    according to the given condition:
// 			For first 50 units Rs. 0.50/unit = meter1 50
// 			For next 100 units Rs. 0.75/unit = meter2 150
// 			For next 100 units Rs. 1.20/unit = meter3 250
// 			For unit above 250 Rs. 1.50/unit = meter4 
// 			An additional surcharge of 20% is added to the bill

var unit = 200
var bill=0
var rate=0
if(unit<=50){
    console.log("unit is less than 50")
    rate=0.5
    bill=(rate*unit)
}
else if(unit>50&&unit<=150){
    console.log("Unit Range 50-150")
    rate=0.75
    bill=(rate*unit)
}
else if(unit>150&&unit<=250){
    console.log("Unit Range 150-250")
    rate=1.20
    bill=(rate*unit)
}
else if(unit>250){
    console.log("Unit Greater than 250")
    rate=1.50
    bill=(rate*unit)
}
else {
    console.log("Invalid input")
}
var surcharge=(20/100)*bill

console.log("Rate= ",rate)
console.log("Bill= ",bill)
console.log("Total Bill= ",bill+surcharge)
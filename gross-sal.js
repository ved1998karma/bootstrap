// Write a  program to input basic salary of an employee and calculate its Gross salary according to following:
// 			Basic Salary <= 10000 : HRA = 20%, DA = 80%
// 			Basic Salary <= 20000 : HRA = 25%, DA = 90%
// 			Basic Salary > 20000 : HRA = 30%, DA = 95%

var basic=2200
console.log("Basic Salry: ",basic)
if(basic<=10000){
    hra_percent=20,da_percent=90;

    console.log("hra :",hra_percent,"%")
    console.log("da:",da_percent,"%")

    var hra=(hra_percent/100)*basic
    var da=(da_percent/100)*basic


    var gross=basic+hra+da
    console.log("Gross Value :",gross)
}
else if(basic<=20000){
    hra_percent=25,da_percent=80;

    console.log("hra :",hra_percent,"%")
    console.log("da:",da_percent,"%")

    var hra=(hra_percent/100)*basic
    var da=(da_percent/100)*basic


    var gross=basic+hra+da
    console.log("Gross Value :",gross)
}
else if(basic>20000){
    hra_percent=30,da_percent=95;

    console.log("hra :",hra_percent,"%")
    console.log("da:",da_percent,"%")

    var hra=(hra_percent/100)*basic
    var da=(da_percent/100)*basic


    var gross=basic+hra+da
    console.log("Gross Value :",gross)
}
else{
    console.log("Invalid Input")
}
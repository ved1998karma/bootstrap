// Tax Slab	Old Tax Regime	New Tax Regime
// Up to Rs. 2,50,000	Nil	Nil
// From Rs. 2,50,000 - 5,00,000	5%	5%
// From Rs. 5,00,000 - 7,50,000	20%	10%
// From Rs. 7,50,000 - 10,00,000	20%	15%
// From Rs. 10,00,000 - 12,50,000	30%	20%
// From Rs. 12,50,000 - 15,00,000	30%	25%
// Above Rs. 15,00,000	30%	30%

var income = 1500001
// var old_tax = 0, new_tax = 0
var old_tax_rates = 0/100, new_tax_rates = 0/100

if (income <= 250000) {
    console.log("Amount is less than 250000")
    var old_tax_rates = 0/100, new_tax_rates = 0/100
}
else if (income > 250000 && income <= 500000) {
    console.log("Amount Range 250000-500000")
    var old_tax_rates = 5/100, new_tax_rates = 5/100
}
else if (income > 500000 && income <= 750000) {
    console.log("Amount Range 500000-750000")
    var old_tax_rates = 20/100, new_tax_rates = 10/100
}
else if (income > 750000 && income <= 1000000) {
    console.log("Amount Range 750000-1000000")
    var old_tax_rates = 20/100, new_tax_rates = 15/100
}
else if (income > 1000000 && income <= 1250000) {
    console.log("Amount Range 1000000-1250000")
    var old_tax_rates = 30/100, new_tax_rates = 20/100

}
else if (income > 1250000 && income <= 1500000) {
    console.log("Amount Range 1000000-1250000")
    var old_tax_rates = 30/100, new_tax_rates = 25/100
}
else if (income > 1500000) {
    console.log("Amount Range 1000000-1250000")
    var old_tax_rates = 30/100, new_tax_rates = 30/100
}
else {
    console.log("Invalid input")
}


console.log("Old Tax Rates: ",old_tax_rates*100,"%")
console.log("New Tax Rates: ",new_tax_rates*100,"%")

console.log("Income: ",income)

console.log("Total Tax Payable (Old Regime): ",income*old_tax_rates)
console.log("Total Tax Payable (New Regime): ",income*new_tax_rates)
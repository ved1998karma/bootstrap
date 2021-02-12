var amount=prompt("Enter the Amount:")     //2360

var note2000=note500=note100=note50=note200=note20=note1=note5=note2=note1=0

if(amount>=2000){
    note2000=(amount-(amount%2000))/2000
    console.log("note2000: ",note2000)
    amount=amount-(note2000*2000)
    console.log("Amount Left: ",amount)
}
if(amount>=500){
    note500=(amount-amount%500)/500
    console.log("note500: ",note500)
    amount=amount-(note500*500)
    console.log("Amount Left: ",amount)
}
if(amount>=200){
    note200=(amount-(amount%200))/200
    console.log("note200: ",note200)
    amount=amount-note200*200
    console.log("Amount Left: ",amount)
}
if(amount>=100){
    note100=(amount-(amount%100))/100
    console.log("note100: ",note100)
    amount=amount-note100*100
    console.log("Amount Left: ",amount)
}
if(amount>=50){
    note50=(amount-(amount%50))/50
    console.log("note50: ",note50)
    amount=amount-note50*50
    console.log("Amount Left: ",amount)
}
if(amount>=20){
    note20=(amount-(amount%20))/20
    console.log("note20: ",note20)
    amount=amount-note20*20
    console.log("Amount Left: ",amount)
}
if(amount>=10){
    note10=(amount-(amount%10))/10
    console.log("note10: ",note10)
    amount=amount-note10*10
    console.log("Amount Left: ",amount)
}
if(amount>=5){
    note5=(amount-(amount%5))/5
    console.log("note5: ",note5)
    amount=amount-note5*5
    console.log("Amount Left: ",amount)
}
if(amount>=2){
    note2=(amount-(amount%2))/2
    console.log("note2: ",note2)
    amount=amount-note2*2
    console.log("Amount Left: ",amount)
}
if(amount>=1){
    note1=(amount-(amount%1))/1
    console.log("note1: ",note1)
    amount=amount-note1*1
    console.log("Amount Left: ",amount)
}
else if(amount<0){
    console.log("Invalid Amount")
}
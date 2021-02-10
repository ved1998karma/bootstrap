var year=prompt("Enter a Year")

if((year%4==0) && (year%100!=0) || (year%400==0))
{   
        console.log(year,"is leap Year")
}
else 
    {
        console.log(year,"is Not a Leap Year")
    }
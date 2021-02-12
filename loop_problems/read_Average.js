    // 4. Write a program to read 10 numbers from keyboard and find their sum and average.
    // Test Data :
    // Input the 10 numbers :
    // Number-1 :2
    // ...
    // Number-10 :2
    // Expected Output :
    // The sum of 10 no is : 55
    // The Average is : 5.500000

    var sum=0
    
    for(var i=1;i<=4;i++)
    {
        var inp=parseInt(prompt("Enter the number:"))
        console.log("Number:",i,":",inp)
        sum=sum+inp
    }
    console.log("Sum of all",i-1,"numbers:",sum)
    console.log("The Average is:",sum/(i-1))
var alpha=prompt("Enter a alphabet")

if(alpha=='a'||alpha=='e'||alpha=='i'||alpha=='o'||alpha=="u"){
    console.log(alpha,"is a vowel")
}
else if(alpha>='a'&&alpha<='z'){
    console.log(alpha,"is a consonant")
}
else{
    console.log(alpha,'is invalid')
}
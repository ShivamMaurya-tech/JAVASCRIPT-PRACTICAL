// // console.log("welcome to JavaScript");

// // const prompt = require("prompt-sync")();
// // const name = prompt("What is your name? ");
// // console.log(`Hello, ${name}!`);
// // console.log(10+"20");
// // var myName = "John";
// // console.log(myName);
// // console.log(9-"20");
// // console.log("hello"-"world");
// // console.log(true-true);
// // if(5==5){
// //     console.log("true");
// // }
// // else{
// //     console.log("false");
// // }



// // Even and odd program
// // var myname=5;
// // if(myname%2==0){
// //     console.log("number is even");
// // }
// // else{
// //     console.log("number is odd");
// // }


// //  Prime Number 
// // var count = 0;
// // var N = 5;

// // for (var i = 1; i <= N; i++) {
// //     if (N % i == 0) {
// //         count++;
// //     }
// // }

// // if (count == 2) {
// //     console.log("prime number");
// // } else {
// //     console.log("not prime");
// // }



// // let myage = 25;
// // let iscitizen = false;
// // let isregistered = false;

// // if (myage >= 18 ){
// //     if(iscitizen)
// // {
// //     if(isregistered){
// //   console.log("You are eligible to vote.");}
// // else{
// //     console.log("You are not eligible to vote due to registration issues or status.");
// // }
// // }
   
// // else{
// //     console.log("You are not eligible to vote due to age or citizenship status.");

// // }
// // }
// //  else {
// //     console.log("You are not eligible to vote.");
// // }


// // triple equal operator to check both value and type 
// // let myname=5;
// // if(5==="hello"){
// //     console.log("true");
// // }
// // else{    console.log("false");
// // }


// var NyName = "John";
// console.log(typeof NyName);



// var NyName = "";
// console.log(typeof NyName);


// var NyName = null
// console.log(typeof NyName);



// var NyName ;
// console.log(typeof NyName);


// var NyName=0 ;
// console.log(typeof NyName);

// //for example of NaN
// // a="@#$%";
// // b="hello";

// if(NaN==NaN){
//     console.log("true");
// }   
// else{    console.log("false");
// }




// switch statement question
// var day="monday";
// switch(day){
//     case "monday":console.log("hello welcome");
//     break;
//     case "tuesday":console.log("hemma madam");
//     break;
//     case "wednesday": console.log("byy tata");
//     break;
//     case "thursday": console.log("the day is thursday");
//     break;
//     default : console.log("not input");
// }



// //Interview question
// let areaofShapes="square";
// switch(areaofShapes){
//     case "circle":
//         let pi=3.14;
//         let r=4;
//         console.log("Area of circle:"+pi*r*r);
//         break;
//         case "rectangle":
//             let l=4;
//             let b=9;
//             console.log("Area of rectangle:"+l*b);
//             break;
//             case "square":
//                 let a=5;
//                 console.log("Area of square is:"+a*a);
//                 break;
//                 default :console.log("none");
// }


// // while and do while statement interview question--->
// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// // do while statement -->
// var i=0;
// console.log(i);
// while(i<=10){
//     console.log(i);
//     i++;
// }


//For statement-->
// for(var i=0;i<=10;i++){
//     console.log(i);
// }

//lets take an example of table while used -->
// var i=1;
// while(i<=10){
//     console.log("table of 5 is : 5*"+i+"=" +5*i);
//     i++;
// }

//another example of table of 5 with the help of do while-->
// var i=1;
// do{

// console.log("5*"+i+"="+5*i);
// i++;}
// while(i<=10){
//     // console.log("5*"+i+"="+5*i);
//     // i++;
// }



// // Install prompt-sync first: npm install prompt-sync
// const prompt = require("prompt-sync")();

// let userinput;
// let positiveNumber;

// do {
//     userinput = prompt("Enter a valid positive number: ");
//     positiveNumber = parseFloat(userinput);


//     if (positiveNumber < 0 || isNaN(positiveNumber)) {
//         console.log("Please enter a valid number: " + userinput);
//     }
// } while (positiveNumber < 0 || isNaN(positiveNumber));

// console.log("You entered a valid number:", positiveNumber);


//infinity loop --> use case:Game development for clear visuality
// for(;;){
// console.log("hello");
// }


//calculate the sum of the number from 1 To 10 -->
// var sum=0;
// for(var i=1;i<=10;i++){
//     sum=sum+i;

//     console.log(sum);

// }



// //write a program to print  positive ,negative Number and zero-->
// var num=0;
// if(num===0){
//     console.log(typeof num+" " +"zero");
// }
// else if(num>0){
//     console.log("positive Number");
// }
// else{
//     console.log("negative Number");
// }




// //write a program to check prime number 
// var n=5;
// var count =0;
// for(var i=1;i<=n;i++){
//     if(n%i==0)
//         count++;
// }
// if(count==2){
//     console.log("prime number");
// }
// else{
//     console.log("not prime");
// }
// // if(i<2){
// //     console.log("not prime");
// // }


//write a program to check leap year
// var year = 25;

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log("Year is a leap year");
// } else {
//     console.log("Not a leap year");
// }



//write a program to print pattern--> ?

// const prompt =require("prompt-sync")();
// var number=parseInt(prompt("enter the number to  print a pattern"));
// for(var i=1;i<=number;i++){
//     var row="";
//     for(var j=1;j<=i;j++){
//         row+="*";
//     }
//     console.log(row);
// }




//----------> starting point of function

//function without parameter
// function hello(){
//     console.log("hello world");
// }
// hello();


//function with parameter 
// function number( a, b){
    
//     console.log(a+b);
// }
// number(2,3);

// Write a program to print 5 times name
// function printName(i) {
//     if (i <= 0) {
//         return;
//     } else {
//         console.log("Shivam Maurya");
//         printName(i - 1); // recursive call
//     }
// }

// printName(5);

//Anonymous function or fatArrow function
// var result=function sum(a,b){
// console.log( a+b);
// }
// result(2,4);

// let r = function sum(a,b){
//     return a + b;
// }
// console.log(r(2,2));


//var ,let and const
// var name="Shivam"; ---> Global Scope
// if(true){
//    var name="Maurya";
//     console.log(name);
// }
// console.log(name);

// let use
 //let name="Shivam";  --> block scope 
// if(true){
//   let  name="Maurya";
//     console.log( name);
// }
// // name="hello";
// console.log(name);


// const use --> Block scope

//  const name="Shivam";
// if(true){
//   const name="Maurya";
//     console.log(name);
// }
// name="hello";
// console.log(name);




// Backticks ''''--> Symbol used known as backtick
// let firstname="Shivam";
// let lastname="Maurya";
// let fullname=`${firstname} ${lastname}`;
// console.log(fullname);

//example 2
// let age=20;
// let description=`I am ${age} years old`;
// console.log(description);

// let myName='I am Shivam Maurya btech student from goel institute of techbology and Management';
// console.log(`${myName}`);


// let num=5;
// console.log(`5*${num}`+'='+`${5*num}`);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

// const sum=function(a,b){
//    let result= `the sum of ${a} and ${b} is ${a+b}`;
//    console.log(result);
// }
// sum(5,5);


//----.converting  simple function to  fat arrow function
// const sum = (a,b)=>{
//     let result=`the sum of ${a} and ${b} is ${a+b}`;
//     console.log(result);
// }
// sum(2,3);

// const sum=(a,b)=> console.log(`the sum of ${a} and ${b} is ${a+b}`);
// sum(2,5);

//Q--> reversing a string without using in-built function

 
// function reverse(string){
// const reverse=(string)=>{
//     let line=" ";
//    for(var i=string.length-1;i>=0;i--){
//     line=(line+string.charAt(i));}
//    console.log(line);
//    }

// reverse("hello ");


//----> check given string is pallindrome
function pallindrome(string){
    let line="";
for(var i=string.length-1;i>=0;i--){
    
    line=(line+string.charAt(i));
}
console.log(line);
if(string==line){
    console.log("string is pallindrome");
}
else{
    console.log("string is not pallindrome");
}

}
pallindrome("madam");
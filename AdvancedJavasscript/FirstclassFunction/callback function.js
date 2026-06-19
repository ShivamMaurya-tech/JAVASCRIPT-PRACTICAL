



// callback Function -----> callback function is a function passes as an arguement
// to another function and executed after  the completion of a task.

// .............for Example:------->
// function greet(name,callback){
//     console.log("Received Input",name);
//     callback(name);

// }
// function greetuser(name){
//     console.log(`Hello ,${name}`)
// }

// greet("Shivam ",greetuser);










//===========> Interview Question:----->
//1. Write a Program to perform mathematical operations using callback funcrions and two variables in javascript
// ============>>>>>>>>>>>>>>>>>> Instructions
// A.Define High order Function called Mathoperation that takes three parameters x,y and operation
// B.implement two callback Functions
// C.add:Takes two numbers x and y and returns their sum .
// D.Subtract:Takes two numbers x and y and returns the result of subtracting x and y .
// E.Use the Mathoperation function to perform addition and subtraction operations on two variables a and b.
// F. Display the result of the operations

// const  Mathoperation =(a,b,operation)=>
//     {
//  return operation(a,b);

// }
// const add=(a,b)=>{ //callback function
//     return a+b
// }

// const sub=(a,b)=>{  //callback function
//     return (a-b);
// }

// console.log(mathoperation(6,3,add)) //High order function

// console.log(mathoperation(6,3,sub))//High order function















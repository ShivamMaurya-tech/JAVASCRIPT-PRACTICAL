//----------------------------> Synchronous code:- it executes line by line untill the first line completed then second line gets start
//---------------------------->Asynchronous code:- It executes continueously the code no matter the first line of code executed or not


//-------------------> Synchronous Code->



// const function2=()=>{

//     console.log(
    
//     "function 2 Starts here and  Ends"
//     )
// }

// const fun1=()=>{
//     console.log(
// "Function 1 start Here and ends"
//     )

// function2();
// }
//     const function3=()=>{
//         console.log(
//         "Function 3 Starts here"
//         )
//     }
        
    

// fun1();


// function3();



//---------------Asynchronous Code --->



// const function2=()=>{
//      setTimeout(() => {
//         console.log("Function 2 Starts And Ends Here")
        
//     }, 2000);
// function3();
    
// }

// const fun1=()=>{
//     console.log(
// "Function 1 start Here and ends"
//     )

// function2();
// }
//     const function3=()=>{
//         console.log(
//         "Function 3 Starts here"
//         )
//     }
        
    

// fun1();







//------------------> web API:- It contains value of settimeout for 2 second.

//----------------------> CALLSTACK:- It handles the exections of codes And It is based on last in first out(LIFO)



//--------------------> Hosting:-> hosting is a javascript mechanism where variables and 
// function declaration are moved to the top of their scope before code execution .



// Fat arrow Function :-> It works on top to bottom Approach which Means first defines the function And then call;
//Example of hosting :->

// var myvar=10;
// const myfunction=()=>{
//     console.log("Hello This side is Shivam Maurya");

// }
// myfunction();
// console.log(myvar);


//Global Scope:- It can be access globally.
//Local Scope:- It can be defined inside a function and block  Scopes.


// const globalVariable="I am a global Variable";
// function myfunctionvariable(){  //Acts as a Parent 

//     //Function  Scope
//    const functionvariable ="I am a function variable";
//     if (true){                                         //Act as a Child
// const blockvariable="I am a blockvariable";
//         //Block Scope
//         console.log(
//         blockvariable
//         )
//         console.log(
//         globalVariable
//         )
//         console.log(
//         functionvariable
//         )

//     }




//     console.log(blockvariable) //Output :- Block Variable is not Defined
// }
// myfunctionvariable();







//----------------------------> Closure Scope:- It is created when inner function(Child) access to outer function (parent)
//even after the outer function has finished executing.
//1.Example
// function outerfunction (){                        //Outer function
//     const OuterVariable=" I Am An Outer  Variable"

//     function innerfunction (){               //Inner Function 
//         const innervariable="I am a Innervariable"
//         console.log(OuterVariable)
    
//     }

//    return innerfunction;

// }
// var closureFunction=outerfunction();
// closureFunction();



// 2.One More Example
// function multiplier(factor){
//     return function (number){
//         console.log(number,factor);
//         return number*factor;
//     };
// }

// const double=multiplier(2);
// console.log(double(5));
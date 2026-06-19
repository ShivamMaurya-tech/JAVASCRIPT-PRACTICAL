//object.values:- It 
// let numbers ={
//     name:'Shivam Maurya',
//     age:23,
//     isstudent:true
// };

// console.log(Object.values(numbers))//output: [ 'Shivam Maurya', 23, true ]

//Object.entries:- It returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// console.log(Object.entries(numbers))//output: [ [ 'name', 'Shivam Maurya' ], [ 'age', 23 ], [ 'isstudent', true ] ]  



// //String Padding:- Adding extra space in initial and in last
// const companyName="realistic_shivaay"
// console.log(companyName.padStart(23,
//     "&"
// ))
// console.log(companyName.padEnd(110,"*"))



//------------------------------------------>Trialing Commas:->Adding extra commas in function parameter as well as variable Parameter
function greet(name ,age,Boolean){
    console.log(`hello ${name}, you are ${age} years old.`)
}

greet("Shivam Maurya",23,true,) //Trialing commas
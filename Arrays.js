//------> Array constructor 

// let fruits=new Array("hello","ram","how");
// console.log(fruits);

//---> Array literals
// let fruits=[ 'hello', 'ram', 'how' ];
// console.log(fruits);
// console.log(fruits.at(1));//from starting 
// console.log(fruits.at(-1));// from lasting
// console.log(fruits[0]);

//------->Array traversal /iterating over arrays
// 1.for of Loop
//2.for in Loop
//3.for each method
//4 .map method

//---->1.for of Loop(value)
// let fruits=["mango","apple","mango","guava","pineapple"];
//  for(var items of fruits){
//      console.log(items);
//  }

// for(var i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

//2.-->for in Loop(in-->index)
// let fruits=["mango","apple","mango","guava","pineapple"];
//  for(var items in fruits){
//      console.log(items);
//  }

//3.---> for each Method
// let fruits=["mango","apple","mango","guava","pineapple"];
// const myarr=fruits.forEach((curelem,index,arr)=>{ // every place  has defined already first place =current element & second element =index & third element=array (arr)
//     // console.log(arr);
//     //console.log(typeof arr);
//     return (`${curelem} ${index}`);
  
// });
// console.log(myarr);

// if value comes out undefined then we have to use map method
// let fruits=["mango","apple","mango","guava","pineapple"];
// const myarr=fruits.map((curelem,index,arr)=>{
//     return `${curelem} ${index}`;
// });
// console.log(myarr);

// for map method usages--> creates a new array with transformed elements
// let mynumbers=[1,2,3,4,5,6];
// const number=mynumbers.map((element,index,arr)=>{
//     return ( `${element} ${index}`);

// });
// console.log(number);



//*--> how to perform crud operation in an array .
//crud operation--->(create,read,update,delete) but in this Insert,add,replace and delete
// let persons=["ram","shyam","ravi","dev","kanchan"];
//console.log(persons);
//console.log(persons.push("Shivam")); (-->person.push while printing it gives the length of an array)
// console.log(persons);
// console.log(persons.pop("Devika"));  (--> delete element will  return as Devika)
// console.log(persons);

//push and pop works as to add and delete element in end of an array
// persons.shift();
// console.log(persons);
// // console.log(persons.shift());
// persons.unshift("radhe");
// console.log(persons);

//!-------------------->
//1.push(adding element in last of an array)
// 2.pop(removing element in last of an array)
// 3.shift (removing first element of an array)
// 4.unshift (adding first element of an array)

 //Syntax
// 1.array.splice(start, deleteCount, item1, item2, ..., itemN)
// -> start (required): Index where changes begin.
// - If negative, it counts from the end of the array.
// -> deleteCount (optional): Number of elements to remove.
// - If omitted → removes all elements from start to the end.
// - If 0 → no elements are removed.
// -> item1, item2, ... (optional): Elements to add at the start position.

// let persons=["ram","shyam","ravi","dev","kanchan"];
// for(var item in persons)
//     console.log(item);
// persons.splice(2,2);
 

// - startIndex = 2 → begins at "ravi"
// - deleteCount = 2 → removes 2 elements ("ravi" and "dev")
// - After this operation, the array becomes:


//console.log(persons.splice(2,3));
//console.log(persons);
// //console.log(persons.splice(1));//----> important we provide single value in the parenthesis bracets it considered as deleteelement
// console.log(persons);


// let fruits = ["Apple", "Orange"];
// //fruits.splice(1,0 "Banana", "Mango");
// // fruits.splice(-2,0 ,"Banana" ,"Mango");
// fruits.splice(1,"grapes");
// console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]


//-------------------------------------------->
// 1.indexOf
// syntax:-
// indexOf(searchelement,fromIndex)
let numbers=[1,2,3,4,5,6,7,8,9,9];
// console.log(numbers.indexOf(4,5)); //output -1
// console.log(numbers);
console.log(numbers.indexOf(9,9)); //output-8

console.log(numbers.lastIndexOf(9));// output -9


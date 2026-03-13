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
// let numbers=[4,2,1,3,78,5,6,7,8,9,9];
// console.log(numbers.indexOf(4,5)); //output -1
// // console.log(numbers);
// console.log(numbers.lastIndexOf(4,5)); //output 0

// console.log(numbers.lastIndexOf(4,3));// output 0
// console.log(numbers.includes(6));// output true

//using splice method--->
// Q--->1.add december to end of an Array.
// 2.what is the return value of splice method .
// 3.update march to March.
//4.delete june from an array

// let Months=["january","february","march","april"];
// Months.push("december");
// console.log(Months);
// console.log(Months.indexOf("march"));


// (Months.splice(Months.length,0,"december"));//same console.log(4,0,"december");
// console.log(Months);
// console.log(Months.length);
// console.log(Months.splice(2,1,"March"));
// console.log(Months);

// let Months=["january","february","june","march","april"];
// Months.splice(Months.length,0,"december");
// // console.log(Months);

// const updatemarch=(Months.indexOf("june"));//here element at 2 must be delete "june"
// Months.splice(updatemarch,2,"March");
// console.log(Months);

//-------------------------------> 
// filter in an Array
// 1.find 
// syntax->array.find(curelement,index,array) just like map method

// let numbers=[1,2,3,4,5,6,7];
// const result=numbers.find((curelement)=>{
// return curelement>5;
// });
// console.log(result);//-output 6 just after 5 

// const mynumber=numbers.map((curelement)=>{
//     return curelement *4;
// });
// console.log(mynumber);//output-multiplication of 4

// 2.findIndex method

// const num1=mynumber.findIndex((curelement)=>{
//     return curelement>15;
// });
// console.log(num1);//-output-3

//3.filter method

// const number=numbers.filter((curelement)=>{
// return curelement>4;
// });
// console.log(number);//-output-[5,6,7]

// ---->Qustion - delete 6 from an array
// let value=6;
// const mynumber=numbers.filter((curelement)=>{
//     return curelement!=6;
// });
// console.log(mynumber);


//important question -->
// given an array of products where each product has a name and a price ,write a function 
// that uses the filter method to 
// return an array containing only
//  the products with a less than or equal  to 500
// const products=[
    
//        { name:"Laptop",price:1200},
//        {name:"Phone",price:800},
//        {name:"Tablets",price:500},
//        {name:"Smartwatch",price:150}

    
// ];
// // for (var item in products){
// //     console.log(item);
// // } 

// const myproduct=products.filter((curelement)=>{
//     return (curelement.price<=500);
// });
// console.log(myproduct);//output-{name:"Tablets",price:500} //  {name:"Smartwatch",price:150}


// -------------->filter unique value
// let numbers=[1,2,3,4,7,5,6,7];
// // const mynumbers=numbers.filter((curelement,index,array)=>{
// // // console.log(index);
// // // console.log(curelement);
// // // console.log(array.indexOf(curelement)) //note --> returning the first  come element of an index which means 7 have index 4 twice.
// // return array.indexOf(curelement)==index;
// // });
// // console.log(mynumbers);

// //new set for unique element of an array
// // console.log(new Set(numbers));//output Set(7) { 1, 2, 3, 4, 7, 5, 6 }
// console.log([...new Set(numbers)]); //note for(... these dot represent let numbers: number[])



//--------------------> Sorted array 
// let numbers=[1,2,4,2,1,23,5];
// // numbers.sort(); does not sort for bigger numbers
// const mynumber=numbers.sort((a,b)=>{
// //     if(a>b) return 1;
// //     else return -1;
// // });
// // if(a>b) return 1; //switch the order 
// // if(b>a) return -1; // keep the order
// // {------->top part used in ascending order}
// // console.log(mynumber);

// //----> used in descending order
//  if(a>b) return -1;
//     else return 1;
// });
// console.log(mynumber);

// --------------------------> Question of map method 
//1.Using map method,write a function that takes an array of 
// Strings and return a new arraymwhere each string is captalised .
// let Strings=["hello","ram","how"];
// const result=Strings.map((curelement,index,array)=>{
// return curelement.toUpperCase();//`${curelement}`;
// });
// console.log(result);


// 2.using the map method write a function that takes 
// an array of numbers and returns a new array where
//each number is squared but only if it is even number.

// let numbers=[1,2,3,4,5,6];
// const result =numbers.map((curelement)=>{
//     if(curelement%2==0){
//     return (curelement*curelement);
//     }
// })
// .filter((curelement) => curelement!=undefined);
// console.log(result);

//3.using the map method write a function that takes an array  of names and returns 
// a new array where each name is prefixed with 'Mr'.
// let names=["Abhay","Shivam","Deva"];
// const result=names.map((curelement,index)=>{
//     return `Mr ${curelement}`;
// });
// console.log(result);



//------------------------------------>Reduce method 
// (accumulate answer of large data using in total of add to cart part in e-commerce site)
//syntax:-
//array.reduce(function callback(accumulator,currentValue ,index,array)=>{
    //},initialValues)


    //Interview question -> write a javascript function that calculates the total price of items 
    //in a shoppingcart, the function should take an array of item prices  as input
    // and return the price total 
// const priceItems=[200,400,500,100];
// const result=priceItems.reduce((accumulator,curelement,index,array)=>{
// return accumulator+curelement;//accumulator//`${accumulator}`;
// },0);
// console.log(result);
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
let fruits=["mango","apple","mango","guava","pineapple"];
fruits.forEach((curelem,index,arr)=>{
    // console.log(arr);
    // console.log(typeof arr);
    console.log(`${curelem} ${index}`);
});

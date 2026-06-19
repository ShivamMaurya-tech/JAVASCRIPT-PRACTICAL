// -------------------->List of new Useful features added in ES8
// 1.Array.prototype.{flat,flatmap}
//2.Object.fromEntries()
//3.String.prototype.{trimstart,trimEnd}
// 4.Symbol.prototype.description
// 5.Optional catch binding









//Array.flat And Array.flatmap *****************************
// const NestedArray=[2,3,[4,[5]],6]
// const flattenedArray=NestedArray.flat(1) 
// console.log(flattenedArray)  //Output:-[ 2, 3, 4, [ 5 ], 6 ] because user gives only one value to flat







//----------------------> map Method :- It iterates through every element of an array and returns a new array
// const arr=['My Name','is Shivam',"Maurya"]
// const newArr=arr.map((curval)=>curval.split("  "));
// console.log(newArr)   // output :-[ [ 'My Name' ], [ 'is Shivam' ], [ 'Maurya' ] ] 



//-----------------------------------------flatMap method :- it combines the flat array with map.
// const arr=['My Name','is Shivam',"Maurya"]
// const newArr=arr.flatMap((curval)=>curval.split(" "))

// console.log(newArr) //Output:-[ 'My', 'Name', 'is', 'Shivam', 'Maurya' ]


// ----------------------------------->object.entries:-it returns the array of an  each object and object.fromentries :- it returns the original array
//  and these two are the  vice - versa of each others

// const student={
//     name:"Shivam",
//     age:43,
//     isexists:true


// }
// const newArr=Object.entries(student)
// console.log(newArr) //output:-[ [ 'name', 'Shivam' ], [ 'age', 43 ], [ 'isexists', true ] ]


// const NEWARR=Object.fromEntries(newArr)
// console.log(NEWARR) //output:-{ name: 'Shivam', age: 43, isexists: true }


// console.log(newArr==NEWARR)







//-------------------------string padding :- trimstart -> remove space from the starting and trimend-> remove space from the last.
// let str="                     Shivam       "
// const newstr=str.trim().length;
// console.log(newstr)
// const NEWSTART=str.trimStart();
// const newStr=str.trimStart().length;
// const NEWSTARTs=str.trimEnd();
// console.log(NEWSTART)
// console.log(newStr)

// console.log(NEWSTARTs)

// console.log("    Testing".trimStart())
// console.log("        Testing                            ".trimEnd())
// console.log("                     Testing                          ".trim())




//----------------------> Symbol.prototype.description:-> It represents the unique identifier that is immutable and guaranteed to be unique;
// // for Example;->
// const Mysymbol=Symbol("This is my Symbol")
// console.log(Mysymbol.description)
// console.log(typeof Mysymbol)




//-----------------> Optional Catch binding:- 
// 1.traditional way of try and catch method
// try{
//     //----------
// }
// catch(e){
//     //----------
// }

//--------optional catch binding -


///------------Disclaimer:- This will run only in  website console






// ---------------------------------1.For Example:->
// try{
//     20+3;

// }
// catch{
//     console.log("this is an error")
// }

// ----------------------------------->Output:-23




// -------------------->2.For Example:-
// try{
//     shivam+3;

// }
// catch{
//     console.log("this is an error")
// }

// ******************************Output;-------------------------------->VM88:6 this is an error

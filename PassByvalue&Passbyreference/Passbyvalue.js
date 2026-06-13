// //-------------------- Passing by value :- It defines that do not change original value just coping of primitive value 
// let a=20;
// const modifyvalue=(x)=>x=24; //value has been declared as well as assign the  value
// console.log(modifyvalue(a));
// console.log(a)


// //---------------------- paassing by reference :- It defines  that attaining address value of data when it required most
//  let obj={name:"SHIVAM" , age:15}
//  let obj1 = obj
//  obj1.name="shivam Maurya"
//  console.log(obj1);
//  console.log("Final result" ,obj)



 //--------------------------Object.assign :- It defines that assigning value of object (Main object) but doesn't change original value

//  let obj={name:"Mohan Boy" , age:13}
// //  let obj2={}
//  let newobj=Object.assign({} ,obj)
//  newobj.name="hello Dhar"
//  console.log(newobj)
// console.log(obj)




//------------comparision between passing by references

// let obj1={name:"Shivam",Age:13}
// let obj2={name:"Shivam",Age:13}
// const obj3=obj1==obj2?true:false;  //output : False (because two objects are not equal its address may same)
// console.log(obj3)


// // -------------Different example
// let obj1={name:"Shivam",Age:13} 
// let obj2=obj1
// const obj3= obj2==obj1? true: false; //output :true
// console.log(obj3)


//--------------------Javascript objects :- objects can be converted easily into JSON and vice-versa
// converted into string
// let student ={
//     name:"Shivam MAurya",
//     Age:25,
//     gender:"male",
//     ismale:true,
//     greet:function(){
//         console.log(
//             `Hello my name is ${student.name} and ${student.Age} is  `
//         )
//     },
// }

// let jsondata=JSON.stringify(student);
// console.log(jsondata);


// //-------------------- converted into objects
// let jsonparse1=jsondata
// let jsonparse2=JSON.parse(jsonparse1)
// console.log(jsonparse2)



//------------this :-it can be refers as global object

//  const object ={
//     name:"Shivam",
//     age:12,
//     greet:function(){
//         console.log(this)
//     }
// ,
//  }

//  object.greet();






//-------Method Shorthand Syntax

//  const object ={
//     name:"Shivam",
//     age:12,
//     greet:function(){
//         console.log(this)
//     }
// ,
//  }

//  object.greet();






//  //----------------------Some method of objects in javascript
//  object.keys()
//  object.value()
//  object.entries()



//  const object ={
//     name:"Shivam",
//     age:12,
//     greet:function(){
//         // console.log(this)
//     }
// ,
// //  }

//  object.greet();


//  let obj2=Object.keys(object)
//  console.log(obj2)
 
//  let obj3=Object.values(object)
//  console.log(obj3)

//  let obj4=Object.entries(object)
//  console.log(obj4)


//  let obj5=Object.freeze(object)
//  object.name="Hello"
//  console.log(object)






//1.---------------------------------------- Interview Question :- Given an object representing a student , write  a function to add a new subject 
// with its corresponding grade to the student's record .
//  also check if the grades property is present or not?


// let student ={
//     name:"Bob",
//     age:20,
//     grades:{
//         math:90,
//         science:85,
//         history:88,
//     },

// }
//    const addsubject =(student,subject,marks)=>{
//     if(!student.grades){
//         student.grades={}
//     }
//         return (student.grades[subject]=marks)

//    }

// addsubject(student,"computer",87)
// console.log(student);



// //2.------------------------------Interview Question:-  Write a function that compares two objects to determine if they have the same properties and values.
// let objA={name:"Alice",age:25,city:"NewYork"}
// let objB={name:"Alice",age:27,city:"NewYork",country:"India"}
// let objC={name:"Bob",age:26,city:"Francisco"}






// const areobject=(obj1,obj2)=>{

// const o1=Object.keys(obj1)
// const o2=Object.keys(obj2)
// // console.log(o2)
// if(o1.length==o2.length){
//     return true 
// }

// else{
//     return false
// }
// }

// const areobjects=(obj1,obj3)=>{

// const o1=Object.keys(obj1)
// const o3=Object.keys(obj3)
// // console.log(o2)
// if(o1.length==o3.length){
//     return true 
// }

// else{
//     return false
// }
// }




// for(let key in objA){
//     console.log(objA[key])
// }

// console.log(areobject(objA,objB))
// console.log(areobjects(objA,objC))



//3.---------------------------------------------------Interview Question :- write a function that transform an 
// array of an objects into an objects where the keys are the objectd "id's"

// For Example :- Should print ==> {'1':{id:1,name:"alice"} , '2' : {id:2, name:'Bob'},'3' :  {id:3,name:'Charlie'}}

let inputarray=[
    
        {id:1,name:"Alice"},
        {id:2,name:"Bob"},
        {id:3,name:"Charlie"}

    
];


const arraytoobj=(inputs)=>{

let object={};

for(let key of inputs){
// console.log(key.id,key);
object[key.id]=key
}
return object;

};

console.log(arraytoobj(inputarray))





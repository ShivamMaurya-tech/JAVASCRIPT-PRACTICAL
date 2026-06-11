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
let student ={
    name:"Shivam MAurya",
    Age:25,
    gender:"male",
    ismale:true,
    greet:function(){
        console.log(
            `Hello my name is ${student.name} and ${student.Age} is  `
        )
    },
}

let jsondata=JSON.stringify(student);
console.log(jsondata);


//-------------------- converted into objects
let jsonparse1=jsondata
let jsonparse2=JSON.parse(jsonparse1)
console.log(jsonparse2)
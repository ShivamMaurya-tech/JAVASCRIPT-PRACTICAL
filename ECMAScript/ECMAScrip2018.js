// ---------------------------------------->Rest/Spread Properties
// const student={
//     name:"Shivam Maurya",
//     age:34,
//     isexits:true

// }
// const {age,...others}=student;
// console.log(others)   //Output :-{ name: 'Shivam Maurya', isexits: true } except age because others contains only two things.




//------------------------> Object And Spread Properties
obj1={x:23,y:56,z:67}
obj2={z:34,a:34}
const newobj={...obj1,...obj2}
console.log(newobj)


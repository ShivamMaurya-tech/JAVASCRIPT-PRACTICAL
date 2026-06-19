// =====================> List of useful features added in ES8
// 1.  .at()function for indexing
//2. Object.hasOwn(obj,propkey)





// 1.==============>.at()

// const Array=[1,2,3,4,5]

// console.log(Array[Array.length-1])
// console.log(Array.at(-1))



//2.=================>  Object.hasOwn(obj,propkey)

// const student={
//     name:"World best javascipt Course",
//     Author:"Shivam Maurya",
// };
// console.log(student.hasOwnProperty("name")) //Output:-True
// console.log(student.hasOwnProperty("price")) //Output:- False


// console.log(Object.hasOwn(student,"name"))  //Output:-true
// console.log(typeof student)





//===========================> Issues with hasOwnproperty
//====> Issue -1: doesn't work for objects created using Object.create(null)

// const student =Object.create(null)
// console.log(student)
// student.name="Shivam"
// console.log(student)
// // console.log(student.hasOwnProperty("name"))  //Output --> Error ====>   student.hasOwnProperty is not a function

// console.log(Object.hasOwn(student,"name"))







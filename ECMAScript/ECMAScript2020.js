//--------------------------->Creating BigInts

// Note:-   MAX_SAFE_INTEGER is a constructor in which limitation of a number defined already;
// let Maxnumber=Number.MAX_SAFE_INTEGER;

// Maxnumber=BigInt(Maxnumber);
//  let num = Maxnumber+100n;
// console.log(num)

// const largeNumber=BigInt(9007199254741004);
// console.log(largeNumber)
// console.log(typeof largeNumber)










// ------------------------------->Nullish coalescing Operator(??):->
// Nullish coalescing Operator is a Logical operator that provides a concise way to handle nullish (null or undefined)
//values.


// Note:-Nullish coalescing Operator(??):->It gives always left hand values when defined value (null or undefined ) .


// let favNum=0; //falsy value
// let userfav=favNum??10
// console.log(userfav);


//Same But Different in Logics and Output

// let favNum=0;
// let userfav=favNum||10
// console.log(userfav);






//----------------optional Chaning Operator:->

// const person={
//     name:"Shivam",
//     age:23,
//     isexists:true,
//     Address:{
//         city:0,
//         Zipcode:274406
//     }
// }

//Accessung nested Properties without optional Chaining(?.) represents like this .
// const city=person.Address ? person.Address.city:"city is not present";
// const city=person.Address ?.city || "city is not present";  //we can use like this but there is some problem  in it.
// const city=person.Address ?.city            ??           "city is not present"; // we use it nullable coalescing method because city is having (0) value.
// console.log(city) 


// -------------------------> optional Chaining(?.)
// const person={
//     name:"Shivam",
//     age:23,
//     Address:{
//         city:"Lucknow",
// Coordinates:{
//     Longtitude:23.4533245,
//     Latitudinal:-34.342453
// }

//     }
// }

// const city=person.Address?.Coordinates?.Latitudinal ??"this is not a result";
// console.log(city)






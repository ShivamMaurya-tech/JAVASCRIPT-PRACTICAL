//-------------> List of new useful features added in ES8
// 1.String.prototype.replaceAll()
//2.Logical Assignment Operators (//==,&&= ,??=)
// 3.Numeric Separators
//4.Promise.any()



// ******* String.prototype.replaceAll()
// 1.-----> replacing all occurences of a word

// const originalArray="hello World hello Again "
// const newArray=originalArray.replaceAll("hello","hi");
// console.log(newArray)





// 2.--------------> replacing Multiple spaces with a single spaces
// const OriginalArray="This     is      a       fish"
// const newArray=OriginalArray.replaceAll(/\s+/g," ")  // =================>Using Regular Expressions
// console.log(newArray)


// 3.=======================> Logical Assignment Operator:-> Same As nullish Coalescing Operator (if value is true then we get left hand side value)
// let x=false
// x=x||true
// console.log(x)


// let y=20;
// y||=30;
// console.log(y)  //Output:-20


// ==============================>Logical And Assignment Operator:> if value of left hand side is true the  we get right hand side value
// let u=34;
//    u &&= 40;
// console.log(u) //Output:-40





//=============================================> Numeric Separators(_)


const Bignumber =1_000_000
console.log(Bignumber)

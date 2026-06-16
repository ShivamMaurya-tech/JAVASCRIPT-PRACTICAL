//--------------------------->ShortHand Method :-> 

// var name="Shivam Maurya";
// var age=23;
// const person={name,age}
// console.log(person)



// //Destructuring Method:--------------------------->
// const numbers=[10,20,30]
// const first =numbers[2]; //TRADITIONAL  WAY
// console.log(first)


//-----------------------> USING DESTRUCTURING METHOD
// const numbers=[10,39,49]
// // const [first ,second ,third]=numbers;
// // console.log(second)
// const [, , third]=numbers; //ignoring method
// console.log( third)




//1.Question :- write a program to swap 2 numbers without using the third variable.
// let a=39;
// let b=30;

// [a,b]=[b,a];
// console.log(a,b)



// --------------------------------------------------->//Destructuring method
// const user={
//     name:"Shivam Maurya",
//     age:23

// }

// const {name,age}=user;
// console.log(name ,age) //Output:Shivam Maurya 23

// console.log(age,name)  //Output:23 Shivam Maurya





// ---------------------------------------->Spread Operator:- It denotes as (...) three Points.


// 1.------------------------>Copying of an Array

// const fruits=['Apple','Orange','Mango' ,'Watermelon']
// let newFruits=[...fruits]
// console.log(newFruits)

// 2.------------------------->Concatenating of an Array
// const num1=[2,3,4,5]I
// const num2=[3,45,6,7]

// const mynum=[...num1,...num2]
// console.log(mynum)


// 3.------------------>Adding Elements to Existing Array

// let fruits=['Apple' ,'Mango' ,'Grapes']
// fruits.push(...['Watermelon','Grapes'])

// console.log(fruits)






// 4.------------------------> Spliting Method


// Using Traditional Way

// let Country="INDIA";

// console.log(Country.split(""))


// ---------> Same method Using Spread Operator
// let Country="INDIA";
// console.log([...Country])



// 5.Rest Parameters:-------->
// const sum=(a,b,c,d,e)=>{  //these Variables are Function Parameters
 
//     return a+b+c+d+e;
// }
// console.log(sum(2,3,4,5,6))



//.using Rest Parameter
// =================================>DEFINITION OF SPREAD OPERATOR:-SPREAD OPERATOR IS A TYPE 0F OPERATOR WHERE EATS ALL THE THINGS(NUMBERS).
//  AND SPREAD OPERATOR ALWAYS PLACED IN THE LAST OF THE PARAMETER;
//===================================> FOR EXAMPLE:- GIVEN SET OF NUMBERS WHERE SPREAD OPERATOR CONSISTS OF ALL THE NUMBERS .

// const sum=(a,b, ...numbers)=>{
//     return numbers.reduce((accu,curVal)=>
//        ( accu=accu+curVal),0);

    
// }
// console.log(sum(1,2,3,4,5,6,7,6,5,6))  // value of a=1,b=2 and rest of the numbers contains (...numbers)
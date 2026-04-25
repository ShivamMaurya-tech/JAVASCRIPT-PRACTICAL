
//Creating a obeject

let idtype="studentId"
const person ={
    [idtype]:"Q1234",  //dynamic key based on idtype
    Name:"Shivam",
    Age:22,
    section:"A",
    isstudent:false,
    // "isstudent":true,
    greet:function(){
        console.log(
            `Hello my ${idtype} is ${person[idtype]}  Shivam Maurya is here `
        )
    },
}

//Question--difference between function and methods
//function ---> function without objects or classes called as function 
//Methods---> function is having objects and classes called as Methods 

console.log(person.Age)
console.log(person["Name"])
console.log(person[`isstudent`])
console.log(person.isstudent)
console.log(person)

person["Age"]=34;
person.greet()

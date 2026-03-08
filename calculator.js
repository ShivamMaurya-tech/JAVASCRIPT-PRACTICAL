//Q--> write a program for calculator to do simple task of an arithmatic operation

// fat arrow function
const calculator=(a,b,operator)=>{
// function calculator(a,b,operator){
    switch(operator){
        case "+":console.log(`${a}+${b}=${a+b}`);
        break;
case "-":console.log(`${a}-${b}=${a-b}`);
    break;
case "*":console.log(`${a}*${b}=${a*b}`);
    break;
case "/":console.log(`${a}/${b}=${a/b}`);
    break;
    default:console.log("invalid");
    }
}
calculator(2,3,'*');
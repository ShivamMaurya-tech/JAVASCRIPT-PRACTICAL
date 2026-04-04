let mybtn=document.querySelector(".btn");
let inputfield=document.querySelector("#inputbox");

//let createdbtn=document.querySelector(".btn2");

let addelement=document.querySelector(".addingelem");

const handlebutton=()=>{
    addtodolist();


};



const addtodolist=()=>{
    let para=document.createElement("p");
para.textContent=inputfield.value;

addelement.append(para);

inputfield.value=" ";

};

mybtn.addEventListener('click',handlebutton);



addelement.addEventListener('click',(event)=>{
    console.log(event.target);
    let curelement=event.target;
   curelement.remove();
})




// let mybtn=document.querySelector(".btn");
// let inputfield=document.querySelector("#inputbox");
// // ❌ remove this global para creation
// // let para=document.createElement("p");

// let addelement=document.querySelector(".addingelem");

// const handlebutton=()=>{
//     addtodolist();
// };

// const addtodolist=()=>{
//     // ✅ create a new <p> each time
//     let para=document.createElement("p");
//     para.textContent=inputfield.value;
//     addelement.append(para);
//     inputfield.value=" ";
// };

// mybtn.addEventListener('click',handlebutton);

// addelement.addEventListener('click',(event)=>{
//     console.log(event.target);
//     let curelement=event.target;
//     curelement.remove();
// });
const studentbiodata={
    Firstname:"Shivam",
    lastname:"Maurya",
    Gender:"Male",
    Age:23,
    Grade:"A",
    Courses:["Math","Science","Chemistry"],
    Addresses:{
        Street:"123 Main St",
        City:"Lucknow",
        State:"Uttarpradesh",
        Zipcode:"12345",
    },
};
 

const addtodolist=()=>{
    localStorage.setItem("objectdata",JSON.stringify(studentbiodata));
}

const gettodolist=()=>{
    const retrivedstudentbiodata=JSON.parse(localStorage.getItem("objectdata"));
    console.log("Retirved data Are:",retrivedstudentbiodata);
}

const deltodolist=()=>{
    const deldatalist=localStorage.removeItem("objectdata");
    console.log("Deleted data are:",deldatalist);
}


let mybtn1=document.querySelector(".addbtn");
let mybtn2=document.querySelector(".getbtn");
let mybtn3=document.querySelector(".delbtn");
mybtn1.addEventListener("click",()=>{
    addtodolist();
})


mybtn2.addEventListener("click",()=>{
    gettodolist();
})
mybtn3.addEventListener("click",()=>{
    deltodolist();
})

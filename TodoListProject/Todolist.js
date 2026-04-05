let mybtn=document.querySelector(".btn1");
let inputfield=document.querySelector("#inputbox");

//let createdbtn=document.querySelector(".btn2");

let addelement=document.querySelector(".addingelement");
let Deletebtn=document.querySelector(".delbtn");

const handlebutton=()=>{
    addtodolist();
};




const gettodolistfromlocal=()=>{
    return JSON.parse(localStorage.getItem("Youtubeplaylist"));
}



   elementarray=gettodolistfromlocal()||[];




const addtodolist=()=>{
    const todolistvalue=inputfield.value.trim();
    

    let divelement=document.createElement('div');
    divelement.classList.add(".divtodoelement");
    divelement.innerHTML=`<li>${inputfield.value}</li>
    <button class="delbtn">Delete</button>`;

    elementarray.push(todolistvalue);
    localStorage.setItem("Youtubeplaylist",JSON.stringify(elementarray));
    elementarray=[...new Set(elementarray)];
    console.log(elementarray);


// JSON.parse(localStorage.getItem("Youtubeplaylist"));

addelement.append(divelement);
inputfield.value="";



};







const showtodolist=()=>{

    console.log(elementarray);
}
showtodolist();

mybtn.addEventListener('click',handlebutton);



// Deletebtn.addEventListener('click',(event)=>{
//     console.log(event.target);
//     let curelement=event.target;
//    curelement.remove();
// })



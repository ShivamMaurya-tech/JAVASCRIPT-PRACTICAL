let mybtn=document.querySelector(".btn1");
let inputfield=document.querySelector("#inputbox");

//let createdbtn=document.querySelector(".btn2");

let addelement=document.querySelector(".addingelement");
let Deletebtn=document.querySelector(".delbtn");
// let maintodoelement=document.querySelector(".divtodoelement");

const handlebutton=()=>{ //======> Second part
    addtodolist();
};



//Fifth part
const gettodolistfromlocal=()=>{
    return JSON.parse(localStorage.getItem("Youtubeplaylist"));
}


//sixth part
const addtodolistlocalstorage=(elementarray=>{
return localStorage.setItem("YoutubeList",JSON.stringify(elementarray));
});



  let  elementarray=gettodolistfromlocal()||[];  //Fourth part
   const addtododynamiclist=(element)=>{  //seventh part
    // addtodolist(element);
    // Adding element starts from here


    let divelement=document.createElement('div');
    divelement.classList.add(".divtodoelement");
    divelement.innerHTML=`<li>${element}</li>
    <button class="delbtn">Delete</button>`;
    
addelement.append(divelement);

   }




const addtodolist=()=>{ //==========> third part
   

    const todolistvalue=inputfield.value.trim();
    if(!todolistvalue=="" && !elementarray.includes(todolistvalue)){
    addtododynamiclist(todolistvalue);

    // let divelement=document.createElement('div');
    // divelement.classList.add(".divtodoelement");
    // divelement.innerHTML=`<li>${inputfield.value}</li>
    // <button class="delbtn">Delete</button>`;

    elementarray.push(todolistvalue); //Eight Part
    localStorage.setItem("Youtubeplaylist",JSON.stringify(elementarray));
    elementarray=[...new Set(elementarray)];
    console.log(elementarray);



// JSON.parse(localStorage.getItem("Youtubeplaylist"));

// addelement.append(divelement);
inputfield.value="";

    }

};





//Nineth Part

const showtodolist=()=>{

    console.log(elementarray);
   elementarray.forEach(element => {
        addtododynamiclist(element);
        
    });
}
showtodolist();

mybtn.addEventListener('click',handlebutton);     //=====> first part 




//Tenth Part

//delete the data 
addelement.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("delbtn")){

    
    removetodoelement(e);}
});



//Eleventh Part
const removetodoelement=(e)=>{
    const removetodoele=e.target;
    let deletetodoelementcontent=removetodoele.previousElementSibling.innerText;
   
    let parentelement=removetodoele.parentElement;
     console.log(deletetodoelementcontent);
    parentelement.remove();
    


    //Twelveth Part
    elementarray=elementarray.filter((currenttodo)=>{

return currenttodo!=deletetodoelementcontent.toLowerCase();
    })
console.log(elementarray);
addtodolistlocalstorage(elementarray);

}


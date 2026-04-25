let starttime=document.querySelector(".start")
let reset=document.querySelector(".reset")
let gettime=document.querySelector(".gettime")
let stop=document.querySelector(".stop")
let cleartime=document.querySelector(".cleartime")
let countdowntime=document.querySelector("#countdown")
let showvalues=document.querySelector(".showcurrentvalues")


//set the timer
let startcount=0
let intervalId; // store interval id globally

const countstart = () => {
    intervalId = setInterval(() => {
        countdowntime.innerText = startcount++;
    }, 1000);
}
console.log(starttime);

starttime.addEventListener("click",countstart);


//stop the timer
let stoptime=()=>{
     showcurrenttime();
     clearInterval(intervalId);
}


stop.addEventListener("click",stoptime);

//reset the timer
const resettime = () => {
    startcount = 0; // reset the global variable
    countdowntime.innerText = startcount;
    clearInterval(intervalId);
    //intervalId = null; // important: clear the interval reference
};

reset.addEventListener("click", resettime);


//gettime apply
const showcurrenttime=()=>{
let newpara=document.createElement('p');
newpara.innerText = `the current time is ${countdowntime.innerText}`
showvalues.append(newpara)
}

gettime.addEventListener("click",showcurrenttime)




//clear the time 

const clearingtime=()=>{
    showvalues.innerText="";
}
cleartime.addEventListener("click",clearingtime)
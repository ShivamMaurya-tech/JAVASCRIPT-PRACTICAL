let randomnumber=parseInt(Math.random()*100+1);
// console.log(randomnumber);
let submit =document.querySelector('#submited');
let userinput=document.querySelector('#inputbox');
let guessslot=document.querySelector('.guess');
let guessremain=document.querySelector('.lastresult');
let loworhi=document.querySelector('.loworhigh');
let startover=document.querySelector('.resultparas');
// to create element for pressing button to restart the game
let p=document.createElement('p');
let prevguess=[];
let numguess=1;

let playgame=true; //always play game because of boolean true
if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();//if the  event does not get explicitly handled, its default action should not be taken as it normally would be.
    //click event listner use to select specific part only submit
const guess=userinput.value;
// console.log(guess);
validategame(guess);

}) 
}
function validategame(guess){
    if(isNaN(guess)){
        alert ("enter the valid number");
    }
    else if(guess<1){
        alert ("please enter the number greater than 1");
    }
    else if(guess>100){
        alert ("please enter the number less than 100");
    }
    else{
        prevguess.push(guess);
        if(numguess===11){
            displayguess(guess);
            displayMessage(`game Over ,Random Number was ${randomnumber}`);
endgame()
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }

}

function checkguess(guess){
    
}
function displayguess(guess){

}
function displayMessage(message){

}
function endgame(){

}
function newgame(){

}

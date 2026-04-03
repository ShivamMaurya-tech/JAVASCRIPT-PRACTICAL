let mybtn1=document.querySelector(".btn1");
let mybtn2=document.querySelector(".btn2");
let copydiv=document.querySelector(".copycode");
let rgb1="#004773";
let rgb2="#54d542";

const hexvalues=()=>{

    let myhexvalue="0123456789abcdef";
    let colors ="#";
    for(var i=0;i<6;i++){
    colors=(colors+myhexvalue[Math.floor(Math.random()*16)]);
   
    } return colors;}

    const handlebutton1=()=>{

        let rgb1=hexvalues();
        console.log(rgb1);
         mybtn1.innerText=rgb1;
        document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
        copydiv.innerHTML=` backgroundimage:linear-gradient(toright,${rgb1},${rgb2})`;
  
    }
    const handlebutton2=()=>{
        let rgb2=hexvalues();
        console.log(rgb2);
            document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
  copydiv.innerHTML=` backgroundimage:linear-gradient(toright,${rgb1},${rgb2})`;
   mybtn2.innerText=rgb2;

    }




mybtn1.addEventListener('click',handlebutton1);
mybtn2.addEventListener('click',handlebutton2);
copydiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(copydiv.innerText);
})

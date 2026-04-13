let clock=()=>{
    let date=new Date().toLocaleTimeString();
    document.querySelector("#clock").innerText=date.toUpperCase();
}
clock();
const mywork=setInterval(()=>{
clock();
},1000)


// setTimeout(() => clearInterval(mywork)

    
// , 5000);
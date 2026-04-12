// function delayed(){
//     console.log("this is function was delayed by 3000 millisecond(3 second)");

// }
// setTimeout(delayed,3000);


// // --------------->
// function delayed1(x){
//     console.log("this is function was delayed by 3000 millisecond(3 second)",x)

// }
// setTimeout(() =>delayed1(5),3000 )


// // 1.-->settimeout -> it executes only one time when the program starts running .
// // 2.---->setinterval-> it executes repeated number of times when the program starts running. 



// function repeated(){
//     console.log(
//         "this function was repeated  continuosly after every 2 second"
//     )
// }
// setInterval(repeated,2000);




// function repeated(x){
//     console.log(
//         "this function was repeated  continuosly after every 2 second",x
//     )
// }
// const mywork=setInterval(()=>(repeated(2),2000));
// clearInterval(mywork)



// 3.---->cleartinterval --> to clear the setinterval method


// 4.---->cleartimeout --> to clear the settimeout method



// Question ---> write a javascript program that defines a function called reapeated function.
// this function should log the message "this function repeats every 1000 millisecond (1 second)" 
// to the console then , set up an interval using setinterval() to call repeated function every 1000 millisecond .
// Additionally , after 5second have ellapsed ,use settimeout to clear 
// the interval previously set up . make sure to log the message "interval cleared after 5 second ."
//  when the interval is cleared.

function repeated(){
    console.log("this function repeats every 1000 millisecond (1 second)" )}
    const mywork=setInterval(repeated,1000)

repeated()
setTimeout(() => clearInterval(mywork),5000)
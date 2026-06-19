


//Promises:=============> Promises is like a placeholder for the result of an asynchronous operation

// Some way of Working==================>

  // Promise====>Pending=====>Settled:Task time completed(Async time is Over)---------->resolved:--->We get an value(works successfully done)
                                // |
                                // |
                                // |
                                // rejected:---->we get an error(works doesn't successfull)

// Syntax:--=====>function mypromisefunction(()=>{
// return new Promise(resolve,reject){

// ... codes====================<
// }

// }  )                     

// 1.Example::================>

// const pr =new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     // resolve("I miss you ")
//     reject("I miss You")
    
//   },2000)
// })
//   pr.then((res)=>{
//     console.log(res)
//   })
//   .catch((error)=>{
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log("Don't Worry We all Miss You And Keep Smiling")
//   })
    
    
// 2.=================>
//   const studentname="Shivam";
// const enrollstudent=(studentname)=>{
//   return new Promise((resolve,reject)=>{

//     // Simulating asynchronous enrollment Process
//     setTimeout(() => {
//       const issuccessful=Math.random() > 0.4;
      
//       if(issuccessful){
//         resolve(`Enrollment Successful for ${studentname}`)
//       }
//       else{
//         reject(`Enrollment failed for ${studentname},Please try again.`)
//       }
//     }, 2000);
//   }
//   )}




//   enrollstudent(studentname).then((res)=>{
//     console.log(res)
//   })
//   .catch((error)=>{
//     console.log(error)
//   }).finally(()=>{
//     console.log("Enrollment Process Completed")
//   })




// **********************Some method of Promises***************
// 1.Promise.all()

// const promise1=new Promise((resolve)=>{
//     setTimeout(() => 
//         resolve("first",2000))
        
    
// })

// const promise2=new Promise((resolve,reject)=>{
// setTimeout(() => reject("failed", 2000));
// })

// // const promise2=new Promise((resolve)=>{
// // setTimeout(() => resolve("second", 2000));
// // })

// const promise3=new Promise((resolve)=>{
//     setTimeout(() => resolve("third", 5000))
// })

// Promise.all([promise1,promise3,promise2])
// .then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
// console.log(error)
// });


// // Output:-failed


// Note=========> If one case Failed In promise.all() then output will be failed(rejected)









// 2.==============>Promise.allsettled()

// const promise1=new Promise((resolve)=>{
//     setTimeout(() => 
//         resolve("first",2000))
        
    
// })

// const promise2=new Promise((resolve,reject)=>{
// setTimeout(() => reject("failed", 2000));
// })

// // const promise2=new Promise((resolve)=>{
// // setTimeout(() => resolve("second", 2000));
// // })

// const promise3=new Promise((resolve)=>{
//     setTimeout(() => resolve("third", 5000))
// })

// Promise.allSettled([promise1,promise3,promise2])
// .then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
// console.log(error)
// });


// Output:=====>[
//   { status: 'fulfilled', value: 'first' },
//   { status: 'fulfilled', value: 'third' },
//   { status: 'rejected', reason: 'failed' }
// ]



// 3.promise.race()==========>

    
const promise1=new Promise((resolve)=>{
    setTimeout(() => {
        resolve("first")},4000)
        
    
})

const promise2=new Promise((resolve,reject)=>{
setTimeout(() => {reject("failed")}, 2000)
})

// const promise2=new Promise((resolve)=>{
// setTimeout(() => resolve("second", 2000));
// })

const promise3=new Promise((resolve)=>{
    setTimeout(() =>{ resolve("third")}, 1000)
})

Promise.race([promise1,promise3,promise2])
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
console.log(error)
});


// Output:---->third(promise.race works when time takes less to be execution)

// [Done] exited with code=0 in 4.117 seconds(it Denotes that highest time duration assign to the one of the promises)


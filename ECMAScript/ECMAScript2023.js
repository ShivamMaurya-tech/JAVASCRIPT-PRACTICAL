


//================================> list of  new useful features added in ES8
// 1.--> Array.findLast()
// 2.-->Array.findLastIndex()
// 3.--> Array.prototype.toReversed()
// 4.-->Array.prototype.tosorted(comparefn)
// 5.-->Array.prototype.tospliced(start,deletecount,....items)
// 6.-->Array.prototype.with(index,value)





// 1.=================> Array.findLast() and Array.findLastIndex()
// const number=[1,2,3,5,4,2,1]
// console.log(number.findLast((elem)=>elem)) //Output:-7
// console.log(number.findLastIndex((elem)=>elem)) //output:-6

// console.log(number.findLast((elem)=>elem>2)) //output:-4


// 2.=====================> Array.toreversed()
// const student =["Shivam","Holand","mpbapee"]
// const newArray=student.toReversed();
// console.log(newArray)   //Ouptut:- [ 'mpbapee', 'Holand', 'Shivam' ]



// 3.======================> Array.toSorted();
// const number=[1,2,4,5,6,2,3,4]
// let SortedArray=number.toSorted()
// console.log("Original Array",number);
// console.log("SOrted Array",SortedArray)


// 4.=================> Array.tospliced(start,deletecount,....items)
// const number=[1,2,4,5,6,2,3,4]
// let SplicedItems=number.toSpliced(4,3,0)  //
// console.log(SplicedItems)

// note:-----> Spliced Works here 4 which means index four that is number(6) from here  three element will be deleted (6,2,3) and it has now remaining element 
//are left [[ 1, 2, 4, 5, 4 ]] as output and number(3) element would be added in this section




// 5.===========================> Array.with(index,value)
// const replacewith=["ShivaM","Hello","How","are"]
// let newArray=replacewith.with(2,"Dude")
// console.log(newArray)  //output:-[ 'ShivaM', 'Hello', 'Dude', 'are' ]
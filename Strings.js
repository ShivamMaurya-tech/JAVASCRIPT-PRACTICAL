//------------------> Strings Properties
// 1.length properties
// 2.Escape Properties(using backslash before double and single backtick)
// let text='Hello My name is \"Shivam Maurya\" I am a \'fullstack\' developer';
// console.log(text);

// // 2. indexOf Method
// let names="Shivam Maurya";
// const result=names.indexOf("Shivam");//output-first element value index(0)
// console.log(result);


// 3.Array.from("text")-->(make Strings array);
// const result=Array.from("names");
// console.log(result);

// const result=Array.from("Shivam Maurya");
// const namesarray=result.map((curelement,index,array)=>{
//     return `${curelement}-${index}`;
// })
// console.log(namesarray);


// 4.lastIndexOf(searchelement,position) same as indexOf

// let description="Hello Myname is Shivam Maurya";
// const myarr=description.lastIndexOf("o",2);
// const myArr=description.indexOf("Shivam",2);
//     console.log(myArr);
// console.log(myarr);

//5.search Method(return index only when strings are correct) and 
// backslash denotes regular expression
// let description="Hello My name is Shivam Maurya";
// // const result=description.search("My");
// // const result=description.search(/name/g)//-output-9//---g flag denotes globally it means something that name anywhere present in the array
// const result=description.search(/Name/i) ;//-output-9//i denotes ignore case sensitive typology  and return index of that element
// console.log(result);


// 6.match() method returns the strings(can be 2 or more) and
//   g global flag with regular expression output comes without g global flag.
// in an array if no strings is matched then (null) comes out
//  let description="Hello My name is Shivam Maurya Shivam";
// //  const result =description.match("SHivam");//- output -null
// // const result =description.match("Shivam");//- returns array strings 
// const result =description.match(/Shivam/g);//- 

//  console.log(result);

// 7.matchAll() method returns array strings also add the global g flag with regular expression 

// let description="Hello My name is Shivam Maurya Shivam";
// const result =description.matchAll("Shivam");
// console.log(...result);
// //  //    or (...)-->spread opertator
// //  for(var items of result)
// // //  {console.log(items);}
// // //  console.log(items.index);
// // {console.log(items[0]);}


//8.includes() method returns boolean value and every character must be present
// let description="Hello My name is Shivam Maurya Shivam";
// const result=description.includes("Hello");
// console.log(result);

//9.startsWith() method returns first string index and endsWith() method returns last index of string

// let description="Hello My name is Shivam Maurya Shivam";
// const result=description.startsWith("Hello");
// const lastresult=description.endsWith("ram");
// console.log(result);
// console.log(lastresult);

// //10.slice() method (start,end)
// // syntax->(firstindex{0},lastindex{1}) but including 0 index and excluding index lastelement
// let description="Hello My name is Shivam Maurya Shivam";
// const result=description.slice(3,8);
// console.log(result);//-output (lo My)


//11.substring method (start ,end ) similar to slice method but slight difference is present
//which is slice gives output at negative index but substring returns whole strings,
// let description="Hello My name is Shivam Maurya Shivam";
// // const result=description.substring(3,8);//-output (lo My)
//  const result=description.substring(-4);//------------>returns whole strings
//  const res=description.slice(-6);//--------->returns only particular index value
// console.log(result);
// console.log(res);


//interview question 3 ways to write for any strings
// let description="Hello My name is Shivam Maurya Shivam";
// // const result=description.slice(1);
// // const result=description.replace("H","");
// const result =description.substring(1);
// console.log(result);

// // 12.replace() and replaceAll() method 
// let description="Hello My name is Shivam Maurya Shivam";
// // const result=description.replace("Shivam","Don");
// const result=description.replaceAll("Shivam","Don");
// console.log(result);


// ------------------------> extractin string character
//when using negative value in charAt(-2) there will be no/empty output
// let text="Hello my Name is Shivam Maurya";
// const result=text.at(-4);//return value for ngeative index also
// const result1=text.charAt(7);//does not return value for negative 
// const result2 =text.charCodeAt("hello"); //charcode means ascii code
// console.log(result);
// console.log(result1);
// console.log(result2);


// --------------------> Question - Write a program for replace last "Javascript" with the another string
// let names = "Hello Javascript ,How are you Javascript";

// // Find the last occurrence of "Javascript"
// const lastIndex = names.lastIndexOf("Javascript");
//  const result ="Javascript".length;
// console.log(result);//Output-10
// // if (lastIndex !== -1) {
// //   // Replace only the last occurrence
// //   const result =
// //     names.substring(0, lastIndex) +
// //     "Shivam" +
// //     names.substring(lastIndex + "Javascript".length);

// //   console.log(result);
// // } else {
// //   console.log("Word not found");
// }


// 1.trim() method removes whitespace from start and end not from between
// let str="    Hello, World!   ";
// console.log(str.length);
// const result=str.trim();
// console.log(result);
// console.log(result.length);

//2.split () method split the array & reverse() method reverse the array and join method convert the array into string 
// let Fruits="Apple ,Banana, Guava";//considered as one String because it is inside only one brackets
// console.log(Fruits); //Printed as String 
// const result=Fruits.split(","); //String converted into Array String
// console.log(result);
// const result1=Fruits.split(",").reverse();//Array String reverse
// console.log(result1);
// const result2 =Fruits.split(",").reverse().join();//Array String converted into as simple String
// console.log(result2);

// 1.-------------------> Question - write a javascript function that prints the letters  "a" through 
// "z in the console. you should use a loop to iterate through the letters and print each one on a new line"

// let letter="a";
// while(letter.charCodeAt()<=122){

//     console.log(letter);
//     letter = String.fromCharCode(letter.charCodeAt() + 1);
// }

// const printAlphabet = () => {
//   for (let code = 97; code <= 122; code++) {
//     console.log(String.fromCharCode(code));
//   }
// };

// printAlphabet();

//2.Question -write a function to count the number of vowels in a string .
// const countVowels =((str)=> {
//     // Define vowels
//     const vowels = "aeiouAEIOU";
//     let count = 0;

//     // Loop through each character in the string
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }
// )
// // Example usage:
// console.log(countVowels("Hello"));     // Output: 2
// console.log(countVowels("Programming")); // Output: 3
// console.log(countVowels("Sky"));        // Output: 0

//3.Question - write a function to check if all the vowels  presents in a string or not?
// const present = (str) => {
//     const vowels = "aeiou";
//     str = str.toLowerCase();

//     for (let v of vowels) {
//         if (!str.includes(v)) {
//             return "All vowels are not present";
//         }
//     }
//     return "All vowels are present";
// };

// console.log(present("hello world"));          // All vowels are not present
// console.log(present("education is powerful")); // All vowels are present



// 4.Question -write a program using function for pangram present in a string or not
// PANGRAM STATES :-Containing All letters of alphabets[(26) letters must present in a string]
const letter=(str)=>{
    str=str.toUpperCase();//convert string into lowercase because we are checking for small letters
    
    for(let i=65;i<=90;i++){
        
        if(!str.includes(String.fromCharCode(i))){
        return "Pangram is  not Present ";
    }
}
    return "Pangram is  present";

};
console.log(letter("My name is Shivam Maurya doing btech from computer science branch"));



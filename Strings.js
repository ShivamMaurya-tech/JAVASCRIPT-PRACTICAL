//------------------> Strings Properties
// 1.length properties
// 2.Escape Properties(using backslash before double and single backtick)
// let text='Hello My name is \"Shivam Maurya\" I am a \'fullstack\' developer';
// console.log(text);

// 2. indexOf Method
// let names="Shivam Maurya";
// const result=names.indexOf("Shivm");//output-first element value index(5)
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

// let description="Hello My name is Shivam Maurya";
// const myarr=description.lastIndexOf("My",2);
// const myArr=description.indexOf("My",2);
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
// // console.log(...result);
//  //    or (...)-->spread opertator
//  for(var items of result)
// //  {console.log(items);}
// //  console.log(items.index);
// {console.log(items[0]);}


//8.includes() method returns boolean value and every character must be present
// let description="Hello My name is Shivam Maurya Shivam";
// const result=description.includes("Hello");
// console.log(result);

//9.startsWith() method returns first string index and endsWith() method returns last index of string

// let description="Hello My name is Shivam Maurya Shivam";
// const result=description.startsWith("Hello");
// const lastresult=description.endsWith("Shivam");
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
//  const result=description.substring(-6);//------------>returns whole strings
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
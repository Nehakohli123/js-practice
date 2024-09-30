/* 
                       PRIMITIVE DATATYPE 
 1.number=> 2^53
 2.bigint=> used for large digit no. (mostly used in industry e.g.stock)
 3.string=> sequence of one or more characters that may consist of letters, numbers, or symbols.(written under double quotes"")
 4.boolean=> gives output in true/false
 5.null=> standalone value
 6.undefined=> variable was initialised but the value of variable is not declared.
 7.symbol=> unique

 */


 /*          
                      NON-PRIMITIVE DATATYPE
 1. object=> Objects are collections of key-value pairs, where keys are strings and values can be of any data type, including other objects, arrays, and functions. Objects are created using the {} syntax and can be modified dynamically.
 2.arrays=> collection same datatype or  specialized objects that store ordered lists of values. They can contain elements of different data types and are accessed using numerical indices.
 3.functions=> Functions are also objects in JavaScript, which can be assigned to variables, passed as arguments, or returned from other functions.
 4.dates=> represents date and time

 */
"use strict;"//it treats all the JS code as newer version
//alert("hello")//used as a pop up 
 let name="neha";//the variable 'name' is of string datatype
 let age =20;//int datatype
 let isloggedIn=false;//boolean datatype
 let state;//variable named state is initialised here but the value of variable state is not declared .we can assign value to it anytime .
 state=UP//assigning value
 console.log(typeof null);//gives output as object 
 console.log(typeof undefined);// typeof undefined is undefined
 
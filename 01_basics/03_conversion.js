let score =33
console.log(typeof score);//output as number 
let marks="95"
console.log(typeof marks);//output-string
 
let valueOfMarksInNum=Number(marks);//changing the datatype of marks from string to number
console.log(typeof marks);//output-string

let score1="39abc"
let valueOfScore1InNum=Number(score1);//will change the datatype
console.log(typeof valueOfScore1InNum)//will display that the string is converted in number but when we want to see the output that how 39abc was converted it will display NaN

console.log(valueOfScore1InNum)//Nan(not a number)//abc was not converted into ascii value in js while in typeconversion
//NaN is a special type 

let score2=null
let valueOfScore2InNum=Number(score2);
console.log(valueOfScore2InNum)//output-0// default value of null

let score3=undefined
let valueOfScore3InNum=Number(score3);
console.log(valueOfScore3InNum)//output-Nan

let score4=true
let valueOfScore4InNum=Number(score4)
console.log(valueOfScore4InNum)//output-1 //in case of false -0

let abc=1
let booleanabc=Boolean(abc)
console.log(booleanabc);//output-true //if abc=0 then false

let empty=""
let emptyType=Boolean(empty);
console.log(emptyType)//output-false //checks whether something is written inside the ""double quotes or not 
//if not then it will display false and if yes then true

let num=50
let typenum=String(num);
console.log(typenum);//output-50 
console.log(typeof typenum);//output-string
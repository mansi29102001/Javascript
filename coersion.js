//string coersion
let a = 3 + "3"; // when we do addition of number and string, the value of type number by default gets converted to string and concatenation occurs
console.log("value of a "+a+ " type of a "+ typeof a);

// when we do subtarction of number and string , the string gets converted to number by default
let b=2-"1";
console.log("value of b "+b+ " type of b "+ typeof b);

// boolean coersion
//all the values of any data type except 0,""", false, Nan, null, undefined will get converted to true by default
if(1){
    console.log("true");//this will get executed
}

if(0){
    console.log("false");
}
else{
    console.log("if block not executed as condition was false");
}

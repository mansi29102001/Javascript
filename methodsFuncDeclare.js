//Function declaration or function statement
function a(){
    console.log("a is called");
}

a();

//function expression - whenever we assign the function to a variable
let b = function() {
    console.log("b is called");
}
b();

//first class functions - functions ability to be assigned to a variable, it's ability to return a function or it's ability to pass a function as an argument 
//first class citizens are the ability of function to be assigned to variable
function xyz(){
    return function(){

    }
}
console.log(xyz()); // here an anonymous function is returned

function c(param){
    console.log(param); //function declaration of abc will be displayed
}

c(function abc(){

});

//from above eg, we are passing a function as an argument to function c

//named function expressions - functions with a function name assigned to a variable

let val = function z(){ // function z is a named function expression here

}

val();
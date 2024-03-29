// In JS there are 2 types of data types - Primitve data types and object data types(non-primitve)

//EG of primitive data type

//String
let a="hello";
console.log("String data type use "+ a);

//Number - it can contain both decimal as well as non decimal no
let b = 23;
let c = 2.568932
let d=-2;

console.log(typeof b);

//boolean - it has 2 values true and false
let val = true;
console.log(val === true);
console.log(typeof val);

//null - it is a value when the value does not exist
var z = null;

//undefined - it is a special placeholder which is assigned to a variable till a value is not assigned to it.
var temp;
console.log("Value of temp before initialization "+ temp);
var y=undefined;

// symbol data type - it is a new data type introduced in ES6 version. It uses a built in constructor to return a symbol value
// of primitve symbol type and it ensures that the value returned will be unique and will not collide with any KeyboardEvent.

let sym = Symbol("example");
console.log(typeof sym);

//object - has key value pair
const obj = {
    name: "mansi",
    age: 23,
    display: () => {
        console.log(obj.name + " is of age "+ obj.age);
    }
}
console.log(obj.display());
console.log(typeof obj);

//object - ordered data(array)
const arr=[1,34.6,"apple",true];
console.log(typeof arr);

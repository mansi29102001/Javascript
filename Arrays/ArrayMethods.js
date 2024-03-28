const arr = [1,2,3,4,5];

//usage of map
const arr2 = arr.map((el) => {
    return el*2;
})

console.log(arr2);

//usage of filter
const arr3 = arr.filter((el) => {
    if(el>3 && el<=5){
        return el;
    }
})
console.log(arr3);

//for each loop
arr.forEach(el => {
    if(el == 2){
        console.log("value is 2 in array");
    }
})

//find method
const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
];

let record = employees.find(el => {
    if(el.name.includes("John")){
        return el;
    }
})

console.log(record);

//findIndex method
let index = employees.findIndex(el => {
    return el.name.includes("John");
})

console.log(index);

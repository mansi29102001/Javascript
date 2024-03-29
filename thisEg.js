//this keyword example
function x(){
    console.log(this);//window object bcz x is invoked by default with global object
}
x();

const obj = {
    name: "Sam",
    display: function(){
        console.log(this.name);//Sam bcz display function is invoked with obj object. So, this refers to object obj
    }
}

obj.display();

const displayName = obj.display;
const obj2 ={
    name: "Ram",
    displayName
}

console.log(obj2.displayName());//Ram bcz displayName has function display and it is invoked using obj2 object
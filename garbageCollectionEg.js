//closures and garabage coolection - how it works

function a(){
    let x=0, y=1;
    return ()=>{
        console.log(x);
    }
}

let val = a();


// garbage collector cannot destroy the object x bcz the function a returns another function which uses variable x
//the returned function is assigned to variable val. So, the val can be called anywhere throughout the program.
//Hence, variable x is required to keep bcz it is forming a closure with function returned.

// Many new JS engine performs smart garbage collection mechanism. In which it will destroy the variable whoch is not used from closure environments
//From above eg, we can observe that x is used inside the returned function, but y is never used. Hence JS engine will destroy y but will keep x as it is.



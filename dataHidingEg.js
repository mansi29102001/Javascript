// closures one advatange is that it allows us to do data hiding. 

//lets take eg of normal function
var count=0;
function increase(){
    count++;
}

//From the above eg, we can observe that anyone can access the count variable and can update the value. We can avoid it by using closures

//Let's see above eg using closures

function increment(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}

let val = increment();
val();

//So, from the above eg, we are wrapping count variable inside another function and the function which is returned by increment forms closure. So now count variable cannot be accessed from outside.
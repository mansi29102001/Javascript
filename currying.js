//currying is a technique where we have a function which accepts n arguments, we will break that function in n different functions

//eg without currying
function calculateVol(length, breath, height){
    return length*breath*height;
}

console.log(calculateVol(2,4,5));

//eg with currying
function calculate(len){
    return function(breath){
        return function(height){
            return len*height*breath;
        }
    }
}

console.log(calculate(2)(4)(5));
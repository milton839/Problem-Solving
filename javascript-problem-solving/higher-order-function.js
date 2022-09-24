// 1. Function can be passed as an argument
// 2. Function can be return as an another Function

// 1. Function can be passed as an argument
function generateTwoRandomNumber(max, cb) {
    const random1 = Math.floor(Math.random() * max);
    const random2 = Math.floor(Math.random() * max);
    const result = cb(random1, random2);
    console.log(random1, random2);
    return result;
}

generateTwoRandomNumber(100, (random1, random2) => {
    console.log(random1, random2);
})
generateTwoRandomNumber(100, (random1, random2) => {
    console.log(random1 + random2);
})
generateTwoRandomNumber(100, (random1, random2) => {
    console.log(random1 - random2);
})

// 2. Function can be return as an another Function
function power(p){
    return function(n){
        let result = 1;
        for(let i = 1; i <= p; i++){
            result = result * n
        }
        return result;
    }
}

const sqr = power(3);
console.log(sqr);
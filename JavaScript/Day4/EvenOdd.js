const prompt = require("readline-sync");

function EvenOdd(a){
    num = Number(a);

    if (num % 2 ==0){
        return `The number ${num} is even.`;
    }else{
        return `The number ${num} is odd.`;
    }
}

let a = prompt.question("Enter a number: ");
res = EvenOdd(a);
console.log(res);


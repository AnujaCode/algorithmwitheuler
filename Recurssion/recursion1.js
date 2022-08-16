// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.
let sum = 0;

function sumNums(num){
    sum = sum +num;
    if (num>0){
        sumNums(num-1); 
    }
    return sum;
}

console.log(sumNums(3));
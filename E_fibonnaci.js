//Even Fibonacci numbers

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89


let fibArr = [1, 2];
sum = 0;

for (let i = 1; fibArr[i] < 4000000 - fibArr[i - 1]; i++) {
  fibArr.push(fibArr[i] + fibArr[i - 1]);
}

for (let j = 0; fibArr[j] < 4000000; j++) {
    if (fibArr[j] % 2 == 0) {
      sum += fibArr[j];
  }
}

console.log(fibArr)
console.log(sum)
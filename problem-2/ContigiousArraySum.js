const n = 6, k = 3;
const n1 = 4, k1 = 4;
const arr = [4, 8, 15, 16, 23, 42];
const arr1 = [1,3,3,7];
const contigiousArraySum = (arr, n, k) => {
  let sum = 0;
  let squere = [];
  for(let i = 1; i < n; i += 1) {
    const squereSubstract = (arr[i] * arr[i]) - (arr[i - 1] * arr[i - 1]);
    squere.push(squereSubstract);
    sum += squere[i - 1];
  };

  squere = squere.sort((a, b) => a - b);

  for(let i = 0; i < k - 1; i += 1) {
    sum -= squere[n - 2 - i];
  }

  return sum;
}

console.log('result1 =>', contigiousArraySum(arr, n, k));
console.log('result2 =>', contigiousArraySum(arr1, n1, k1));
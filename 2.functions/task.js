function getArrayParams(...arr) {

  if (arr.length === 0)

  return { min: min, max: max, avg: avg };


let min = arr[0];
let max = arr[0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (element > max) {
    max = element;
  }

  if (element < min) {
    min = element;
  }

  sum += element;
}

const avg = sum / arr.length;

const roundedAvg = Number(avg.toFixed(2));

const getArrayParams1 = [-99, 99, 10];
const getArrayParams2 = [1, 2, 3, -100, 10];
const getArrayParams3 = [5];

console.log(getArrayParams1);
console.log(getArrayParams2);
console.log(getArrayParams3);

return {
  min: min,
  max: max,
  avg: roundedAvg
};
}





function summElementsWorker(...arr) {

 if (arr.length === 0) return 0;
    return arr.reduce((sum, current) => sum + current, 0);
 
}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;

}

function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ===0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) return 0;
  return sumEvenElement / countEvenElement;
}

const test1 = [10, 10, 11, 20, 10];
const test2 = [94, 51, 57, 41, 47, 66, 58, 10, 38, 17];
const test3 = [15, 97, 85, 64, 67, 10, 69, 40, 15, 35];
const test4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(summElementsWorker(...test1));
console.log(differenceMaxMinWorker(...test1));
console.log(differenceEvenOddWorker(...test2));
console.log(differenceEvenOddWorker(...test3));
console.log(averageEvenElementsWorker(...test3));
console.log(averageEvenElementsWorker(...test4));


function makeWork (arrOfArr, func) {

}

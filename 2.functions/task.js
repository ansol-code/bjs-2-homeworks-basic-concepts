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

}
function makeWork (arrOfArr, func) {

}

// function getArrayParams(...arr) {

//   return { min: min, max: max, avg: avg };
// }

const arr = [];
const getArrayParams = function (...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    const currentArrPosition = arr[i];
    if (currentArrPosition > max) max = currentArrPosition;
    if (currentArrPosition < min) min = currentArrPosition;
    sum += arr[i];
    avg = Number((sum / arr.length).toFixed(2));
  }

  const result = {
    min: min,
    max: max,
    avg: avg,
  };
  return result;
};

console.log(getArrayParams(-99, 99, 10));

function summElementsWorker(...arr) {}

function differenceMaxMinWorker(...arr) {}

function differenceEvenOddWorker(...arr) {}

function averageEvenElementsWorker(...arr) {}

function makeWork(arrOfArr, func) {}

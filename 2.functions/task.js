// function getArrayParams(...arr) {

//   return { min: min, max: max, avg: avg };
// }

const getArrayParams = function (...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  const result = {
    min: min,
    max: max,
    avg: avg,
  };
  return result;
};

console.log(getArrayParams(-99, 99, 10));

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

function differenceMaxMinWorker(...arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } else {
      continue;
    }
  }
  return max - min;
}
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

function differenceEvenOddWorker(...arr) {
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

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } else {
      continue;
    }
  }
  return sumEvenElement / countEvenElement;
}

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

function makeWork(arrOfArr, func) {}

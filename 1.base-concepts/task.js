"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [-b + Math.sqrt(d), -b - Math.sqrt(d)];
  }
  return arr;
}
console.log(solveEquation(1, 10, 3));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  amount = amount - contribution;
  let sum = amount * (percent + percent / ((1 + percent) ** countMonths - 1));
  return Number(sum * countMonths).toFixed(2);
}
console.log(calculateTotalMortgage(10, 1000, 50000, 12));

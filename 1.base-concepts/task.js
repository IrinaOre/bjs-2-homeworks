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
console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {}

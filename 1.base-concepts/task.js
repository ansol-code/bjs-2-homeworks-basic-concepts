"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    const x1 = -b / (2 * a);
    arr.push(x1);
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push (x1, x2)
  }

  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let monthlyPercent = (percent / 100) / 12;

  let creditBody = amount - contribution;

  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) -1)))

  let totalAmount = monthlyPayment * countMonths;

  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
  
}


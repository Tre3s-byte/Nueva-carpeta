function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let billSum = bill.reduce((acc, curValue) => acc + curValue, 0) / 2;
  let toBeRefund = b - billSum;

  return console.log(billSum === b ? "Bon Appetit" : toBeRefund);
}

const sum = (a, b) => a + b;
const divideBy = (num, divisor) => num / divisor;
function bonApetitFunctional(bill, k, b) {
  const remainingBill = bill.filter((_, index) => index !== k);
  const billSum = divideBy(remainingBill.reduce(sum, 0), 2);
  const toBeRefund = b - billSum;
}

bonAppetit([3, 10, 2, 9], 1, 7);
bonAppetit([3, 10, 2, 9], 1, 12);

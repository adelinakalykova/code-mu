function createRound(precision) {
  return function (num) {
    return num.toFixed(precision);
  };
}
const doubleprecision = createRound(2);
const tripleprecision = createRound(3);
console.log(doubleprecision(5.312));
console.log(tripleprecision(5.564567));

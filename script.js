//Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
function calcNumSq(num) {
  console.log(num ** 3);
}

calcNumSq(5);

//Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
function ChekingNumbers(num) {
  if (num > 0) {
    console.log("++++");
  } else if (num === 0) {
    console.log("This is 0");
  } else {
    console.log("---");
  }
}
ChekingNumbers(0);

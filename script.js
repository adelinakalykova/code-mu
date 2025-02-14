//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 8;

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Autumn");
} else {
  console.log("Error: Invalid month");
}

//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = "abcde";
// if ((str[0] = "a")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

//Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let num = 22345;
// let str = String(num);
// if ((str[0] == 1 || 2 || 3)) {
//   console.log("+");
// } else {
//   console.log("-");
// }

//Дано трехзначное число. Найдите сумму цифр этого числа.
// let numb = 123;
// let str = String(numb);
// let sum = +str[0] + +str[1] + +str[2];
// console.log(sum);

//Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let num = String(111112);
// let sum1 = +num[0] + +num[1] + +num[2];
// let sum2 = +num[3] + +num[4] + +num[5];
// if (sum1 == sum2) {
//   console.log("++++");
// } else {
//   console.log("----");
// }

//

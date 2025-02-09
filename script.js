//Дано число 12345. Найдите сумму цифр этого числа.
// let num = "12345";
// let str = String(num);
// alert(
//   Number(str[0]) +
//     Number(str[1]) +
//     Number(str[2]) +
//     Number(str[3]) +
//     Number(str[4])
// );

//Дано число 12345. Найдите произведение цифр этого числа.

// let num = "12345";
// let str = String(num);
// alert(
//   Number(str[0]) *
//     Number(str[1]) *
//     Number(str[2]) *
//     Number(str[3]) *
//     Number(str[4])
// );

//Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let num = 12345;
let str = num.toString();
let reversed =
  str[str.length - 1] +
  str[str.length - 2] +
  str[str.length - 3] +
  str[str.length - 4] +
  str[str.length - 5];
alert(reversed);

//Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода. Вот проблемный код:

// let age = 17;
// let adult;

// if (age >= 18) {
//   adult = true;
// } else {
//   adult = false;
// }

// console.log(adult);

//Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. После проверки кода оказалось, что если возраст равен или больше 18 лет, то в переменную adult записывается true, как и должно быть, однако, если возраст меньше 18, то переменная adult имеет значение undefined. Исправьте ошибку автора кода.

// Вот проблемный код:

// let age = 17;
// let adult;

// if (age >= 18) {
//   adult = true;
// } else {
//   adult = false;
// }

// console.log(adult);

//Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.

// Вот проблемный код:

// let age = 17;
// let res;

// if (age >= 18) {
//   if (age <= 23) {
//     res = "от 18 до 23";
//   } else {
//     res = "больше 23";
//   }
// } else {
//   res = "меньше 18";
// }

// console.log(res);

//Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода.

// Вот проблемный код:

let age = 19;
let res;

if (age >= 18) {
  if (age <= 23) {
    res = "от 18 до 23";
  } else {
    res = "больше 23";
  }
} else {
  res = "меньше 18";
}

console.log(res);

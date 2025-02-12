//  Перепишите следующий код через switch-case:

let lang = "ru";

// if (lang == 'ru') {
// 	console.log('рус');
// } else if (lang == 'en') {
// 	console.log('анг');
// } else if (lang == 'de') {
// 	console.log('нем');
// } else {
// 	console.log('язык не поддерживается');
// }

switch (lang) {
  case "ru":
    console.log("ru");
    break;
  case "en":
    console.log("en");
    break;
  case "de":
    console.log("de");
    break;
  default:
    console.log("not language");
}

// Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.
let age = confirm("Are you 18 years old?");
if (age) {
  alert("Welcome");
} else {
  alert("Not for you");
}

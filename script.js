//Рекурсия - это функция вызывающая саму себя
let potatoes = 10;
function peelPotatoes() {
  console.log(potatoes);
  potatoes--;

  if (potatoes >= 0) {
    peelPotatoes();
  }
}
peelPotatoes();

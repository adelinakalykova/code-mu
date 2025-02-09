// Дан объект:

let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
  obj[key] = obj[key] ** 2;  
}

console.log(obj);
// Возведите в квадрат каждый элемент этого объекта.

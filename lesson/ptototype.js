//Прототипне наслідування

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Манго";

// dog.hasOwnProperty("name"); // true
// dog.hasOwnProperty("legs"); // false
// /*
// dog = {
//   __proto__: animal,
//   name: 'Mango'
// }
// */

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false

// dog.isPrototypeOf(animal);
/* 

dog.isPrototypeOf(animal)
animal.__proto__ === dog   -> false



animal.isPrototypeOf(dog)
dog.__proto__ === animal   -> true

*/

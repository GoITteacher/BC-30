/* 
Об'єктно-орієнтоване програмування

  - Процедурне програмування
  - Об'єктно-орієнтоване програмування (ООП)

*/

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);

// const user1 = {
//   name: "User",
//   age: 10,
//   setName(name) {
//     this.name = name;
//   },
// };

// const user2 = {
//   name: "User",
//   age: 10,
//   setName(name) {
//     this.name = name;
//   },
// };

// employee.getWage();

////////////////////////////////////////////////

/* 
Сутності ООП
  - Клас
  - Екземпляр
  - Інтерфейс
// */

// class Car{
//   //speed
//   //model
//   price
//   //type
// }

// let car1 = new Car();
// let car2 = new Car();

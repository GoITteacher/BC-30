//Класи
/* 
  -Оголошення класу
  -Конструктор класу
  -Об'єкт параметрів
  -Методи класу
  -Приватні властивості (Інкапсуляція)
  -Геттери і сеттери
  -Статичні властивості
  -Статичні методи
  -Наслідування класів
  -Конструктор дочірнього класу
  -Методи дочірнього класу

*/

/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.
*/

//Оголошення класу

// class User {

// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

//Конструктор класу

/* class User {
  // Синтаксис оголошення методу класу
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }

  printName() {}
}

const mango = new User("Манго", "mango@mail.com");
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

mango.phone;

const poly = new User("Поли", "poly@mail.com");
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
 */
/* 
Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

/* class Car {
  constructor(speed, model, price, type) {
    (this.#model = model),
      (this.#speed = speed),
      (this.price = price),
      (this.#type = type);
  }

  #speed;
  #model;
  price;
  #type;

  getModel() {
    console.log(this.#model);
  }
}

let car1 = new Car(100, "CR-x", 2000, "sport");

car1.getModel(); */

class User {
  #age;
  name;
  #phone;
  email;
  gender;

  static CONST_STAT = {
    MALE: "male",
    FEMALE: "female",
    DEFAULT: "defualt",
  };

  constructor({ name, age, phone, email, gender }) {
    this.name = name;
    if (age > 0) this.#age = age;
    else this.#age = 0;
    this.#phone = phone;
    this.email = email;
    this.gender = gender;
  }

  get age() {
    return `Age - ${this.#age}`;
  }

  set age(newAge) {
    if (newAge > this.#age) this.#age = newAge;
  }

  printUser() {
    console.log("Name - ", this.name);
    console.log("Age - ", this.#age);
    console.log("phone - ", this.#phone);
    console.log("email - ", this.email);
    console.log(User.MAX_AGE);
  }
}

class Worker extends User {
  expiriens;
  skills;

  constructor(expiriens, skills, userObj) {
    super(userObj);
    this.expiriens = expiriens;
    this.skills = skills;
  }

  getexpiriens() {
    console.log("Exp->", this.expiriens);
  }
}

let userObj = {
  name: "123",
  age: 20,
  gender: User.CONST_STAT.MALE,
};

let user1 = new User(userObj);
let worker = new Worker(10, [], userObj);

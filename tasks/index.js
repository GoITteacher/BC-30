// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// function func() {
//   console.log(this);
// }

// user.func();

// =========================================
let obj1 = {
  func() {
    return function () {
      console.log(this);
    };
  },
};

const newFunc = obj1.func();
newFunc.call(obj1);
// =========================================
let obj2 = {
  func() {
    return () => {
      console.log(this);
    };
  },
};

const newFunc2 = obj2.func();
newFunc2.call(obj2);
// =========================================

/* function sayHi() {
  arguments.join = [].join;

  let argStr = arguments.join(":");

  console.log(arguments);
}

sayHi(1, 2, 3); */

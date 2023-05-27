const person = { name: "dodo", age: 12 };

console.log(person);

const enginer = {
  name: "Moody",
  greet: () => {
    console.log(enginer.name);
  },
};
enginer.greet();

const cham = {
  gender: {
    woman: "woman",
  },
  speak: () => {
    console.log("話す");
  },
  eat: () => {
    console.log("食う");
  },
};

const moody = {
  gender: {
    man: "man",
  },
  speak: () => {
    console.log("話す");
  },
  eat: () => {
    console.log("食う");
  },
};

// class 概念
class Human {
  constructor(gender, name, age) {
    this.gender = gender;
    this.name = name;
    this.age = age;
    console.log(`性別は${this.gender}`);
    console.log(`名前は${this.name}`);
    console.log(`年齢は${this.age}`);
  }
  eat() {
    console.log("食べる");
    console.log(this.name);
  }
}

const chamcham = new Human("woman", "hana", 14);
chamcham.age = 16;
console.log(chamcham);
const mahmoud = new Human("man", "moody", 14);
console.log(mahmoud);

class Car {
  constructor(color) {
    this.color = color;
  }
  info() {
    console.log(`${this.color}`);
  }
}

const bmw = new Car("black");

const greeting = function () {
  console.log("hello");
};

const greeting2 = () => {
  console.log("Hi");
};

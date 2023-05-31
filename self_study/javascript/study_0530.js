class User {
  constructor(name, age, gender, job) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.job = job;
    console.log(`名前は${this.name}です`);
    console.log(`年齢は${this.age}です`);
    console.log(`性別は${this.gender}です`);
    console.log(`仕事は${this.job}です`);
  }
  greet() {
    console.log(`こんにちは、私は${this.name}です。よろしくお願いします。`);
  }
  eat() {
    console.log(`好きな食べ物は竜眼です。毎週、業務スーパーに買っています。`);
  }
}
const kai = new User("Kai", 23, "man", "office staff");
console.log(kai);
kai.greet();

const hanah = new User("Hanah", 23, "woman", "sale staff");
hanah.age = 30;
console.log(hanah);

const Jemy = new User("Jemy", 26, "man", "office staff");
console.log(Jemy);
Jemy.greet();
Jemy.eat();

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("こんにちは");
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
const Lyly = new Animal("Lyly", 4);
Lyly.info();

const Mimi = new Animal("Mimi", 2);
Mimi.info();

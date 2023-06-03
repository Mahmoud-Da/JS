class Mormut {
  constructor(name, old) {
    this.name = name;
    this.old = old;
  }

  greet() {
    console.log(`my name is ${this.name}, I'm ${this.old} years`);
  }
  info() {
    console.log("レタスだけ食べる");
  }
}

const taiwanMormot = new Mormut("lili", "3");
taiwanMormot.greet();
taiwanMormot.info();

class Hamster extends Mormut {
  constructor(name, old, skill) {
    super(name, old);
    this.skill = skill;
  }
  info() {
    console.log("レタスと肉を食べる");
    console.log(`${this.old}から${this.skill}学ぶ `);
  }
}
const cham = new Hamster("chamcham", 32, "プログラミング");
cham.greet();
cham.info();

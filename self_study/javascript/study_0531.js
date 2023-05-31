class Dogs {
  constructor(name, age, gender, breed, food, play) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.food = food;
    this.play = play;
    console.log(`名前は${this.name}です`);
    console.log(`年齢は${this.age}です`);
    console.log(`性別は${this.gender}です`);
    console.log(`種族は${this.breed}です`);
    console.log(`食べ物は${this.food}です`);
    console.log(`趣味は${this.play}です`);
  }
  greet() {
    console.log(`この犬は${this.name}です。${this.breed}です。`);
  }
  eat() {
    console.log(`この${this.breed}は${this.food}が大好きです。`);
    console.log(`さらに、${this.play}と遊ぶのが好きです。`);
  }
}
const milu = new Dogs("MILU", 2, "female", "ビーグル", "肉", "ボール");
milu.greet();
milu.eat();
console.log(milu);

const sun = new Dogs("SUN", 1, "male", "ボーダー", "エビ", "猫");
sun.greet();
sun.eat();
console.log(sun);

class Menbers {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("初めまして");
  }

  end() {
    console.log("これからもよろしくお願いします");
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    this.end();
  }
}
const jake = new Menbers("Jake", 36);
jake.info();

const mike = new Menbers("Mike", 24);
mike.info();

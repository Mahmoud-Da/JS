//クラス：設計図
//クラスの中になにも書かなければ、空のオブジェクト
//constructor コンストラクタはインスタンスを生成するときに実行したい処理や設定を追加するための機能です。
class Members {
  constructor(name, age) {
    //コンストラクタの引数
    this.name = name; //name:プロパティ
    this.age = age;
    console.log("Hello"); //インスタンスが生成された直後に実行されます
  }
}
const member = new Members("Mike", 15); //Menbersインスタンスを作る。(name と age が有ったら、引数になる)
console.log(`I'm ${member.name}`);
console.log(`This year ${member.age} old`);

//メソッドとはそのインスタンスの「動作」のようなものです
//「名前」や「年齢」などの情報はプロパティで追加したのに対して、メソッドは「挨拶をする」「値を計算する」などの処理のまとまりを表します。
class Animal {
  constructor(name, age) {
    //instance
    this.name = name;
    this.age = age;
  }
  greet() {
    //menthod
    console.log("こんにちは");
  }
  info() {
    this.greet(); //メソッド内でメソッドを使う
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
const animal = new Animal("レオ", 3);
console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);
animal.greet();
animal.info(); //一回で全部内容が出力できる

//extends 継承はすでにあるクラスをもとに、新しくクラスを作成する方法のことです。
class Dog extends Animal {
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }
  getHumanAge() {
    return this.age * 7;
  }
}
const dog = new Dog("レオ", 4);
dog.info();
//info メソッドが変わったから、info メソッドはオーバーライドになる
//独自のメソッド humanAge
//const humanAge = dog.getHumanAge();
//console.log(`人間年齢で${humanAge}歳です`);
//オーバーライドは子クラスのメソッドが親クラスのメソッドを上書きしていること
//親クラスと同じ名前のメソッドを子クラスに定義すると、子クラスのメソッドが優先して使用されます。

//コンストラクタのオーバーライド
class Cat extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`猫種は${this.breed}です`);
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// 3つ目の引数に「"チワワ"」を渡してください
const cat = new Cat("レオ", 4, "チワワ");
cat.info();

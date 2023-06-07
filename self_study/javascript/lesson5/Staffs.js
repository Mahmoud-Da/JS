class Staffs {
  constructor(name, age, technique, cocktail, play, time) {
    this.name = name;
    this.age = age;
    this.technique = technique;
    this.cocktail = cocktail;
    this.play = play;
    this.time = time;
    console.log(`名前は${this.name}です`);
    console.log(`年齢は${this.age}です`);
    console.log(`専門は${this.technique}です`);
    console.log(`飲み物は${this.cocktail}です`);
    console.log(`趣味は${this.play}です`);
    console.log(`回数は${this.time}です`);
  }
  greet() {
    console.log("初めまして");
    console.log(`
          私は${this.name}です。
          今年${this.age}、${this.technique}専門で
          得意飲み物は${this.cocktail}です。`);
    console.log("自分の仕事が大好きです。");
  }
  sports() {
    console.log(`さらに、${this.play}をする。`);
    console.log(`毎月、最低に${this.time}回を遊びに行きます。`);
  }
}

const ken = new Staffs(
  "Ken",
  25,
  "バーテン",
  "カクテル ネグローニ",
  "テニス",
  "3"
);
ken.greet();
ken.sports();
console.log(ken);

class member extends Staffs {
  getBossAge() {
    return this.age + 9;
  }
  sports() {
    console.log(`さらに、${this.play}をする。`);
    console.log(`毎月、最低に${this.time}回を遊びに行きます。`);
    console.log(`毎週の日曜日に本を2時間読んでいます。`);
  }
}
const mike = new member("Mike", 24, "チーフ", "オムライス", "ゲーム", "5");
mike.greet();
mike.sports();
console.log(mike);

const bossAge = mike.getBossAge();
console.log(bossAge);

class parttime extends Staffs {
  constructor(name, age, technique, cocktail, play, time, gender) {
    super(name, age, technique, cocktail, play, time);
    this.gender = gender;
  }
}
const bin = new parttime(
  "Bin",
  "18",
  "フライ場",
  "唐揚げ",
  "ゲーム",
  "6",
  "男"
);
bin.greet();
bin.sports();

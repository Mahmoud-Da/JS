const names = "ひつじ仙人";

const introduce = () => {
  const names = "にんじゃわんこ";
  console.log(names);
};

introduce();
introduce(names);

const toMinutes = (hour, minute) => {
  return hour * 60 + minute;
};
const result = toMinutes(3, 20);
console.log(`${result}分`);

const animal = {
  name: "レオ",
  age: 3,
  greet: () => {
    console.log("こんにちは");
  },
};
console.log(`${animal.name}`);
animal.greet();

class Animal {}

// method function 関数
// 引数　argument
const introduceEnglish1 = function (name, age) {
  this.name = name;
  this.age = age;
  console.log(`my name is ${name}, I'm ${age} old`);
};

introduceEnglish1("cham", 32);

// アロー関数
const introduceEnglish2 = (name, age) => {
  this.name = name;
  this.age = age;
  console.log(`my name is ${name}, I'm ${age} old`);
};

introduceEnglish2("cham", 32);

// 戻り値 return
const add = (a, b) => {
  return a + b;
};

add(3, 5);

const trible = (a) => {
  return a * a * a;
};

trible(2);

// 偶数
const checkEven = (a) => {
  return a % 2 === 0;
};

checkEven(6);

// 奇数
const checkOdd = (a) => {
  return a % 2 !== 0;
};

checkOdd(6);

// scope スコープ
// global 変数 (person)
// private 変数 (animal)
const person = "Mike";

const sayName = () => {
  let animal = "lili";
  console.log(person);
};

sayName();
console.log(animal); // だめ

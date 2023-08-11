// lesson1
// 変数：let ... ="...";

// 定義：const ... ="...";

// 計算式
console.log(6 + 3);
console.log("6+3");
console.log(4 - 1);
console.log(1 * 8);
console.log(8 / 2);
//  割り算の余り分が表示される。
console.log(9 % 2);

//条件分岐
// if 文
const number2 = 17;
if (number2 <= 18) {
  console.log("number は18より小さいです");
}

if (age >= 20) {
  console.log("Ken さんはコンビニでタバコを買えます。");
} else {
  console.log("Ken さんは未成年です。");
}

if (age >= 20) {
  console.log("Ken さんはコンビニでタバコが買えます。");
} else if (age <= 18) {
  console.log("Ken さんは未成年です。");
} else {
  console.log("Ken さんはコンビニでタバコが買えません。");
}

// lesson2
let number = 1;
while (number <= 100) {
  console.log(number);
  number += 1;
}

//for文：　（white文が同じ）while文に比べてシンプルに書くことができるのが特徴です。
for (let number1 = 1; number1 <= 100; number1++) {
  console.log(number);
  // if文を用いて、numberが3の倍数の時に「3の倍数です」
  if (number % 3 === 0) {
    console.log("3の倍数です");
  } else {
    console.log(number);
  }
}

//配列を定数に代入する
const fruits = ["apple", "banana", "orange"]; //インデックス番号 ["apple", "banana", "orange"] => [0, 1, 2]
console.log(fruits); //全部が出力される。
console.log(fruits[0]); //apple しか出力されない。
fruits[0] = "grape"; //配列の要素を更新する
const value = [21, 43, 12];
console.log(value); //全部が出力される
//配列とfor文
for (let i = 0; i < 3; i++) {
  console.log(fruits[i]);
}
for (let i = 1; i < 3; i++) {
  console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = 1; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//配列と繰り返し処理
const characters = [
  { name1: "John", age: 18 },
  { name1: "Katy", age: 20 },
  { name1: "Hannal", age: 32 },
];
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  const character = characters[i];
  console.log(`Hi, I'm${character.name1}, ${character.age}years old`);
  if (character.age === undefined) {
    console.log("年齢は秘密です");
  } else {
    console.log(`${character.age}歳です`);
  }
}

lesson3;
// 関数の定義
const introduce = function () {
  console.log("Hello");
  console.log("I'm Mike, nice to meet you");
};

// 関数の呼び出し
introduce();

// アロー関数：function()略書き方
const Hello = () => {
  console.log("Hi");
  console.log("I'm Mike, nice to meet you");
};

//引数とは関数に与える追加情報のようなもの
const information = (name, age) => {
  console.log = "Hello";
  console.log = `I'm ${name}!`;
  console.log = `I'm ${age} year old.`;
};

const add = (number1, number2) => {
  console.log(number1 + number2);
};

//引数の呼び出し
information("Mike, 20");

add(5, 7);

//戻り値：関数が戻り値を返す
const half = (number) => {
  return number / 2;
};
const result = half(130);
console.log(`130の半分は${result}です`);

const check = (number) => {
  return number % 3 === 0;
};
if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}

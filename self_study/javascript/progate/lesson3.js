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

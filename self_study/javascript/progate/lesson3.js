//関数とは、「いくつかの処理をまとめたもの」です。
const introduce = function () {
  console.log("Hello");
  console.log("I'm Sam");
};
introduce(); //関数の呼び出し
const introduce1 = () => {
  console.log("Hello");
  console.log("I'm Sam");
};
introduce1(); //()=>:アロー関数

//引数とは関数に与える追加情報のようなものです。
//name 引数名
//引数によって処理が変わる(console.log(`I'm ${name}`);)
const introduce2 = (name) => {
  console.log("Hello");
  console.log(`I'm ${name}`);
};
introduce2("name"); //引数を受け取る関数の呼び出し
//複数の引数を受け取る関数
const greet = (gender, age) => {
  console.log(`I'm a ${gender}, this year ${age} years old`);
};
greet("man", 36);

//戻り値とは「関数が戻り値を返す」/ return
const add = (a, b) => {
  return a + b; //これは最後、あと何もいらない。
};
const adds = add(3, 7);
console.log(`sum is ${adds}`);
//戻り値の活用
const check = (number) => {
  return number % 2 === 0;
};
if (check(123)) {
  console.log("2の倍数です");
} else {
  console.log("2の倍数ではありません");
}

//スコープは定数や変数の使用できる範囲
//関数の外側で定義した定数や変数は、プログラムのどこからでも使えます。
//関数の{}内で定義した定数や変数は、その関数の内側でのみ使用できます。
//関数の内側で定義された定数を関数の外側で使用すると参照エラーになる.
//関数の内側と外側で同じ名前の変数を定義した場合は、それらは別々のものとして扱われます。
//関数だけでなく、ifやswitchなどの条件文、forやwhileなどの繰り返し文などの、中括弧「{}」を使う構文でもスコープを作ります。

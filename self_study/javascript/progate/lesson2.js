//while文: 条件式がtrueの間、{ }内の処理を繰り返す.
//numberの値を更新するコードを書き忘れており、これではいつまでも条件がtrueのままで、
//永遠に繰り返し処理が続いてしまいます。(無限ループ)
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

//配列: 配列は、[値1, 値2, 値3] のように作ります。配列に入っているそれぞれの値のことを要素と呼びます。
//文字列をまとめた配列 ["apple", "banana", "orange"]
//数値をまとめた配列 [21, 43, 12]
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

//length: lengthを用いれば,配列の要素数が変わっても問題なく繰り返すことができるので便利です。
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = 1; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//オブジェクトとは配列と同じく複数のデータをまとめて管理するのに用いられます。
//配列は複数の値を並べて管理するのに対して、オブジェクトはそれぞれの値にプロパティと呼ばれる名前をつけて管理します。
const item = { name: "Maki", price: 500 };
console.log(item);
console.log(item.name); //オブジェクトの値を取り出す.
console.log(item.price); //オブジェクトの値を取り出す.
//オブジェクトを要素に持つ配列
const item1 = [
  { name: "Maki", price: 500 },
  { name: "Navy", price: 200 },
];
console.log(item1[0]); //配列の中のオブジェクトを取り出す.
console.log(item1[1]);
console.log(item1[0].name); //配列の中のオブジェクトの値を取り出す.
console.log(item1[0].price);
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
//配列の存在しないインデックス番号の要素や、オブジェクトの存在しないプロパティの要素を取得しようとすると、undefined と出力されます。
//undefined は特別な値で、値が定義されていないことを意味します。
//undefinedを避ける　＝＞　undefinedとif文

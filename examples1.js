// for文を完成させてください
// 繰り返し処理のまとめ
// 繰り返し処理の応用
// 最後に、for文を用いて繰り返し処理の応用問題に挑戦してみましょう。
// 右の図のように、1から100の数字を出力してください。ただし、3の倍数の時は「3の倍数です」と出力してください。
for (x = 1; x <= 100; x++) {
  if (x % 3 === 0) {
    console.log(`${x} 3倍数です`);
  } else if (x % 5 === 0) {
    console.log(`${x} 5倍数です`);
  } else {
    console.log(x);
  }
}

const fruits = ["orange", "apple", "potato", "strawberry", "りんご", "バナナ"];
console.log(fruits[0]);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let n = 0; n < 101; n++) {
  console.log(n);
}

const characters = [
  { name: "にんじゃわんこ", age: 14 },
  { name: "ひつじ仙人", age: 100 },
  { name: "ベイビーわんこ", age: 5 },
];
for (let i = 0; i < characters.length; i++) {
  console.log(`${characters[i].name} ${characters[i].age}`);
}

const students = [
  { name: "山田", age: "12" },
  { name: "作田", age: "13" },
  { name: "村畑", age: "14" },
  { name: "前田", age: "15" },
  { name: "柿本", age: "16" },
  { name: "森本", age: "17" },
];

for (let i = 0; i < students.length; i++) {
  console.log(`学生名: ${students[i].name}, 年齢: ${students[i].age}`);
}

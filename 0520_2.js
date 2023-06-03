console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// 5n コスト
// 1000n コスト高いすぎ　(BigO)
let number = 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

// 1000表示したいなら
// 条件は正しい(true)である限り、実動する（繰り返し）
// while (条件){
//  処理
// }
let num = 1;
while (num < 1000) {
  console.log(num); // 1   2 3
  num += 1; // 2 3 4
}

// 実行しないで注意 (無限ロープ)
while (num < 1000) {
  console.log(num); // 1
}

// for(変数の定義;条件分岐;変数の更新)
for (let count = 1; count <= 1000; count++) {
  console.log(count);
}

// 例題
// 1から100の数字を出力してください。ただし、3の倍数の時は「3の倍数です」と出力してください。　5の倍数の時は「5の倍数です
for (let count = 1; count <= 100; count++) {
  if (count % 3 == 0) {
    console.log(`${count} 3の倍数`);
  } else if (count % 5 == 0) {
    console.log(`${count} 5の倍数`);
  } else {
    console.log(count);
  }
}

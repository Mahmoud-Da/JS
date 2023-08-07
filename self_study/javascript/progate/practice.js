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

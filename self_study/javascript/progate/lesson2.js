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

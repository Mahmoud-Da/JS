//「console.log("○○");」というコードを書くと、()の中の○○という文字がコンソールに出力されます。
//文字烈なら、必ずシングルクォーテーション(``), ダブルクォーテーション("")
//文末にセミコロン必ず付けなければならない。
console.log("Hello Lili");
console.log(`Hello Key`);

//コメントアウト

//計算(数値)
//アスタリスク＊
//スラッシュ／
console.log(3);
console.log(5 + 2);
console.log("5+2");
console.log(3 - 2);
console.log(3 * 7);
console.log(6 / 3);
//割り算ですが、余り分しか出力しません。
console.log(6 % 3);

//文字列の連結
console.log("a" + "b" + "c");
console.log("Kay" + "Lyly");
console.log("3" + "5");

//変数は、データ（値）の入れ物（箱）です。
//箱についている名前が「変数名」であり、箱の中に実際の値（文字列や数値など）が入っています。
//プログラミングの「=」は「等しい」という意味ではなく、「右辺を左辺に代入する」という意味です。
let name = "John";
console.log(name);
let number = 5;
console.log(number);
//間違えやすい=>文字列　string
console.log("name");
//役割：代入されている値が、文字列の場合は他の文字列と連結することができ、数値の場合は計算に用いることができます。
let name1 = "John";
console.log(name1 + "Lili");
let number1 = 10;
console.log(number + 5);
//一度値を代入した変数に、その後再び値を代入すると、後に代入した値で変数の中身が上書きされます。
let staff = "Mai";
staff = "Niko";
let one = 2;
console.log(one);
one = one + 3;
console.log(one);
//省略した書き方
one += 3;
one -= 3;
one *= 3;
one /= 3;
one %= 3;

//定義
//定数は値を更新することはできません。
const name2 = "Mike";
//テンプレートリテラルは定数の連結方法です。
//バッククォーテーションが必要です。
name2 = "チャム";
console.log(`こんにちは、${name2}さん`);
const staff1 = "Ken";
const age = 36;
console.log(`初めまして、私は${staff1} ${age}歳です。`);

//条件分岐（ある条件が成り立つときだけある処理を行う）.tabキーでインデント
//if文　条件式がtrueであれば処理が実行され、falseであれば実行されないということがわかります。
//a<b, a<=b, a>b, a>=b, a==b, a===b 等価演算子, a!=b, a!==b 厳密等価演算子
const number2 = 17;
if (number2 <= 18) {
  console.log("number は18より小さいです");
}
if (age >= 20) {
  console.log("Ken さんはコンビニでタバコを買えます。");
}
if (number2 !== 17) {
  console.log("値は17じゃないです。");
}

//条件が成り立たない場合の処理
//else もし〇〇なら●●を行う、そうでなければ■■を行
if (age >= 20) {
  console.log("Ken さんはコンビニでタバコを買えます。");
} else {
  console.log("Ken さんは未成年です。");
}

//条件を追加する
//else if
//かつ　&&, または　||
if (age >= 20) {
  console.log("Ken さんはコンビニでタバコが買えます。");
} else if (age <= 18) {
  console.log("Ken さんは未成年です。");
} else {
  console.log("Ken さんはコンビニでタバコが買えません。");
}
if (age <= 18 && age >= 20) {
  console.log("Ken さんはコンビニでタバコが買えません。");
} else {
  console.log("Ken さんはコンビニでタバコが買えます。");
}

//switch文
const color = "Red";
switch (color) {
  case "Red":
    console("Stop");
    break;
  case "Yellow":
    console.log("Attention");
    break;
  default:
    console.log("Go");
    break;
}

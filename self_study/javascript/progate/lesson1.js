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

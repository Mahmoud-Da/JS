//ファイルの分割
//script: プログラムの実行部分
//Dogクラスの定義部分
//Animalクラスの定義部分
//それぞれのファイルを関連付ける必要がある
//クラスの定義の後で「export default クラス名」とすることで、そのクラスをエクスポート（出力）し、他のファイルへ渡すことができます。
//export default Animal;
//他のファイルで定義されているクラスを使用するにはインポート（読込）をする必要があります。
//使用するファイルの先頭で「import クラス名 from "./ファイル名"」と書くことでインポートすることができます。
//inport Animal from "./animal";
//値のエクスポート
//sample1.js => const text = "Hello";
//export default text;
//sample1.js => import text from "./sample1";
//console.log(text);
//dogData: Dogインスタンスを定義している部分
//=>プログラムの実行部分:  import dog from "./dogData";
//dog.info();
//=>Dogインスタンスを定義している部分: import Dog from "./dog";
//const dog = new Dog("le", 4, "abc");
//export default dog;
//export defaultはデフォルトエクスポートと呼ばれ、そのファイルがインポートされると自動的に「export default 値」の値がインポートされます。
//そのためエクスポート時の値の名前と、インポート時の値の名前に違いがあっても問題ありません
//デフォルトエクスポートは1ファイル1つの値のみ使えます。
//ファイルをインポートする際には、デフォルトエクスポートの値を自動でインポートするため、値が1つのみとなっています。
//複数の値をエクスポートしたい場合はエクスポート時と同様に、「import { 値の名前 } from "./ファイル名"」と{}で囲んで指定します。
//dogData: export {dog1};
//script: import {dog1} from "./dogData";
//相対パス: 記述されているファイルからみた位置関係を示しています。
//ドット1つの「./」は相対パスが書かれているファイルと同じディレクトリを意味します。
//dogData: dogData.js を指定

//もし　import {dog1} from "./data/dogData";
//「./data/」同じディレクトリ内のdataディレクトリに移動
//dogData: dogData.js を指定

//もし　import {dog1} from "../class/dogData";
//「../」一つ上の階層に移動
//「class/」classディレクトリに移動
//dogData: dogData.js を指定

//パッケージのimport
import chalk from "chalk";
console.log(chalk.yellow(`Hello`));
console.log(chalk.bgCyan(`Hello`));

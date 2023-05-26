const topic = "アップルの色の意味";
console.log(topic);
console.log("---------------------------");
const appleColor = "緑";
switch (appleColor) {
  case "黄":
    console.log("食べられます");
    break;
  case "赤い":
    console.log("食べられます");
    break;
  default:
    console.log("食べられません");
    break;
}

let old = 30;
if (old <= 10) {
  console.log("小学生です");
} else if (old > 10 && old <= 20) {
  console.log("未成年です");
} else {
  console.log("大人です");
}

console.log("ABC株式会社は3部署があります");
const group = ["開発", "製造", "商売"];
for (let i = 0; i < group.length; i++) {
  console.log(`${group[i]}部`);
}
const lead = ["新井さん", "鈴木さん", "加増さん"];
for (let i = 0; i < group.length; i++) {
  console.log(`${group[i]}と言えば、誰でも${lead[i]}部長がしっています。`);
}

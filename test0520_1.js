// 条件分岐 if and switch　書き方の違い
//信号アルゴリズム  Yellow Red Green
const color = "Green";

if (color === "Green") {
  console.log("進んでください");
} else if (color === "Yellow") {
  console.log("要注意");
} else if (color === "Red") {
  console.log("停止してください");
} else {
  console.log("ワイワイ");
}
switch (color) {
  case "Blue":
    console.log("進んでください");
    break;
  case "Yellow":
    console.log("要対応");
    break;
  case "Red":
    console.log("停止してください");
    break;
  default:
    console.log("ワイワイ");
    break;
}

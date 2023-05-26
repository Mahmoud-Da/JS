const number = 9;
const word = "10";
if (number === 10) {
  console.log("これは数字です");
} else {
  console.log("numberの値は不明です");
}
if (word === "10") {
  console.log("これは文字です");
} else {
  console.log("wordの値は不明です");
}

const hairSalon = {
  name: "SU SU",
  staff: ["John", "Alex", "Arai"],
  style: ["Bob", "Perm", "Dreadlocks"],
  color: ["Yellow", "Red", "Blue"],
};

console.log(hairSalon.name);
console.log(`おすすめスタッフ:${hairSalon.staff}`);
for (let i = 0; i < hairSalon.staff.length; i++) {
  console.log(`
    ${hairSalon.staff[i]}の得意スタイルは${hairSalon.style[i]}です
  `);
}
for (let i = 0; i < hairSalon.style.length; i++) {
  console.log(
    `ご希望スタイルは${hairSalon.style[i]}なら、おすすめカラーは${hairSalon.color[i]}です`
  );
}
console.log("キャンペーン中: ~*25歳以上、カットが無料*~");

const customersOld = 29;
if (customersOld >= 25) {
  console.log("カットが無料になります");
} else {
  console.log("スタイルと相談してください");
}

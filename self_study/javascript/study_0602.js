//時間を〇〇に換算する関数
const toMinutes = (hour, minute) => {
  return hour * 60 + minute;
};
const result = toMinutes(2, 45);
console.log(`${result}分`);

const toSeconds = (hour, minute, second) => {
  return hour * 60 * 60 + minute * 60 + second;
};
const result1 = toSeconds(2, 30, 25);
console.log(`結果は${result1}秒です。`);

//return の活用
const check = (time) => {
  return time % 60 === 0;
};
if (check(289)) {
  console.log("あとちょうど何数時間です。");
} else {
  console.log("あと何数時間ぐらいです。");
}

const check1 = (number) => {
  return number % 2 !== 0;
};
if (check1(36)) {
  console.log(`${check1}は奇数です。`);
} else {
  console.log(`${check1}は偶数です。`);
}

//複数の引数を受け取る関数
const introduce = (nickName, gender) => {
  console.log(`私は${nickName} です。3兄妹の${gender}`);
};
introduce("マイク", "長男");
introduce("ジェム", "長女");

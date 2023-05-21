const color = "赤";
switch (color) {
  case "赤":
    console.log("ストップ！");
    break;
  case "黄":
    console.log("要注意");
    break;
}

let number = 1;
while (number < 5) {
  console.log(number);
  number += 1;
}

for (let number = 1; number <= 5; number += 1) {
  console.log(number);
}

//for文とif文

for (let a = 1; a <= 10; a++) {
  if (a % 3 === 0) {
    console.log("3の倍数です");
  } else {
    console.log(a);
  }
}

const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
fruits[0] = "grape";
console.log(fruits[0]);
for (let i = 0; i < 3; i++) {
  console.log(fruits[i]);
}

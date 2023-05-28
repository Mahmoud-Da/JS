const greet = () => {
  console.log("Hello, I'm LyLy");
};
greet();

const greet1 = (name1) => {
  console.log(`Hey, I'm ${name1}`);
  console.log("And you");
};
greet1("John");

const add = (number1, number2) => {
  console.log(number1 + number2);
};
add(5, 7);

const half = (number) => {
  return number / 2;
};
const result = half(130);
console.log(`130の半分は${result}です`);

const check = (number) => {
  return number % 3 === 0;
};
if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}

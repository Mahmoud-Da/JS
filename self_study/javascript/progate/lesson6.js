const numbers = [1, 2, 3, 5, 7];
console.log(numbers);

//pushメソッド: 配列の最後に新しい要素を追加するメソッドです。
numbers.push(4);
console.log(numbers);

//forEachメソッド: 配列の中の要素を1つずつ取り出して、全ての要素に繰り返し同じ処理を行うメソッドです。
numbers.forEach((number) => {
  console.log(number);
});
//アロー関数
//コールバック関数

//findメソッド：条件式に合う1つ目の要素を配列の中から取り出すメソッドです。
const foundNumber = numbers.find((number) => {
  return number > 3;
});
console.log(foundNumber);

const characters = [
  { id: 1, name: "Ken" },
  { id: 2, name: "Kate" },
  { id: 3, name: "John" },
];
const foundCharacters = characters.find((character) => {
  return character.id === 1;
});
console.log(foundCharacters);

//filterメソッド:記述した条件に合う要素のみを取り出して新しい配列を作成するメソッドです。
const filteredNumbers = numbers.filter((number) => {
  return number > 3;
});
console.log(filteredNumbers);

const filteredCharacters = characters.filter((character) => {
  return character.id > 1;
});
console.log(filteredCharacters);

//mapメソッド:配列内のすべての要素に処理を行い、その戻り値から新しい配列を作成するメソッドです。
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers);

const names = [
  { fistName: "Kate", lastName: "Lay" },
  { fistName: "Brian", lastName: "Smith" },
];
const fullNames = names.map((name1) => {
  return name1.fistName + name1.lastName;
});
console.log(fullNames);

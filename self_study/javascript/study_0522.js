const item = { name: "手裏剣", price: 300 };
console.log(item);
console.log(item.name);

const items = [
  { name: "手裏剣", price: 300 },
  { name: "忍者刀", price: 1200 },
];
console.log(items[1]);
console.log(items[1].price);

const character = { name: "にんじゃわんこ", age: 14 };
console.log(character);
character.age = 20;
console.log(character);
console.log(character.name);

const characters = [
  { name: "にんじゃわんこ", age: 14 },
  { name: "ひつじ仙人", age: 100 },
  { name: "ベイビーわんこ", age: 5 },
];
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  console.log(`名前は${characters[i].name}です`);
  console.log(`${characters[i].age}歳です`);
}

const friends = [
  { name: "Lyly", age: 19 },
  { name: "Sara", age: 30 },
  { name: "Hanah", age: 28 },
];
for (let i = 0; i < friends.length; i++) {
  console.log("~~~~~~~~~~~~~~~");
  console.log(`She is${friends[i].name}です`);
  console.log(`${friends[i].age}歳です`);
}

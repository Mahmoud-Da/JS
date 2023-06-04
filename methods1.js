let numbers = [1, 2, 3, 4];

numbers.push(5);
numbers.push("lili");
// [ 1, 2, 3, 4, 5, 'lili' ]
// last element
numbers.pop();

// first element
numbers.shift();
// specific (position, number of elemnts)
numbers.splice(2, 2);
console.log(numbers);
for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

const arrays = ["a", "b", "c", "d"];
arrays.forEach((array) => {
  console.log(array);
});

// console.log(arrays.indexOf("b"));

// homework
// find

const numbers1 = [1, 2, 3, 4, 5, 6];

const filterdNumbers = numbers1.filter((number1) => {
  return number1 > 3;
});

console.log(filterdNumbers);

const doubleNumbers = numbers1.map((numbers1) => {
  return numbers1 * 2;
});

console.log(doubleNumbers);

const names = [
  {
    firstname: "lili",
    lastname: "lili",
  },
  { firstname: "cham", lastname: "Nguyen" },
];

const fullName = names.map((name) => {
  return name.firstname + name.lastname;
});
console.log(fullName);

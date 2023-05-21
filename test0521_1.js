const teachers_array = ["Mike", "John", "Lily"];
console.log(teachers_array[2]);
console.log(teachers_array);

const teacher_object = { name: "LiLy", age: 3, teach: "whewhe" };
console.log(teacher_object.name);
console.log(teacher_object);

const teachers_objects_array = [
  { name: "Mike", age: 35, teaching: "mathematics" },
  { name: "John", age: 60, teaching: "english" },
  { name: "LiLy", age: 3, teaching: "whewhe" },
];
console.log(teachers_objects_array);
console.log(teachers_objects_array[0].name);

for (let i = 0; i < teachers_objects_array.length; i++) {
  console.log(
    `名前:${teachers_objects_array[i].name},年齢: ${teachers_objects_array[i].age},教える項目: ${teachers_objects_array[i].teaching}`
  );
}

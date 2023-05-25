const restaurant = {
  name: "My Lyly",
  address: "群馬県 高崎市 新町 1357-1",
  businessHours: {
    opening: "9:00(AM)",
    closing: "9:00(PM)",
  },
  staffMember: ["John", "Mike", "Hanah"],
  menus: ["coffee", "juice", "beer"],
};
console.log(`店名:${restaurant.name}`);
console.log(restaurant.address);
console.log("~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  `営業時間：${restaurant.businessHours.opening}~${restaurant.businessHours.closing}`
);
console.log("MENU");
for (let i = 0; i < restaurant.menus.length; i++) {
  console.log(restaurant.menus[i]);
}

for (let i = 0; i < restaurant.menus.length; i++) {
  console.log(
    `${restaurant.menus[i]}なら, ${restaurant.staffMember[i]}スタッフをおすすめです`
  );
}

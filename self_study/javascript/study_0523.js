const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening: "10:00(AM)",
    closing: "8:00(PM)",
  },
};

console.log(`店名:${cafe.name}`);

console.log(
  `営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`
);

const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening: "10:00(AM)",
    closing: "8:00(PM)",
  },

  menus: ["コーヒー", "紅茶", "チョコレートケーキ"],
};

console.log(`店名: ${cafe.name}`);
console.log(
  `営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`
);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

for (let i = 0; i < cafe.menus.length; i++) {
  console.log(cafe.menus[i]);
}

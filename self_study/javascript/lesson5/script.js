import Dog from "./dog";
const dog = new Dog("レオ", 4, "チワワ");
dog.info();

import { dog1, dog2 } from "./dogData";
dog.info();
console.log("---------");
dog1.info();
console.log("---------");
dog2.info();

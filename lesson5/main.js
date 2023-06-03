const { Hamstar } = require("./hamstar");
const { Mormot } = require("./mormot");
import chalk from "chalk";
// const { chalk } = require("chalk");

const taiwanMormot = new Mormot("Lili", "3");
taiwanMormot.greet();
taiwanMormot.info();

const cham = new Hamstar("Chamcham", 32, "プログラミング");
cham.greet();
cham.info();

console.log(chalk.yellow("Hello lili"));

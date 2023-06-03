const { Mormot } = require("./mormot");

class Hamstar extends Mormot {
  constructor(name, old, skill) {
    super(name, old);
    this.skill = skill;
  }

  info() {
    console.log("I eat lettuce and meat.");
    console.log(`I learn ${this.skill} from ${this.old}.`);
  }
}
// export { Hamstar };
module.exports = { Hamstar };

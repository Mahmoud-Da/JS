class Mormot {
  constructor(name, old) {
    this.name = name;
    this.old = old;
  }

  greet() {
    console.log(`My name is ${this.name}, I'm ${this.old} years old.`);
  }

  info() {
    console.log("I only eat lettuce.");
  }
}

// export default Mormot;
// export { Mormot1, Mormot2 };
// module.exports = { Mormot };
export { Mormot };

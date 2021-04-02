const {
  plus,
  timesTwo,
  dividedByTwo,
  toThePowerOfTen,
} = require("./test.helpers");

class Lazy {
  constructor() {
    this.chain = [];
  }

  add(...args) {
    this.chain.push({
      func: args.shift(),
      args: [...args],
    });

    return this;
  }

  evaluate(values) {
    return values.map((value) => {
      let result;

      for (const link of this.chain) {
        const assignable = result ? result : value;

        result = link["func"](assignable, ...link["args"]);
      }

      return result;
    });
  }
}

module.exports = Lazy;

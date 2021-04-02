const {
  plus,
  timesTwo,
  dividedByTwo,
  toThePowerOfTen,
} = require("./test.helpers");

const Lazy = require("./");

it("Should add a function to chain", () => {
  const computation = new Lazy();

  computation.add(plus);

  expect(computation.chain).toHaveLength(1);
});

it("Should add a function to and evaluate to given array of numbers", () => {
  const values = [1, 2, 3];
  const expectedResult = [3, 5, 7];

  const computation = new Lazy();

  const givenResult = computation.add(timesTwo).add(plus, 1).evaluate(values);

  expect(givenResult).toEqual(expectedResult);
});

it("Should add a function to and evaluate to given array of numbers with many operations", () => {
  const values = [10, 15, 2, 5, 7, 8, 100];
  const expectedResult = [
    10000000000,
    576650390625,
    1024,
    9765625,
    282475249,
    1073741824,
    100000000000000000000,
  ];

  const computation = new Lazy();

  const givenResult = computation
    .add(timesTwo)
    .add(plus, 1)
    .add(dividedByTwo)
    .add(toThePowerOfTen)
    .evaluate(values);

  expect(givenResult).toEqual(expectedResult);
});

import pointCounter from "./pointCounter";

test("checks if $120 spent equals to 90 points", () => {
  expect(pointCounter(120)).toBe(90);
});

test("checks if $51 spent equals to 1 point", () => {
  expect(pointCounter(51)).toBe(1);
});

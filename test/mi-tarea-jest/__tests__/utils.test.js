import { add, divide, capitalize } from "../src/utils.js";

describe("add()", () => {
  it("should return 5 for add(2, 3)", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should return 3 for add(-2, 5)", () => {
    expect(add(-2, 5)).toBe(3);
  });

  it("should return 0 for add(0, 0)", () => {
    expect(add(0, 0)).toBe(0);
  });

  it("should throw a TypeError for add('2', 3)", () => {
    expect(() => add("2", 3)).toThrow(TypeError);
  });

  
  it("should throw a TypeError if an argument is missing", () => {
    expect(() => add(5)).toThrow(TypeError);
  });
});

describe("divide()", () => {
  it("should return 5 for divide(10, 2)", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("should return 1.5 for divide(3, 2)", () => {
    expect(divide(3, 2)).toBe(1.5);
  });

  it("should throw an Error for divide(1, 0)", () => {
    expect(() => divide(1, 0)).toThrow(Error);
  });

  it("should throw a TypeError for divide('10', 2)", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

  
  it("should throw a TypeError if trying to divide by null", () => {
    expect(() => divide(10, null)).toThrow(TypeError);
  });
});

describe("capitalize()", () => {
  it("should return 'Hello' for capitalize('hello')", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should return 'Hello' for capitalize('Hello')", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("should return '' for capitalize('')", () => {
    expect(capitalize("")).toBe("");
  });

  it("should throw a TypeError for capitalize(123)", () => {
    expect(() => capitalize(123)).toThrow(TypeError);
  });

  
  
  it("should capitalize a single character correctly", () => {
    expect(capitalize("a")).toBe("A");
  });
});
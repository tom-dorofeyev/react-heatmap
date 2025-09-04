import { isLeapYear } from "./is-leap-year";

describe("isLeapYear()", () => {
  test("return boolean value", () => {
    const result = isLeapYear(100);
    expect(typeof result).toEqual("boolean");
  });

  test("divisible by 400 is a leap year", () => {
    const output1 = isLeapYear(400);
    const output2 = isLeapYear(800);

    expect(output1).toBe(true);
    expect(output2).toBe(true);
  });

  test("divisible by 100 but not by 400 is NOT a leap year", () => {
    const output1 = isLeapYear(300);
    const output2 = isLeapYear(100);
    expect(output1).toBe(false);
    expect(output2).toBe(false);
  });

  test("divisible by 4 but not by 100 is a leap year", () => {
    const output1 = isLeapYear(2008);
    const output2 = isLeapYear(2012);
    const output3 = isLeapYear(2016);

    expect(output1).toBe(true);
    expect(output2).toBe(true);
    expect(output3).toBe(true);
  });

  test("not divisible by 4 is NOT leap year", () => {
    const output1 = isLeapYear(2017);
    const output2 = isLeapYear(2018);
    const output3 = isLeapYear(2019);

    expect(output1).toBe(false);
    expect(output2).toBe(false);
    expect(output3).toBe(false);
  });
});

import { getYearOptions } from "./get-year-options";

describe("getYearOptions()", () => {
  it("returns list of years from latest to earliest", () => {
    const options = getYearOptions(2020);
    const currentYear = new Date().getFullYear();
    expect(options[options.length - 1]).toBe(2020);
    expect(options[0]).toBe(currentYear);
    expect(options.length - 1).toBe(currentYear - 2020);
  });
});

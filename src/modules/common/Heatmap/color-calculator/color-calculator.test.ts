import { getHeatmapItemColor } from "./color-calculator";

describe("getHeatmapItemColor()", () => {
  test.each([
    [0, 100, "color1"], // exactly 0
    [1, 100, "color2"], // <= 25%
    [25, 100, "color2"],
    [26, 100, "color3"], // <= 50%
    [50, 100, "color3"],
    [51, 100, "color4"], // <= 75%
    [75, 100, "color4"],
    [76, 100, "color5"], // > 75%
    [100, 100, "color5"],
    [1000, 100, "color5"], // way over max
  ])('when value is %i and max is %i return "%s"', (value, max, expected) => {
    expect(getHeatmapItemColor(value, max)).toBe(expected);
  });
});

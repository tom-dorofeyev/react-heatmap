import { getHeatmapItemColor } from "./color-calculator";

describe("getHeatmapItemColor()", () => {
  it('returns "color1" when 1st argument is zero', () => {
    const result = getHeatmapItemColor(0, 100);
    expect(result).toBe("color1");
  });

  it('returns "color2" when 1st argument is less then or equal to 25%', () => {
    const result1 = getHeatmapItemColor(1, 100);
    const result2 = getHeatmapItemColor(25, 100);

    expect(result1).toBe("color2");
    expect(result2).toBe("color2");
  });

  it('returns "color3" when 1st argument is less then or equal to 50%', () => {
    const result1 = getHeatmapItemColor(26, 100);
    const result2 = getHeatmapItemColor(50, 100);

    expect(result1).toBe("color3");
    expect(result2).toBe("color3");
  });

  it('returns "color4" when 1st argument is less then or equal to 75%', () => {
    const result1 = getHeatmapItemColor(51, 100);
    const result2 = getHeatmapItemColor(75, 100);

    expect(result1).toBe("color4");
    expect(result2).toBe("color4");
  });

  it('returns "color5" when 1st argument is bigger then 75%', () => {
    const result1 = getHeatmapItemColor(76, 100);
    const result2 = getHeatmapItemColor(100, 100);
    const result3 = getHeatmapItemColor(1000, 100);

    expect(result1).toBe("color5");
    expect(result2).toBe("color5");
    expect(result3).toBe("color5");
  });
});

import { findMatrixMax } from "./find-matrix-max";

describe("findMatrixMax()", () => {
  it("returns the largest value found in the matrix", () => {
    const mtx = [
      [{ count: 1 }, { count: 1000 }, { count: 0 }],
      [{ count: 1 }, { count: 1 }, { count: 0 }],
      [{ count: 1 }, { count: 1 }, { count: 1001 }],
    ];

    const max = findMatrixMax(mtx, "count");
    expect(max).toBe(1001);
  });

  it("ignores non-number values", () => {
    const mtx: { count?: number | null | string }[][] = [
      [{ count: 1 }, { count: 1500 }, { count: null }],
      [{ count: 1 }, { count: NaN }, { count: undefined }],
      [{ count: "test" }, { count: 1501 }, { count: 0 }],
    ];

    const max = findMatrixMax(mtx, "count");
    expect(max).toBe(1501);
  });
});

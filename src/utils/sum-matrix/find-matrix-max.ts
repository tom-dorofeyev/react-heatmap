export function findMatrixMax<T>(mtx: T[][], property: keyof T) {
  let max = 0;
  mtx.forEach((row) => {
    row.forEach((item) => {
      const currentValue = item[property];
      if (typeof currentValue !== "number") return;
      if (max < currentValue) max = currentValue;
    });
  });
  return max;
}

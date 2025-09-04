export function isLeapYear(value: number) {
  if (value % 400 === 0) return true;
  if (value % 100 === 0) return false;
  return value % 4 === 0;
}

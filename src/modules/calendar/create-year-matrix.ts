import { isLeapYear } from "../../utils/is-leap-year/is-leap-year";

export function createYearMatrix(year: number) {
  return [
    new Array(31).fill({}), // January
    new Array(isLeapYear(year) ? 29 : 28).fill({}), // February
    new Array(31).fill({}), // March
    new Array(30).fill({}), // April
    new Array(31).fill({}), // May
    new Array(30).fill({}), // June
    new Array(31).fill({}), // July
    new Array(31).fill({}), // August
    new Array(30).fill({}), // September
    new Array(31).fill({}), // October
    new Array(30).fill({}), // November
    new Array(31).fill({}), // December
  ];
}

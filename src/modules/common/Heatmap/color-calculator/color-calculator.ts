function getColorNumber(value: number, max: number): number {
  if (value === 0) return 1;
  const percent = (value / max) * 100;
  if (percent <= 25) {
    return 2;
  } else if (percent <= 50) {
    return 3;
  } else if (percent <= 75) {
    return 4;
  }
  return 5;
}

export function getHeatmapItemColor(value: number, max: number): string {
  const colorNumber = getColorNumber(value, max);
  return `color${colorNumber}`;
}

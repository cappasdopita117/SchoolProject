export function getRandomNumber(max?: number): number {
  if (max) {
    return Math.floor(Math.random() * max);
  } else {
    return Math.floor(Math.random() * 100);
  }
}

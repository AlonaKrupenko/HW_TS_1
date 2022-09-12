function getPositiveNumbers(arr: number[]): number[] | null {
  const resultArr: number[] = [];

  for (let el of arr) {
    if (el > 0) {
      resultArr.push(el);
    }
  }

  return resultArr.length === 0
    ? (console.log("There is no positive numbers"), null)
    : resultArr;
}

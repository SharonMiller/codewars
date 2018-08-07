'use-strict'
function cubeOdd(arr) {
  if (arr.some(isNaN)) {
    return undefined
  }
  else {
    return arr.filter((num) => num % 2 !== 0).map((num) => num * num * num).reduce((a, b) => a + b, 0)
  }
}

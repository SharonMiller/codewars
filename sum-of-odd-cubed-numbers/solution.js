'use-strict'
cubeOdd=(arr)=>(arr.some(isNaN))?undefined:arr.filter((num) => num % 2 !== 0).map((num) => num * num * num).reduce((a, b) => a + b, 0)

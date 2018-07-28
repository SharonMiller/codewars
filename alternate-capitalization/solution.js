function capitalize(s){
  let arr = s.split('');
  let oddArray = [];
  oddArray.push(arr[0]);
  arr[0] = arr[0].toUpperCase();
  for (let i = 1; i < arr.length; i++) {
    if (i%2 === 0) {
      oddArray.push(arr[i]);
      arr[i] = arr[i].toUpperCase();    
    } else {
      oddArray[i] = arr[i].toUpperCase();
    }
  }
  let startEven = arr.join('');
  let startOdd = oddArray.join('');
  return [startEven, startOdd];
};
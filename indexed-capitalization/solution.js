function capitalize(s,arr){
  var arrString = s.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arrString.length) {
      continue;
    }
    arrString[arr[i]] = arrString[arr[i]].toUpperCase();
  }
  s = arrString.join('');
  return s;
};
var gimme = function (inputArray) {
  let copyArray = inputArray.slice().sort((a,b)=> a-b);
  for (let i=0; i<inputArray.length; i++){
    if (inputArray[i]=== copyArray[1]);{
      return inputArray.indexOf(copyArray[1]);
    }  
  } 
};
function high(x){
  let word = x.split(' ')
  .map(x=>x.split('').reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return x.split(' ')[word.indexOf(Math.max(...word))];
}
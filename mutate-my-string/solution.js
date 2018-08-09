function mutateMyStrings(stringOne, stringTwo) {
  let newOne = stringOne.split('');
  let newTwo = stringTwo.split('');
  let mutate = stringOne.concat('\n');
  for (let i = 0; i < newOne.length; i++) {
      if (newOne[i] !== newTwo[i]) {
          newOne[i] = newTwo[i];
          mutate = mutate.concat(`${newOne.join('')}\n`);
      }
  }
  return mutate;
}
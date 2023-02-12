const numberList = [1, 2, 3, 4, 5, 6];
let declarationSum = 0;
for (let idx = 0; idx < numberList.length; idx++) {
  if (idx % 2) {
    declarationSum += numberList[idx];
  }
}

console.log(declarationSum);

const commandSum = numberList
  .filter((_, idx) => idx % 2)
  .reduce((acc, num) => acc + num, 0);

console.log(commandSum);

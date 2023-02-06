const increaseWebSkill = (development) => {
  return ++development;
};
const decreaseWebSkill = (development) => {
  return --development;
};

const predicateWebSkill = { increaseWebSkill, decreaseWebSkill };

const makeFrontEndDeveloper = (predicateWebSkill) => {
	let currentDevelopment = 10;

    return () => {
        currentDevelopment = predicateWebSkill(currentDevelopment);
        return currentDevelopment;
    }
}

const increaser = makeFrontEndDeveloper(predicateWebSkill.increaseWebSkill);
const decreaser = makeFrontEndDeveloper(predicateWebSkill.decreaseWebSkill);


console.log(increaser());
console.log(increaser());


console.log(decreaser());
console.log(decreaser());

console.log(increaser());

console.log(web);           //undefined
console.log(add32ndWeb());  // 우리 같이 행복하게 개발해용🧡

var web;                        

function add32ndWeb() {
  console.log("우리 같이 행복하게 개발해용🧡");
}

// console.log(remove32ndWebVar());    // TypeError: remove32ndWebVar is not a function
// console.log(remove32ndWebConst());  // ReferenceError: Cannot access 'remove32n0dWebConst' before initialization

var remove32ndWebVar = function() {
    console.log('Var 웹이 근본인데? 사라진다고...!!?!!');
}

const remove32ndWebConst = function() {
  console.log("Const 웹이 근본인데? 사라진다고...!!?!!");
};

console.log(remove32ndWebVar());    // TypeError: remove32ndWebVar is not a function

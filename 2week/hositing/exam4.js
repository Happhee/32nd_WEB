/** --- JS Parser 내부의 호이스팅(Hoisting)의 결과 --- */
// 1. [Hoisting] 변수값 선언
var happhee = '웹파트장'        // 값 할당 o
var webPart;                 // 값 할당 x

// 2. [Hoisting] 함수선언문
function happhee() {
  console.log("행복하게 개발하쟈");
}


function webPart() {
  console.log("두큰두큰💖");
}


console.log(typeof happhee); 
console.log(typeof webPart); 

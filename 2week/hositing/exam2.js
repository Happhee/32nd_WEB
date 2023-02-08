goAfterParty(); // 정상 작동된다

function goAfterParty() {
  var webPart; // [Hoisting] var 변수 "선언"

  function attendAllWebPartMember() {
    // [Hoisting] 함수선언문
    return "웹파트는 전원참석...💛";
  }

  webPart = attendAllWebPartMember();            // "할당"
  console.log(typeof attendAllWebPartMember);   // function
  console.log("뒷풀이 👉 " + webPart);           //뒷풀이 👉 웹파트는 전원참석...💛
}

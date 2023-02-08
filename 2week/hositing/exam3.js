goAfterParty();

function goAfterParty() {
  var webPart;
  webPart = inner(); //TypeError: inner is not a function

  var inner = function attendAllWebPartMember() {
    return "웹파트는 전원참석...💛";
  };

  console.log(typeof attendAllWebPartMember); // undefined
  console.log("뒷풀이 👉 " + webPart); //뒷풀이 👉 undefined
}

function goAfterParty() {
  var webPart;
  webPart = inner(); //ReferenceError: Cannot access 'inner' before initialization

    let inner = function attendAllWebPartMember() {
    return "웹파트는 전원참석...💛";
  };

  console.log(typeof attendAllWebPartMember); // undefined
  console.log("뒷풀이 👉 " + webPart); //뒷풀이 👉 undefined
}
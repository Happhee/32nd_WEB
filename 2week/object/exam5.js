const webPart = {
  leader: "Happhee",
  vision: "긍정과 열정이 넘치는 웹개발자들",

  member: {
    count: 23,
    hobby: "모각공",
  },
  goWebMT: () => {
    return "짱짱짱 언넝 가고시퍼용!!!";
  },
};

const key = "vision";

console.log(key in webPart); // true
console.log("Vision" in webPart); // false

for (const webPartKey in webPart) {
  console.log("키", webPartKey);
  console.log("값", webPart[webPartKey]);
}

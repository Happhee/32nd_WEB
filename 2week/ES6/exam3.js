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

const web32nd = {
  ...webPart,
  leader: "햅히💛",
  computer: "mac",
};
console.log(web32nd);
const {
  leader,
  vision,
  member: { ...rest },
} = webPart;

console.log(rest); // { count: 23, hobby: '모각공' }

const web = new Object(); // new연산자를 통한 객체 생성자
const happhee = {}; // 객체 리터럴

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

console.log(webPart.goWebMT());

webPart.mainLeader = "웹파트원";

console.log(webPart);

delete webPart.leader;
console.log(webPart);

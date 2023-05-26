import { atom } from "recoil";
export const happheeInfo = atom({
  key: "happheeInfo",
  default: {
    name: "서히",
    hobby: "춤",
    age: 25,
    messageList: [
      "To.웨비들에게",
      "우리웨비들 안녕🌼",
      "합동세미나까지 너무너무 고생했어요!",
      "이제 웹잼이랑 8차세미나만 남았네요!!",
      "지금까지 배웠던 내용들 다 정리하고 가봅시다!",
    ],
  },
});

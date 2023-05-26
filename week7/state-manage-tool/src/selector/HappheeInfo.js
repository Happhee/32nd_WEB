import { selector, selectorFamily } from "recoil";
import { happheeInfo } from "../atom/HappheeInfo";

export const happheeMessage = selector({
  key: "happheeMessage/get",
  get: ({ get }) => {
    return get(happheeInfo).messageList;
  },
  set: ({ get, set }, newMessage) => {
    const newHappheeInfo = {
      ...get(happheeInfo),
      messageList: [...get(happheeInfo).messageList, newMessage],
    };
    set(happheeInfo, newHappheeInfo);
  },
});

export const happheeSelecteMessage = selectorFamily({
  key: "happheeSelecteMessage/get",
  get:
    (selectIdx) =>
    ({ get }) => {
      return get(happheeInfo).messageList.filter(
        (_, idx) => idx === selectIdx
      )[0];
    },
});

import { createContext } from "react";

const ProfileActionContext = createContext({
  state: {
    name: "happhee",
    age: 25,
  },
  actions: {
    setName: () => {},
    setAge: () => {},
  },
});

export default ProfileActionContext;

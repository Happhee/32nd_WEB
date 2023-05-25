import { useState } from "react";
import ProfileActionContext from "../contexts/ProfileActionContext";
const ProfileProvider = ({ children }) => {
  const [name, setName] = useState("HAPPHEE");
  const [age, setAge] = useState(25);

  const value = {
    state: { name, age },
    actions: { setName, setAge },
  };

  return (
    <ProfileActionContext.Provider value={value}>
      {children}
    </ProfileActionContext.Provider>
  );
};
export default ProfileProvider;

import { useContext } from "react";
import ProfileContext from "../contexts/Profile";

const Profile = () => {
  const profileConsumer = useContext(ProfileContext);
  const { age, name } = profileConsumer;
  return (
    <>
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
      </ul>

      <ProfileContext.Consumer>
        {({ name, age }) => (
          <div>
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
          </div>
        )}
      </ProfileContext.Consumer>
    </>
  );
};

export default Profile;

import ProfileContext from "../contexts/Profile";

const ProfileBox = () => {
  return (
    <ProfileContext.Consumer>
      {({ name, age }) => (
        <div>
          <p>이름 : {name}</p>
          <p>나이 : {age}</p>
        </div>
      )}
    </ProfileContext.Consumer>
  );
};

export default ProfileBox;

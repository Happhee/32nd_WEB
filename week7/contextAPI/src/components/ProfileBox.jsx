import ProfileActionContext from "../contexts/ProfileActionContext";
const ProfileBox = () => {
  return (
    <ProfileActionContext.Consumer>
      {({ state: { name, age }, actions: { setAge, setName } }) => (
        <>
          <div>
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
          </div>
          <button type="button" onClick={() => setName("서히")}>
            서히로 바꾸기
          </button>
          <button type="button" onClick={() => setAge((prev) => prev + 1)}>
            나이 증가
          </button>
        </>
      )}
    </ProfileActionContext.Consumer>
  );
};

export default ProfileBox;

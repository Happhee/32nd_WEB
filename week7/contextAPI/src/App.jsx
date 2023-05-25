import ProfileBox from "./components/ProfileBox";
import Profile from "./consumer/Profile";
import ProfileProvider from "./providers/Profile";

const App = () => {
  return (
    <div>
      <h1>프로필만 보여주기</h1>
      <Profile />
      <hr />
      <h1>액션이 있는 프로필</h1>
      <ProfileProvider>
        <ProfileBox />
      </ProfileProvider>
    </div>
  );
};

export default App;

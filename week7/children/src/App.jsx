const App = () => {
  const name = "Happhee";
  return (
    <FirstComponent>
      <SecondComponent>
        <ThirdComponent name={name} />
      </SecondComponent>
    </FirstComponent>
  );
};

const FirstComponent = ({ children }) => {
  return (
    <div>
      <h2>첫번째 컴포넌트</h2>
      {children}
    </div>
  );
};

const SecondComponent = ({ children }) => {
  return (
    <div>
      <h3>두번째 컴포넌트</h3>
      {children}
    </div>
  );
};

const ThirdComponent = ({ name }) => {
  return <div>{name}</div>;
};

export default App;

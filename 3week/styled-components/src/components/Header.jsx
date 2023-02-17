import styled from "styled-components";

const Header = () => {
  return (
    <HappheeHeader className="main__header">💛 햅히의 웹파트 💛</HappheeHeader>
  );
};

export default Header;

const HappheeHeader = styled.header`
  width: 100%;
  padding: 2rem;

  background-color: #ff8e9e;
  color: white;
  font-size: 2rem;

  text-align: center;
`;

import styled from "styled-components";

const Header = () => {
  return (
    <HappheeHeader className="main__header">π ννμ μΉννΈ π</HappheeHeader>
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

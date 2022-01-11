import styled from "styled-components";
import LogoImage from "./../../../images/logo.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  @media screen and (max-width: 450px) {
    padding:10px;
  }
`;
const RouterLink = styled(Link)`
  align-self: flex-start;
  justify-self: flex-start;
`;
const Logo = styled.img`
  cursor: pointer;
  height: 100px;
  width: 200px;
`;
const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  @media screen and (max-width: 450px) {
    width:85%;
  }
`;
export default function UserLayout() {
  return (
    <Container>
      <RouterLink to="/home">
        <Logo src={LogoImage} />
      </RouterLink>
      <ContentWrapper>
        <Content>
          <Outlet />
        </Content>
      </ContentWrapper>
    </Container>
  );
}

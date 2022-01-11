import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
export default function HomeLayout() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}

import {
  SharedLayoutStyled,
  ContentContainer,
} from "./SharedLayout.styled.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const SharedLayout = ({ themeToggle }) => {
  return (
    <SharedLayoutStyled>
      <Header themeToggle={themeToggle} />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </SharedLayoutStyled>
  );
};

export default SharedLayout;

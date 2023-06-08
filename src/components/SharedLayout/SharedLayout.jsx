import { SharedLayoutStyled } from "./SharedLayout.styled.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import ContentContainer from "../ContentContainer/ContentContainer";

const SharedLayout = ({ themeToggle, themeType }) => {
  return (
    <SharedLayoutStyled>
      <Header themeToggle={themeToggle} themeType={themeType} />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </SharedLayoutStyled>
  );
};

export default SharedLayout;

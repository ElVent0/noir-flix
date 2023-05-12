import { SharedLayoutStyled } from "./SharedLayout.styled.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import ContentContainer from "../ContentContainer/ContentContainer";

const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </SharedLayoutStyled>
  );
};

export default SharedLayout;

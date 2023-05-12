import { SharedLayoutStyled } from "./SharedLayout.styled.jsx";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <Header />
      <Outlet />
    </SharedLayoutStyled>
  );
};

export default SharedLayout;

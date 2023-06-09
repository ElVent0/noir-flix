import { FooterStyled, FooterLogo, InfoParagraph } from "./Footer.styled.jsx";
import logo from "../../media/noirflix-3-3.png";
import logoLight from "../../media/noirflix-3-4.png";
import { ThemeContext } from "../App";
import { useContext } from "react";

const Footer = () => {
  const themeType = useContext(ThemeContext);

  return (
    <FooterStyled>
      <FooterLogo src={themeType ? logo : logoLight} alt="Logo" width="50px" />
      <InfoParagraph>Movie library in your pocket :)</InfoParagraph>
      {/* <InfoParagraph>Student project</InfoParagraph> */}
    </FooterStyled>
  );
};

export default Footer;

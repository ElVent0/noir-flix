import { FooterStyled, FooterLogo, InfoParagraph } from "./Footer.styled.jsx";
import logo from "../../media/noirflix-3-3.png";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterLogo src={logo} alt="Logo" width="50px" />
      <InfoParagraph>Movie library in your pocket :)</InfoParagraph>
      {/* <InfoParagraph>Student project</InfoParagraph> */}
    </FooterStyled>
  );
};

export default Footer;

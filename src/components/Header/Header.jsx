import {
  HeaderStyled,
  Logo,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Login,
  Logintext,
  //   Profile,
} from "./Header.styled.jsx";
// import logo from "../../media/noirlib.png";
import logo from "../../media/noirflix.png";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/">Research</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="library">Library</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="сollection">Collection</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="random">Surprise movie</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
      <Logo src={logo} alt="Logo" width="94" />
      <Login>
        <FcGoogle />
        <Logintext>Login</Logintext>
      </Login>
      {/* <Profile></Profile> */}
    </HeaderStyled>
  );
};

export default Header;

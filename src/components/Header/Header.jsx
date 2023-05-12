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
import logo from "../../media/noirlib.png";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo src={logo} alt="Logo" width="72" />
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/">Research</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="library">Library</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
      <Login>
        <FcGoogle />
        <Logintext>Login</Logintext>
      </Login>
      {/* <Profile></Profile> */}
    </HeaderStyled>
  );
};

export default Header;

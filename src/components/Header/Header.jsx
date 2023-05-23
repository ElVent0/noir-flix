import {
  HeaderStyled,
  Logo,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Login,
  Logintext,
  LoginMenu,
  Profile,
} from "./Header.styled.jsx";
// import logo from "../../media/noirlib.png";
import logo from "../../media/noirflix.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";

const Header = () => {
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const onOpenProfileModal = () => {
    setIsProfileModal(true);
  };

  const onCloseProfileModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsProfileModal(false);
    }
    if (e.currentTarget.id === "button-close") {
      setIsProfileModal(false);
    }
  };

  const onLoginWithFacebook = () => {};

  const onLoginWithGoogle = () => {};

  const onLogout = () => {
    setIsLogin(false);
    setIsProfileModal(false);
  };

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
          {/* <NavigationItem>
            <NavigationLink to="сollection">Collection</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="random">Surprise movie</NavigationLink>
          </NavigationItem> */}
        </NavigationList>
      </Navigation>
      <Logo src={logo} alt="Logo" width="94" />
      <LoginMenu>
        {isLogin ? (
          <>
            <Profile onClick={onOpenProfileModal}>
              <MdAccountCircle />
              <p>Profile</p>
            </Profile>
          </>
        ) : (
          <>
            <Logintext>Login</Logintext>
            <Login onClick={onLoginWithFacebook()}>
              <ImFacebook />
            </Login>
            <Login onClick={onLoginWithGoogle()}>
              <FcGoogle />
            </Login>
          </>
        )}
      </LoginMenu>
      {isProfileModal && (
        <ProfileModal
          onCloseProfileModal={onCloseProfileModal}
          onLogout={onLogout}
        />
      )}
    </HeaderStyled>
  );
};

export default Header;

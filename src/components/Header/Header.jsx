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
  UserImage,
  ThemeButton,
  ThemeButtonDotLight,
  ThemeButtonDotDark,
} from "./Header.styled.jsx";
import logo from "../../media/noirflix-3-3.png";
import logoLight from "../../media/noirflix-3-4.png";
import { TbLogin } from "react-icons/tb";
import { RiSunFill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import LoginModal from "../LoginModal/LoginModal";
import { useSession } from "@supabase/auth-helpers-react";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "../App";

const Header = ({ themeToggle }) => {
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isLoginTypeModal, setIsLoginTypeModal] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [isFixed, setIsFixed] = useState(false);

  const themeType = useContext(ThemeContext);
  const session = useSession();

  // Створюємо аватарку
  useEffect(() => {
    if (session) {
      setAvatar(
        createAvatar(funEmoji, {
          seed: session.user.identities[0].id,
        }).toDataUriSync()
      );
    }
  }, [session]);

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

  const onOpenLoginModal = () => {
    setIsLoginTypeModal(true);
    setIsLoginModal(true);
  };

  const onCloseLoginModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsLoginModal(false);
    }
    if (e.currentTarget.id === "button-close") {
      setIsLoginModal(false);
    }
  };

  // Змінюємо властивості хедеру при скролі
  window.onscroll = function () {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 50) {
      setIsFixed(true);
    } else if (0 < scrollPosition < 50) {
      setIsFixed(false);
    }
  };

  return (
    <HeaderStyled isFixed={isFixed}>
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
      <Logo
        src={themeType ? logo : logoLight}
        alt="Logo"
        width="96"
        height="auto"
        isFixed={isFixed}
      />
      <LoginMenu>
        <ThemeButton onClick={themeToggle}>
          {themeType ? (
            <ThemeButtonDotLight themeType={themeType}>
              <RiSunFill />
            </ThemeButtonDotLight>
          ) : (
            <ThemeButtonDotDark themeType={themeType}>
              <BsFillMoonStarsFill />
            </ThemeButtonDotDark>
          )}
        </ThemeButton>
        {session ? (
          <>
            <Profile onClick={onOpenProfileModal}>
              <UserImage src={avatar} alt="User image" />
              <p>Profile</p>
            </Profile>
          </>
        ) : (
          <>
            <Login onClick={onOpenLoginModal}>
              <TbLogin />
              <Logintext>Login</Logintext>
            </Login>
          </>
        )}
      </LoginMenu>

      {isProfileModal && (
        <ProfileModal
          onCloseProfileModal={onCloseProfileModal}
          setIsProfileModal={setIsProfileModal}
          avatar={avatar}
        />
      )}

      {isLoginModal && (
        <LoginModal
          onCloseLoginModal={onCloseLoginModal}
          isLoginTypeModal={isLoginTypeModal}
          setIsLoginTypeModal={setIsLoginTypeModal}
          setIsLoginModal={setIsLoginModal}
        />
      )}

      <Toaster
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
    </HeaderStyled>
  );
};

export default Header;

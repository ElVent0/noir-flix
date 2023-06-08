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
import { TbLogin } from "react-icons/tb";
import { RiSunFill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import LoginModal from "../LoginModal/LoginModal";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import toast, { Toaster } from "react-hot-toast";

const Header = ({ themeToggle, themeType }) => {
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isLoginTypeModal, setIsLoginTypeModal] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [isFixed, setIsFixed] = useState(false);

  const notifyOnMailSignUp = () =>
    toast.success(
      "If this mail is free, you will receive a confirmation by email",
      {
        duration: 5000,
        style: {
          padding: "16px",
          textAlign: "center",
          color: "#606770",
          zIndex: "2001",
        },
        iconTheme: {
          primary: "#fb6d00",
          secondary: "#FFFAEE",
        },
      }
    );

  const errorToast = () =>
    toast.error("Bad login, try again", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
        zIndex: "2001",
      },
      iconTheme: {
        primary: "#fa4b34",
        secondary: "#ffffff",
      },
    });

  const session = useSession();
  const supabase = useSupabaseClient();

  // console.log("session", session);

  useEffect(() => {
    if (session) {
      setAvatar(
        createAvatar(funEmoji, {
          seed: session.user.identities[0].id,
        }).toDataUriSync()
      );
    }
  }, [session]);

  // const { isLoading } = useSessionContext();
  // if (isLoading) {
  //   return <></>;
  // }

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const onOpenProfileModal = () => {
    setIsProfileModal(true);
  };

  const onOpenLoginModal = () => {
    setIsLoginTypeModal(true);
    setIsLoginModal(true);
  };

  const onCloseProfileModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsProfileModal(false);
    }
    if (e.currentTarget.id === "button-close") {
      setIsProfileModal(false);
    }
  };

  const onCloseLoginModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsLoginModal(false);
    }
    if (e.currentTarget.id === "button-close") {
      setIsLoginModal(false);
    }
  };

  const onLogout = () => {
    logout();
    setIsProfileModal(false);
  };

  window.onscroll = function () {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 90) {
      setIsFixed(true);
    } else if (0 < scrollPosition < 90) {
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
          {/* <NavigationItem>
            <NavigationLink to="сollection">Collection</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="random">Surprise movie</NavigationLink>
          </NavigationItem> */}
        </NavigationList>
      </Navigation>
      <Logo src={logo} alt="Logo" width="96" height="auto" isFixed={isFixed} />
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
          onLogout={onLogout}
          avatar={avatar}
        />
      )}
      {isLoginModal && (
        <LoginModal
          onCloseLoginModal={onCloseLoginModal}
          isLoginTypeModal={isLoginTypeModal}
          setIsLoginTypeModal={setIsLoginTypeModal}
          notifyOnMailSignUp={notifyOnMailSignUp}
          errorToast={errorToast}
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

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
} from "./Header.styled.jsx";
import logo from "../../media/noirflix-3.png";
import { TbLogin } from "react-icons/tb";
import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import LoginModal from "../LoginModal/LoginModal";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Header = () => {
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();

  console.log("session", session);

  // const { isLoading } = useSessionContext();
  // if (isLoading) {
  //   return <></>;
  // }

  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      alert("Login with Google error");
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("Logout error");
    }
  };

  const onOpenProfileModal = () => {
    setIsProfileModal(true);
  };

  const onOpenLoginModal = () => {
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
      <Logo src={logo} alt="Logo" width="96" />
      <LoginMenu>
        {session ? (
          <>
            <Profile onClick={onOpenProfileModal}>
              <UserImage
                src={session.user.identities[0].identity_data.avatar_url}
                alt="User image"
              />
              <p>Profile</p>
            </Profile>
          </>
        ) : (
          <>
            {/* <Logintext>Login</Logintext> */}
            {/* <Login onClick={() => loginWithGoogle()}>
              <FcGoogle />
            </Login> */}
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
        />
      )}
      {isLoginModal && (
        <LoginModal
          onCloseLoginModal={onCloseLoginModal}
          loginWithGoogle={loginWithGoogle}
        />
      )}
    </HeaderStyled>
  );
};

export default Header;

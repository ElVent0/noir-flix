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
import logo from "../../media/noirflix-3.png";
import { FcGoogle } from "react-icons/fc";
// import { ImFacebook } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";

const Header = () => {
  const [isProfileModal, setIsProfileModal] = useState(false);

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

  const onCloseProfileModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsProfileModal(false);
    }
    if (e.currentTarget.id === "button-close") {
      setIsProfileModal(false);
    }
  };

  // const onLoginWithFacebook = () => {
  //   console.log("In progress");
  // };

  const onLogout = () => {
    // setIsLogin(false);
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
              <MdAccountCircle />
              <p>Profile</p>
            </Profile>
          </>
        ) : (
          <>
            <Logintext>Login</Logintext>
            {/* <Login onClick={onLoginWithFacebook()}>
              <ImFacebook />
            </Login> */}
            <Login onClick={() => loginWithGoogle()}>
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

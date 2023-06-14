import {
  AuthContainer,
  AuthParagraph,
  Login,
  Logintext,
} from "./AuthProvider.styled";
import { useSession } from "@supabase/auth-helpers-react";
import { TbLogin } from "react-icons/tb";
import { useState, useContext } from "react";
import LoginModal from "../LoginModal/LoginModal";
import fingerprint from "../../media/fingerprint.png";
import fingerprintLight from "../../media/fingerprint-2.png";
import { ThemeContext } from "../App";

const AuthProvider = ({ children }) => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isLoginTypeModal, setIsLoginTypeModal] = useState(true);

  const themetype = useContext(ThemeContext);

  const session = useSession();

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

  return session ? (
    children
  ) : (
    <>
      <AuthContainer>
        <img
          src={themetype ? fingerprint : fingerprintLight}
          width="120"
          alt="fingerpring"
        />
        <AuthParagraph>
          The library is available only to <span>authorized</span> users
        </AuthParagraph>
        <Login onClick={onOpenLoginModal} themetype={themetype}>
          <TbLogin />
          <Logintext themetype={themetype}>Login</Logintext>
        </Login>
      </AuthContainer>

      {isLoginModal && (
        <LoginModal
          onCloseLoginModal={onCloseLoginModal}
          isLoginTypeModal={isLoginTypeModal}
          setIsLoginTypeModal={setIsLoginTypeModal}
          setIsLoginModal={setIsLoginModal}
        />
      )}
    </>
  );
};

export default AuthProvider;

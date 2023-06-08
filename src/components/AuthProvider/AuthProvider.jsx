import {
  AuthContainer,
  AuthParagraph,
  Login,
  Logintext,
} from "./AuthProvider.styled";
import { useSession } from "@supabase/auth-helpers-react";
import { TbLogin } from "react-icons/tb";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import toast, { Toaster } from "react-hot-toast";
import fingerprint from "../../media/fingerprint.png";

const AuthProvider = ({ children }) => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isLoginTypeModal, setIsLoginTypeModal] = useState(true);

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
        <img src={fingerprint} width="120" alt="fingerpring" />
        <AuthParagraph>
          The library is available only to <span>authorized</span> users
        </AuthParagraph>
        <Login onClick={onOpenLoginModal}>
          <TbLogin />
          <Logintext>Login</Logintext>
        </Login>
      </AuthContainer>

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
    </>
  );
};

export default AuthProvider;

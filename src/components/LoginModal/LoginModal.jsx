import ReactDOM from "react-dom";
import {
  ModalBackdrop,
  Modal,
  CloseButton,
  LoginForm,
  Title,
  MailInput,
  ButtonSubmit,
  RegisterButton,
  GoogleLogin,
  OrElement,
} from "./LoginModal.styled";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import toast, { Toaster } from "react-hot-toast";

const ProfileModal = ({
  onCloseLoginModal,
  isLoginTypeModal,
  setIsLoginTypeModal,
  notifyOnMailSignUp,
  errorToast,
  setIsLoginModal,
}) => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const session = useSession();
  const supabase = useSupabaseClient();

  const errorName = () =>
    toast.error("The name must consist of at least 3 characters", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#fa4b34",
        secondary: "#ffffff",
      },
    });

  const errorMail = () =>
    toast.error("Write a valid email", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#fa4b34",
        secondary: "#ffffff",
      },
    });

  const errorPassword = () =>
    toast.error("The password must be at least 6 characters long", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#fa4b34",
        secondary: "#ffffff",
      },
    });

  const onNameChange = (e) => {
    if (e.target.value.length < 20) {
      setUserName(e.target.value);
    }
  };

  const onMailChange = (e) => {
    setUserMail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      errorToast();
    }
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const loginWithMail = async () => {
    if (userMail.length === 0) {
      errorMail();
      return;
    } else if (!emailRegex.test(userMail)) {
      errorMail();
      return;
    } else if (userPassword.length < 6) {
      errorPassword();
      return;
    }

    console.log("Login", userMail, userPassword);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: userMail,
      password: userPassword,
    });

    setIsLoginModal(false);
    if (error) {
      errorToast();
    }
  };

  const createUserWithMail = async () => {
    if (userName.length < 3) {
      errorName();
      return;
    } else if (userMail.length === 0) {
      errorMail();
      return;
    } else if (!emailRegex.test(userMail)) {
      errorMail();
      return;
    } else if (userPassword.length < 6) {
      errorPassword();
      return;
    }
    console.log("Registration", userName, userMail, userPassword);

    setIsLoginModal(false);
    notifyOnMailSignUp();
  };

  const sendLoginForm = (e) => {
    e.preventDefault();

    if (isLoginTypeModal === true) {
      loginWithMail();
    } else {
      createUserWithMail();
    }
  };

  const onRegisterButton = () => {
    setIsLoginTypeModal((prev) => !prev);
    setUserName("");
    setUserMail("");
    setUserPassword("");
  };

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseLoginModal}>
      <Modal>
        <CloseButton id="button-close" onClick={onCloseLoginModal}>
          <RiCloseLine />
        </CloseButton>
        {isLoginTypeModal && (
          <LoginForm onSubmit={sendLoginForm}>
            <Title>Login</Title>
            <MailInput
              placeholder="Mail"
              onChange={onMailChange}
              value={userMail}
            ></MailInput>
            <MailInput
              placeholder="Password"
              onChange={onPasswordChange}
              value={userPassword}
            ></MailInput>
            <ButtonSubmit type="submit">Login</ButtonSubmit>
            <RegisterButton onClick={() => onRegisterButton()}>
              Register
            </RegisterButton>
          </LoginForm>
        )}
        {!isLoginTypeModal && (
          <LoginForm onSubmit={sendLoginForm}>
            <Title>New user</Title>
            <MailInput
              placeholder="Username"
              onChange={onNameChange}
              value={userName}
            ></MailInput>
            <MailInput
              placeholder="Mail"
              onChange={onMailChange}
              value={userMail}
            ></MailInput>
            <MailInput
              placeholder="Create password"
              onChange={onPasswordChange}
              value={userPassword}
            ></MailInput>
            <ButtonSubmit type="submit">Create</ButtonSubmit>
            <RegisterButton onClick={() => onRegisterButton()}>
              Login
            </RegisterButton>
          </LoginForm>
        )}
        <OrElement>or</OrElement>
        <GoogleLogin onClick={() => loginWithGoogle()}>
          <FcGoogle />
          <p>Continue with Google</p>
        </GoogleLogin>
      </Modal>
    </ModalBackdrop>,
    document.body
  );
};

export default ProfileModal;

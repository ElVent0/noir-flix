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
  ModalContent,
  ModalPoster,
  PasswordContainer,
} from "./LoginModal.styled";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast, { Toaster } from "react-hot-toast";
import path from "../../media/login-2.jpg";
import { ThemeContext } from "../App";
import { useContext } from "react";

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
  const [showPassword, setShowPassword] = useState("");

  const supabase = useSupabaseClient();
  const themeType = useContext(ThemeContext);

  const errorToastCreation = () =>
    toast.error("Cannot create new user now", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#11b3ff",
        secondary: "#ffffff",
      },
    });

  const errorName = () =>
    toast.error("The name must consist of at least 3 characters", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#11b3ff",
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
        primary: "#11b3ff",
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
        primary: "#11b3ff",
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
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        errorToast();
      }
    } catch (e) {
      console.log("signInWithOAuth error", e);
    }

    // console.log(0, user);

    // try {
    //   const { error } = await supabase
    //     .from("users")
    //     .insert({
    //       user_id: user.id,
    //       user_name: userName,
    //       user_mail: userMail,
    //     })
    //     .single();

    //   // window.location.reload();
    //   if (error) {
    //     console.error(error);
    //     return;
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
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

    // console.log("Login", userMail, userPassword);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: userMail,
        password: userPassword,
      });

      setIsLoginModal(false);

      if (error) {
        errorToast();
      }
    } catch (e) {
      console.log("signInWithPassword error", e);
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
    // console.log("Registration", userName, userMail, userPassword);

    try {
      const { error } = await supabase.auth.signUp({
        email: userMail,
        password: userPassword,
        options: { data: { name: userName } },
      });

      if (error) {
        errorToastCreation();
      }
    } catch (e) {
      console.log("signUp error", e);
    }

    // console.log(1, data);

    // try {
    //   const { error } = await supabase
    //     .from("users")
    //     .insert({
    //       user_id: data.user.id,
    //       user_name: userName,
    //       user_mail: userMail,
    //     })
    //     .single();

    //   // window.location.reload();
    //   if (error) {
    //     console.error(error);
    //     return;
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

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

  function handleInvalid(event) {
    event.preventDefault();
    errorMail();
  }

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseLoginModal}>
      <Modal themeType={themeType}>
        <ModalPoster path={path}></ModalPoster>
        <ModalContent>
          <CloseButton id="button-close" onClick={onCloseLoginModal}>
            <RiCloseLine />
          </CloseButton>
          {isLoginTypeModal && (
            <LoginForm onSubmit={sendLoginForm}>
              <Title>Login</Title>
              <MailInput
                type="email"
                name="email"
                placeholder="Mail"
                onChange={onMailChange}
                value={userMail}
                onInvalid={handleInvalid}
              ></MailInput>
              <PasswordContainer>
                <MailInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={onPasswordChange}
                  value={userPassword}
                  autocomplete="off"
                ></MailInput>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <RiEyeFill /> : <RiEyeCloseLine />}
                </button>
              </PasswordContainer>
              <ButtonSubmit type="submit" themeType={themeType}>
                Login
              </ButtonSubmit>
              <RegisterButton onClick={() => onRegisterButton()}>
                Register
              </RegisterButton>
            </LoginForm>
          )}
          {!isLoginTypeModal && (
            <LoginForm onSubmit={sendLoginForm}>
              <Title>New user</Title>
              <MailInput
                type="text"
                name="name"
                placeholder="Username"
                onChange={onNameChange}
                value={userName}
                autocomplete="off"
              ></MailInput>
              <MailInput
                type="email"
                name="email"
                placeholder="Mail"
                onChange={onMailChange}
                value={userMail}
                onInvalid={handleInvalid}
              ></MailInput>
              <PasswordContainer>
                <MailInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  onChange={onPasswordChange}
                  value={userPassword}
                  autocomplete="off"
                ></MailInput>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <RiEyeFill /> : <RiEyeCloseLine />}
                </button>
              </PasswordContainer>
              <ButtonSubmit type="submit" themeType={themeType}>
                Create
              </ButtonSubmit>
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
        </ModalContent>
      </Modal>
      <Toaster
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
    </ModalBackdrop>,
    document.body
  );
};

export default ProfileModal;

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
import { Toaster } from "react-hot-toast";
import {
  errorName,
  errorMail,
  errorPassword,
  errorToastCreation,
  notifyOnMailSignUp,
  errorToast,
} from "../../utils/toasters.js";
import path from "../../media/login-2.jpg";
import { ThemeContext } from "../App";
import { useContext } from "react";
import {
  loginWithGoogle,
  loginWithMail,
  createUserWithMail,
} from "../../api/auth";

const ProfileModal = ({
  onCloseLoginModal,
  isLoginTypeModal,
  setIsLoginTypeModal,
  setIsLoginModal,
  isOpenModalLogin,
}) => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const supabase = useSupabaseClient();
  const themeType = useContext(ThemeContext);

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

  const sendLoginForm = (e) => {
    e.preventDefault();

    if (isLoginTypeModal === true) {
      loginWithMail(
        userMail,
        errorMail,
        userPassword,
        errorPassword,
        supabase,
        setIsLoginModal,
        errorToast
      );
    } else {
      createUserWithMail(
        userName,
        errorName,
        errorMail,
        userMail,
        userPassword,
        errorPassword,
        supabase,
        errorToastCreation,
        setIsLoginModal,
        notifyOnMailSignUp
      );
    }
  };

  const onRegisterButton = () => {
    setIsLoginTypeModal((prev) => !prev);
    setUserName("");
    setUserMail("");
    setUserPassword("");
  };

  const handleInvalid = (event) => {
    event.preventDefault();
    errorMail();
  };

  return ReactDOM.createPortal(
    <ModalBackdrop
      onClick={onCloseLoginModal}
      isOpenModalLogin={isOpenModalLogin}
    >
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
                autoComplete="off"
              ></MailInput>
              <PasswordContainer>
                <MailInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={onPasswordChange}
                  value={userPassword}
                  autoComplete="off"
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
                autoComplete="off"
              ></MailInput>
              <MailInput
                type="email"
                name="email"
                placeholder="Mail"
                onChange={onMailChange}
                value={userMail}
                onInvalid={handleInvalid}
                autoComplete="off"
              ></MailInput>
              <PasswordContainer>
                <MailInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  onChange={onPasswordChange}
                  value={userPassword}
                  autoComplete="off"
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
          <GoogleLogin
            onClick={() =>
              loginWithGoogle(supabase, errorToast, setIsLoginModal)
            }
          >
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

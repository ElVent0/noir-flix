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
} from "./LoginModal.styled";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const ProfileModal = ({ onCloseLoginModal, loginWithGoogle }) => {
  const [isLoginModal, setIsLoginModal] = useState(true);

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseLoginModal}>
      <Modal>
        <CloseButton id="button-close" onClick={onCloseLoginModal}>
          <RiCloseLine />
        </CloseButton>
        {isLoginModal && (
          <LoginForm>
            <Title>Login</Title>
            <MailInput placeholder="Mail"></MailInput>
            <MailInput placeholder="Password"></MailInput>
            <ButtonSubmit>Login</ButtonSubmit>
            <RegisterButton
              onClick={() => {
                setIsLoginModal((prev) => !prev);
              }}
            >
              Register
            </RegisterButton>
          </LoginForm>
        )}
        {!isLoginModal && (
          <LoginForm>
            <Title>New user</Title>
            <MailInput placeholder="Username"></MailInput>
            <MailInput placeholder="Mail"></MailInput>
            <MailInput placeholder="Create password"></MailInput>
            <ButtonSubmit>Create</ButtonSubmit>
            <RegisterButton
              onClick={() => {
                setIsLoginModal((prev) => !prev);
              }}
            >
              Login
            </RegisterButton>
          </LoginForm>
        )}
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

import ReactDOM from "react-dom";
import {
  ModalBackdrop,
  Modal,
  CloseButton,
  Logout,
  Profile,
  UserImage,
  UserName,
  UserMail,
  Statistics,
} from "./ProfileModal.styled";
import { RiCloseLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import path from "../../media/profile.jpg";

const ProfileModal = ({ onCloseProfileModal, onLogout, avatar }) => {
  const session = useSession();

  const userData = session.user.identities[0].identity_data;

  const userName = () => {
    if (session.user.app_metadata.provider === "google") {
      // console.log("google");
      return userData.full_name;
    } else if (session.user.app_metadata.provider === "email") {
      // console.log("email");
      return session.user.user_metadata.name;
    }
  };

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseProfileModal}>
      <Modal>
        <Statistics path={path}></Statistics>
        <Profile>
          <UserImage src={avatar} alt="User image" />
          <UserName>{userName()}</UserName>
          <UserMail>{userData.email}</UserMail>
          <Logout onClick={onLogout}>
            <TbLogout />
            <p>Logout</p>
          </Logout>
        </Profile>

        <CloseButton id="button-close" onClick={onCloseProfileModal}>
          <RiCloseLine />
        </CloseButton>
      </Modal>
    </ModalBackdrop>,
    document.body
  );
};

export default ProfileModal;

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

const ProfileModal = ({ onCloseProfileModal, onLogout }) => {
  const session = useSession();

  const userData = session.user.identities[0].identity_data;

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseProfileModal}>
      <Modal>
        <Profile>
          <UserImage src={userData.avatar_url} alt="User image" />
          <UserName>{userData.full_name}</UserName>
          <UserMail>{userData.email}</UserMail>
          <Logout onClick={onLogout}>
            <TbLogout />
            <p>Logout</p>
          </Logout>
        </Profile>
        <Statistics>Тут накидаю статистику</Statistics>
        <CloseButton id="button-close" onClick={onCloseProfileModal}>
          <RiCloseLine />
        </CloseButton>
      </Modal>
    </ModalBackdrop>,
    document.body
  );
};

export default ProfileModal;

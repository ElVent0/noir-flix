import ReactDOM from "react-dom";
import {
  ModalBackdrop,
  Modal,
  CloseButton,
  Logout,
} from "./ProfileModal.styled";
import { RiCloseLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { useState } from "react";

const ProfileModal = ({ onCloseProfileModal, onLogout }) => {
  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseProfileModal}>
      <Modal>
        <CloseButton id="button-close" onClick={onCloseProfileModal}>
          <RiCloseLine />
        </CloseButton>
        <Logout onClick={onLogout}>
          <TbLogout />
          <p>Logout</p>
        </Logout>
      </Modal>
    </ModalBackdrop>,
    document.body
  );
};

export default ProfileModal;

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
  UserImageContainer,
  UserImageCover,
  UserImageCoverContent,
  UnderModal,
  ShadowContainer,
} from "./ProfileModal.styled";
import { RiCloseLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import path from "../../media/profile.png";
import { logout } from "../../api/auth.jsx";
import { useState, useEffect, useRef } from "react";

const ProfileModal = ({
  onCloseProfileModal,
  setIsProfileModal,
  avatar,
  isOpenModalProfile,
  themeType,
}) => {
  const [rotation, setRotation] = useState(0);
  const [mouseX, setMouseX] = useState(1411);
  const [mouseY, setMouseY] = useState(74);

  const divRef = useRef(null);
  const session = useSession();
  const supabase = useSupabaseClient();

  const userData = session.user.identities[0].identity_data;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!divRef.current) return;
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const onLogout = () => {
    logout(supabase);
    setIsProfileModal(false);
    document.body.style.overflow = "auto";
  };

  return ReactDOM.createPortal(
    <ModalBackdrop
      onClick={onCloseProfileModal}
      isOpenModalProfile={isOpenModalProfile}
    >
      <Modal themetype={themeType}>
        <Profile path={path} themetype={themeType}>
          <UserImageContainer mouseX={mouseX} mouseY={mouseY}>
            <UserImage src={avatar} alt="User image" />
            <UserImageCover>
              <UserImageCoverContent
                ref={divRef}
                rotation={rotation}
              ></UserImageCoverContent>
            </UserImageCover>
          </UserImageContainer>
          <ShadowContainer themetype={themeType}></ShadowContainer>
          <UserName>
            {session.user.app_metadata.providers[
              session.user.app_metadata.providers.length - 1
            ] === "google" &&
              (session.user.user_metadata.username ||
                session.user.user_metadata.full_name)}
            {session.user.app_metadata.providers[
              session.user.app_metadata.providers.length - 1
            ] === "email" && session.user.user_metadata.username}
          </UserName>
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
      <UnderModal></UnderModal>
    </ModalBackdrop>,
    document.body
  );
};

export default ProfileModal;

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
import { useSession } from "@supabase/auth-helpers-react";
import path from "../../media/profile.jpg";
import logo from "../../media/noirflix-3-3.png";
import logoLight from "../../media/noirflix-3-4.png";
import { ThemeContext } from "../App";
import { useContext } from "react";

const ProfileModal = ({ onCloseProfileModal, onLogout, avatar }) => {
  const session = useSession();
  const themeType = useContext(ThemeContext);

  const userData = session.user.identities[0].identity_data;

  const userName = () => {
    if (session.user.app_metadata.provider === "google") {
      return userData.full_name;
    } else if (session.user.app_metadata.provider === "email") {
      return session.user.user_metadata.name;
    }
  };

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseProfileModal}>
      <Modal>
        <Statistics path={path}>
          <img src={themeType ? logo : logoLight} alt="logo" width="140px" />
        </Statistics>
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

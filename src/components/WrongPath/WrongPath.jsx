import { WrongPathStyled } from "./WrongPath.styled";
import imageLight from "../../media/404-2.png";
import imageDark from "../../media/404-1.png";
import { useContext } from "react";
import { ThemeContext } from "../App";

const WrongPath = () => {
  const themeType = useContext(ThemeContext);

  return (
    <WrongPathStyled>
      <img
        src={themeType ? imageLight : imageDark}
        alt="wrong path"
        width="400"
      />
      <p>This route does not exist</p>
    </WrongPathStyled>
  );
};

export default WrongPath;

import { createGlobalStyle } from "styled-components";

export const lightTheme = createGlobalStyle`
    :root {
      --accent: #11b3ff;
      --accent-hover: #179bd9;
      --accent-transparent: #11b4ffc3;
      --bg-grey: #f4f7f9;
      --bg-grey-transparent: #f4f7f9;
      --bg-super-transparent: #f4f7f9;
      --element-grey: #DADDE1;
      --hover-grey: #efefef;
      --text-main: #606770;
      --text-main-transparent: #60677099;
      --nav-black: #242424;
      --nav-black-transparent: #24242490;
      --pure-white: #fff;
      --more-check: linear-gradient(164deg, rgba(255,150,51,1) 0%, rgba(255,197,51,1) 100%);
  }`;

export const darkTheme = createGlobalStyle`
    :root {
      --accent: #11b3ff;
      --accent-hover: #179bd9;
      --accent-transparent: #11b4ffc3;
      --pure-white: #37373d;
      --bg-grey: #252526;
      --bg-grey-transparent: #252526c8;
      --bg-super-transparent: #25252640;
      --hover-grey: #303032;
      --element-grey: #DADDE160;
      --nav-black: #fff;
      --nav-black-transparent: #f4f7f9;
      --text-main: #efefef;
      --text-main-transparent: #DADDE1;
      --more-check: linear-gradient(164deg, rgba(255,150,51,1) 0%, rgba(255,197,51,1) 100%);
  }`;

export const starsColor = (stars) => {
  if (stars === 1) {
    return "#c2c2c2";
  } else if (stars === 2) {
    return "#85c7e6";
  } else if (stars === 3) {
    return "#6492ff";
  } else if (stars === 4) {
    return "#af4dff";
  } else if (stars === 5) {
    return "#e32fff";
  } else if (stars === 0) {
    return "--accent";
  }
};

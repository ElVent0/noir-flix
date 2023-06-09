import { AppStyled } from "./App.styled.jsx";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout.jsx";
import Research from "../pages/Research/Research";
import Library from "../pages/Library/Library";
import { useState, useEffect, createContext } from "react";
import { createGlobalStyle } from "styled-components";

export const ThemeContext = createContext();

const App = () => {
  const [themeType, setThemeType] = useState(false);
  const [recentList, setRecentList] = useState(
    JSON.parse(localStorage.getItem("RecentListForNoirflix"))
  );

  const onAddToRecentMovies = (id) => {
    let newRecentList = JSON.parse(
      localStorage.getItem("RecentListForNoirflix")
    );

    newRecentList = newRecentList.filter((item) => item !== id);

    newRecentList.unshift(id);

    if (newRecentList.length >= 7) {
      newRecentList.pop();
    }

    localStorage.setItem(
      "RecentListForNoirflix",
      JSON.stringify(newRecentList)
    );

    setRecentList(newRecentList);
  };

  const LightTheme = createGlobalStyle`
    :root {
      --accent: #11b3ff;
      --accent-hover: #179bd9;
      --accent-transparent: #11b4ffc3;
      --bg-grey: #f4f7f9;
      --element-grey: #DADDE1;
      --hover-grey: #efefef;
      --text-main: #606770;
      --text-main-transparent: #60677099;
      --nav-black: #242424;
      --nav-black-transparent: #24242490;
      --pure-white: #fff;
  }`;

  const DarkTheme = createGlobalStyle`
    :root {
      --accent: #11b3ff;
      --accent-hover: #179bd9;
      --accent-transparent: #11b4ffc3;
      --pure-white: #37373d;
      --bg-grey: #252526;
      --hover-grey: #303032;
      --element-grey: #DADDE160;
      --nav-black: #fff;
      --nav-black-transparent: #f4f7f9;
      --text-main: #efefef;
      --text-main-transparent: #DADDE1;
  }`;

  useEffect(() => {
    if (localStorage.getItem("noirflixCurrentTheme")) {
      try {
        const item = localStorage.getItem("noirflixCurrentTheme");
        setThemeType(JSON.parse(item));
      } catch (e) {
        console.error("Error getting item from localStorage:", e);
      }
    }
  }, []);

  let GlobalStyle = themeType ? LightTheme : DarkTheme;

  const themeToggle = () => {
    setThemeType((prev) => !prev);
    try {
      localStorage.setItem("noirflixCurrentTheme", JSON.stringify(!themeType));
    } catch (e) {
      console.error("Error setting item in localStorage:", e);
    }
  };

  return (
    <ThemeContext.Provider value={themeType}>
      <AppStyled>
        <Routes>
          <Route path="/" element={<SharedLayout themeToggle={themeToggle} />}>
            <Route
              index
              element={
                <Research
                  onAddToRecentMovies={onAddToRecentMovies}
                  recentList={recentList}
                  setRecentList={setRecentList}
                />
              }
            />
            <Route
              path="/library"
              element={<Library onAddToRecentMovies={onAddToRecentMovies} />}
            />
            {/* <Route path="/сollection" element={<Collection />} /> */}
          </Route>
        </Routes>

        <GlobalStyle />
      </AppStyled>
    </ThemeContext.Provider>
  );
};

export default App;

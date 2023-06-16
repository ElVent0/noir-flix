import { AppStyled } from "./App.styled.jsx";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout.jsx";
import Research from "../pages/Research/Research";
import Library from "../pages/Library/Library";
import { useState, useEffect, createContext } from "react";
import { lightTheme, darkTheme } from "../utils/colors.js";

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

  const themeToggle = () => {
    setThemeType((prev) => !prev);
    try {
      localStorage.setItem("noirflixCurrentTheme", JSON.stringify(!themeType));
    } catch (e) {
      console.error("Error setting item in localStorage:", e);
    }
  };

  let GlobalStyle = themeType ? lightTheme : darkTheme;

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
          </Route>
        </Routes>
        <GlobalStyle />
      </AppStyled>
    </ThemeContext.Provider>
  );
};

export default App;

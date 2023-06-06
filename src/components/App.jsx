import { AppStyled } from "./App.styled.jsx";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout.jsx";
import Research from "../pages/Research/Research";
import Library from "../pages/Library/Library";
import { useState } from "react";

const App = () => {
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

  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
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
    </AppStyled>
  );
};

export default App;

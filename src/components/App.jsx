import { AppStyled } from "./App.styled.jsx";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout.jsx";
import Research from "../pages/Research/Research";
import Library from "../pages/Library/Library";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Research />} />
          <Route path="/library" element={<Library />} />
          {/* <Route path="/сollection" element={<Collection />} /> */}
        </Route>
      </Routes>
    </AppStyled>
  );
};

export default App;

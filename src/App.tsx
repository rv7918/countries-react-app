import Header from "./components/header/Header";
import GridViewModel from "./components/grid/GridViewModel";
import Favourites from "./components/favourites/Favourites";
import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<GridViewModel />} />
            <Route path="/search" element={<GridViewModel />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </DataProvider>
    </>
  );
};

export default App;

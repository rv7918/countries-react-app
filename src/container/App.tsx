import Header from "../components/header/Header";
import GridViewModel from "../components/grid/GridViewModel";
import Favourites from "../components/favourites/Favourites";
import { DataProvider } from "../context/DataContext";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";
import SearchViewModel from "../components/search/SearchViewModel";

const App: React.FC = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <div className={`${styles?.body} container`}>
          <Routes>
            <Route path="/" element={<Navigate to="/search" />} />
            <Route path="/filter" element={<GridViewModel />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/search" element={<SearchViewModel />} />
          </Routes>
        </div>
      </DataProvider>
    </>
  );
};

export default App;

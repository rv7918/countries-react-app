import Header from "../components/header/Header";
import GridViewModel from "../components/grid/GridViewModel";
import Favourites from "../components/favourites/Favourites";
import { DataProvider } from "../context/DataContext";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <div className={`${styles?.body} container`}>
          <Routes>
            <Route path="/" element={<Navigate to="/search" />} />
            <Route path="/search" element={<GridViewModel />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </DataProvider>
    </>
  );
};

export default App;

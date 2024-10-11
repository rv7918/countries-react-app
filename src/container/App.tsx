import Header from "../components/header/Header";
import { DataProvider } from "../context/DataContext";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";
import { lazy, Suspense } from "react";
import SuspenseLoader from "../components/loader/Loader";

const GridViewModel = lazy(() => import("../components/grid/GridViewModel"));
const Favourites = lazy(() => import("../components/favourites/Favourites"));
const SearchViewModel = lazy(
  () => import("../components/search/SearchViewModel")
);

const routes = [
  {
    path: "/",
    element: <Navigate to="/search" />,
  },
  {
    path: "filter",
    element: <GridViewModel />,
  },
  {
    path: "favourites",
    element: <Favourites />,
  },
  {
    path: "search",
    element: <SearchViewModel />,
  },
];

const App: React.FC = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <div className={styles?.body}>
          <div className="container">
            <Routes>
              {routes.map(
                (
                  item: { path: string; element: JSX.Element },
                  index: number
                ) => {
                  return (
                    <Route
                      key={index}
                      path={item?.path}
                      element={
                        <Suspense fallback={<SuspenseLoader />}>
                          {item.element}
                        </Suspense>
                      }
                    />
                  );
                }
              )}
            </Routes>
          </div>
        </div>
      </DataProvider>
    </>
  );
};

export default App;

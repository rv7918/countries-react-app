import Header from "./components/header/Header";
import GridViewModel from "./components/grid/GridViewModel";
import Favourites from "./components/favourites/Favourites";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <div className="container">
          <Favourites />
          <GridViewModel />
        </div>
      </DataProvider>
    </>
  );
};

export default App;

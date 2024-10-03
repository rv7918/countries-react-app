import Header from "./components/header/Header";
import GridViewModel from "./components/grid/GridViewModel";
import Favourites from "./components/favourites/Favourites";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Favourites />
        <GridViewModel />
      </div>
    </>
  );
};

export default App;

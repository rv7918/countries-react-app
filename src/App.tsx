import Header from "./components/header/Header";
import GridViewModel from "./components/grid/GridViewModel";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <GridViewModel />
      </div>
    </>
  );
};

export default App;

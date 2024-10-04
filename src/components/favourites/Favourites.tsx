import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import GridViewList from "../grid/GridViewList";

const Favourites = () => {
  const { addedItems } = useContext(DataContext);

  return (
    <>
      <h3 className="mt-3 mb-3">Favourites</h3>
      <GridViewList gridData={addedItems} />
    </>
  );
};

export default Favourites;

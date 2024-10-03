import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import GridViewList from "../grid/GridViewList";

const Favourites = () => {
  const { addedItems } = useContext(DataContext);

  return (
    <>
      <GridViewList gridData={addedItems} />
    </>
  );
};

export default Favourites;

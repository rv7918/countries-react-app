import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

const Favourites = () => {
  const { addedItems } = useContext(DataContext);

  useEffect(() => {}, [addedItems]);

  return (
    <>
      <button type="button" className="btn btn-primary position-relative mt-3">
        Favourites
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {addedItems?.length}
        </span>
      </button>
    </>
  );
};

export default Favourites;

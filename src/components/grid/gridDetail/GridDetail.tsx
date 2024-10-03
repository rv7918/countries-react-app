import { Country } from "../Grid.interface";
import { useEffect, useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { useLocation } from "react-router-dom";
import styles from "./GridDetail.module.css";

const GridDetail: React.FC<{
  rowData: Country;
  close: boolean;
  setClose: (close: boolean) => void;
}> = ({ rowData: rowData, close: close, setClose: setClose }) => {
  const { addedItems, setAddedItems } = useContext(DataContext);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const location = useLocation();
  const addFavourites = () => {
    const updatedItem = [rowData, ...addedItems];
    setAddedItems(updatedItem);
    localStorage.setItem("favourites", JSON.stringify(updatedItem));
    setIsFavourite(true);
  };

  const uniqueId = `${rowData?.name?.common}-${rowData?.name?.official}`;

  useEffect(() => {
    setIsFavourite(
      addedItems.some(
        (item) => `${item?.name?.common}-${item?.name?.official}` === uniqueId
      )
    );
  }, [addedItems, uniqueId]);

  const removeFavourites = () => {
    const updatedItems = addedItems.filter((item) => {
      const itemUniqueId = `${item?.name?.common}-${item?.name?.official}`;
      return itemUniqueId !== uniqueId; // Remove only this item
    });

    setAddedItems(updatedItems);
    localStorage.setItem("favourites", JSON.stringify(updatedItems));
    setClose(true);
    setIsFavourite(false);
  };

  useEffect(() => {
    setClose(true);
  }, [setClose]);

  return (
    <>
      <div className={`${styles?.cardBackground} card mt-5 mb-5`}>
        {close && (
          <div className="alert alert-dark text-center" role="alert">
            Click on a country for more details!
          </div>
        )}
        {!close && rowData && (
          <div className="card-body">
            <div className="row">
              <div className="col-md-2">
                <img
                  className="mr-3"
                  src={rowData?.flags?.svg}
                  alt="flag image"
                  width={"100%"}
                />
              </div>
              <div className="col-md-8">
                <h3 className="mt-0">{rowData?.name?.official}</h3>
                <h5>{rowData?.name?.common}</h5>
                <p>
                  Region: {rowData?.region} <br />
                  Capital: {rowData?.capital} <br />
                  Population: {rowData?.population} <br />
                  Languages: {Object.values(rowData?.languages).join(", ")}
                </p>
              </div>
              <div className="col-md-2 float-right">
                {location?.pathname === "/search" && (
                  <button
                    className="btn btn-primary"
                    onClick={addFavourites}
                    disabled={isFavourite}
                  >
                    {isFavourite ? "Favourited" : "Favourite"}
                  </button>
                )}
                {location?.pathname === "/favourites" && (
                  <button
                    className="btn btn-primary"
                    onClick={() => removeFavourites()}
                  >
                    Delete
                  </button>
                )}
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => setClose(true)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GridDetail;

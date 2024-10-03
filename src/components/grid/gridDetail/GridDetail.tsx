import { Country } from "../Grid.interface";
import { useEffect, useState } from "react";
const GridDetail: React.FC<{
  rowData: Country;
  close: boolean;
  setClose: (close: boolean) => void;
}> = ({ rowData: rowData, close: close, setClose: setClose }) => {
  // const [favArray, setFavArray] = useState([])
  const [addedItems, setAddedItems] = useState([]);

  const addFavourites = () => {
    addedItems?.unshift(rowData);
    localStorage.setItem("favourites", JSON.stringify(addedItems));
  };

  useEffect(() => {
    setClose(true);
    const storedItems = JSON.parse(localStorage.getItem("favourites")) ?? [];
    setAddedItems(storedItems);
  }, [setClose]);

  return (
    <>
      <div className="card mt-5 mb-5" style={{ height: "200px" }}>
        {close && (
          <div className="alert alert-light text-center" role="alert">
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
                <button
                  className="btn btn-primary "
                  onClick={addFavourites}
                  disabled={addedItems?.includes(rowData)}
                >
                  Favourite
                </button>
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

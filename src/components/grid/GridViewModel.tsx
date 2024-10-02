import { useState, useEffect } from "react";
import { getCountries } from "./GridModel";
import GridViewList from "./GridViewList";

const GridViewModel = () => {
  const [gridData, setGridData] = useState([]);

  const getData = async () => {
    const tableData = await getCountries();
    setGridData(tableData);
  };

  useEffect(() => {
    if (gridData.length === 0) {
      getData();
    }
  }, [gridData]);

  return (
    <>
      <GridViewList gridData={gridData} />
    </>
  );
};

export default GridViewModel;

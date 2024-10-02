import { useState, useEffect } from "react";
import { getCountries } from "./GridModel";
import GridViewList from "./GridViewList";
import { Country } from "./Grid.interface";

const GridViewModel: React.FC = () => {
  const [gridData, setGridData] = useState<Country[]>([]);

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

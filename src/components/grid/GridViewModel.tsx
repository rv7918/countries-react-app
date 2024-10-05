import { useState, useEffect } from "react";
import { getCountries } from "./GridModel";
import GridViewList from "./GridViewList";
import { Country } from "./Grid.interface";

const GridViewModel: React.FC = () => {
  const [gridData, setGridData] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>(null);

  const getData = async () => {
    try {
      const tableData = await getCountries();
      setGridData(tableData);
      if (!tableData) {
        throw new Error("Network response was not ok.");
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (gridData.length === 0) {
      getData();
    }
  }, [gridData]);

  return (
    <>
      <h3 className="mt-3 mb-3">Filter</h3>
      {loading ? (
        <div className="mt-5">Loading...</div>
      ) : error ? (
        <>Error: {error}</>
      ) : (
        <GridViewList gridData={gridData} />
      )}
    </>
  );
};

export default GridViewModel;

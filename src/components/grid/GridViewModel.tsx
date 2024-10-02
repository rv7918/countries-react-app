import { useState, useEffect, useMemo } from "react";
import { getCountries } from "./GridModel";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const GridViewModel = () => {
  const [gridData, setGridData] = useState([]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      filter: true,
      floatingFilter: true,
    };
  }, []);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
    { field: "name.common", headerName: "Name", flex: 1 },
    { field: "flag", flex: 0 },
    { field: "population", flex: 1 },
    {
      headerName: "Currencies",
      flex: 1,
      valueGetter: (params) => {
        const currencies = params.data.currencies;
        if (currencies && typeof currencies === "object") {
          return Object.keys(currencies)
            .map((key) => {
              const { name, symbol } = currencies[key] || {};
              return name ? `${name} (${symbol || ""})` : "";
            })
            .filter(Boolean)
            .join(", ");
        }
        return "";
      },

      comparator: (a, b, nodeA, nodeB) => {
        const currenciesA = nodeA.data.currencies || {};
        const currenciesB = nodeB.data.currencies || {};

        const currencyNamesA = Object.keys(currenciesA)
          .map((key) => currenciesA[key].name)
          .filter(Boolean)
          .sort()
          .join(", ");
        const currencyNamesB = Object.keys(currenciesB)
          .map((key) => currenciesB[key].name)
          .filter(Boolean)
          .sort()
          .join(", ");

        return currencyNamesA.localeCompare(currencyNamesB);
      },
    },
    {
      headerName: "Languages",
      flex: 1,
      valueGetter: (params) => {
        const languages = params.data.languages;
        if (languages && typeof languages === "object") {
          return Object.values(languages).filter(Boolean).join(", ");
        }
        return "";
      },
      comparator: (a, b, nodeA, nodeB) => {
        const languagesA = nodeA.data.languages || {};
        const languagesB = nodeB.data.languages || {};

        const languageNamesA = Object.values(languagesA)
          .filter(Boolean)
          .sort()
          .join(", ");
        const languageNamesB = Object.values(languagesB)
          .filter(Boolean)
          .sort()
          .join(", ");

        return languageNamesA.localeCompare(languageNamesB);
      },
    },
  ]);

  const getData = async () => {
    const tableData = await getCountries();
    setGridData(tableData);
  };

  useEffect(() => {
    if (gridData.length === 0) {
      getData();
    }
  }, [gridData]);

  const onRowClick = (e) => {
    console.log("row clicked", e.rowIndex);
  };

  return (
    <>
      {/* {JSON.stringify(gridData)} */}
      <div className="ag-theme-quartz mt-5" style={{ height: 650 }}>
        <AgGridReact
          rowData={gridData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={15}
          paginationPageSizeSelector={[15, 30, 60, 100]}
          onRowClicked={onRowClick}
        />
      </div>
    </>
  );
};

export default GridViewModel;

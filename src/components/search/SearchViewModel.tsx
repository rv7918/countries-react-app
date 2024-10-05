import { searchQuery } from "./SearchModel";
import { useState } from "react";
import GridViewList from "../grid/GridViewList";
import styles from "./Search.module.css";

const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState<string>("name");
  const [value, setValue] = useState<string>("");

  const searchQueryResult = async (query: string, value: string) => {
    setError(null);
    setData(null);
    try {
      const responseQuery = await searchQuery(query, value);
      setData(responseQuery);
    } catch (error) {
      setError(error?.message);
    }
  };

  const onSearchChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValue(value);
  };

  const onClickSearch = () => {
    return searchQueryResult(query, value);
  };

  const onChangeValueOption = (e) => {
    e.preventDefault();
    const returnValue = e.target.value;
    setQuery(returnValue);
  };

  return (
    <>
      <h3 className="mt-3">Search</h3>

      <div className="row g-2 mt-2">
        <div className="col-md-8">
          <input
            className={`${styles.clear} form-control form-control-lg`}
            type="search"
            placeholder="Search..."
            aria-label="Search"
            onChange={onSearchChange}
            value={value}
            data-testid="search-input"
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select form-select-lg"
            aria-label="Select an option"
            onChange={onChangeValueOption}
          >
            <option value="name">Name</option>
            <option value="lang">Language</option>
            <option value="currency">Currency</option>
          </select>
        </div>

        <div className="col-md-1">
          <button
            className="btn btn-primary btn-lg w-100"
            onClick={onClickSearch}
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
      <br />
      {error && <div className="mt-2 mb-4">Error: {error}</div>}
      <GridViewList gridData={data} loading={false} />
    </>
  );
};

export default Search;

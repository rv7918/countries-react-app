import { searchQuery } from "./SearchModel";
import { useState } from "react";
import GridViewList from "../grid/GridViewList";
import Search from "./Search";

const SearchViewModel = () => {
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
      <Search
        onSearchChange={onSearchChange}
        onChangeValueOption={onChangeValueOption}
        value={value}
        onClickSearch={onClickSearch}
      />
      <br />
      {error && <div className="mt-2 mb-4">Error: {error}</div>}
      <GridViewList gridData={data} loading={false} />
    </>
  );
};

export default SearchViewModel;

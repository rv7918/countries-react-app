import { searchQuery } from "./SearchModel";
import { useState, useCallback } from "react";
import GridViewList from "../grid/GridViewList";
import Search from "./Search";

const SearchViewModel = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState<string>("name");
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const searchQueryResult = async (query: string, value: string) => {
    setError(null);
    setData(null);
    setLoading(true);
    try {
      const responseQuery = await searchQuery(query, value);
      setData(responseQuery);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const onSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setValue(e.target.value);
    },
    []
  );

  const onClickSearch = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      return searchQueryResult(query, value);
    },
    [query, value]
  );

  const onChangeValueOption = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      setQuery(e.target.value);
    },
    []
  );

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
      <GridViewList gridData={data} loading={loading} />
    </>
  );
};

export default SearchViewModel;

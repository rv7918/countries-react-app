import React from "react";
import styles from "./Search.module.css";
import { ISearchProps } from "./Search.interface";

const Search: React.FC<ISearchProps> = ({
  onSearchChange,
  onChangeValueOption,
  value,
  onClickSearch,
}) => {
  return (
    <>
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
    </>
  );
};

export default React.memo(Search);

import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Header: React.FC = () => {
  const { addedItems } = useContext(DataContext);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          {/* Left side: Navbar brand */}
          <a className="navbar-brand" href="#">
            React Countries
          </a>

          {/* Right side: Buttons */}
          <div>
            <button
              className="btn btn-primary btn-sm"
              style={{ marginRight: "10px" }}
            >
              Search
            </button>
            <button className="btn btn-primary position-relative btn-sm">
              Favourites
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {addedItems?.length}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

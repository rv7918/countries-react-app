import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

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
            <Link to={"/search"}>
              <button className={`${styles?.search} btn btn-secondary btn-sm`}>
                Search
              </button>
            </Link>
            <Link to={"/favourites"}>
              <button className="btn btn-secondary position-relative btn-sm">
                Favourites
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {addedItems?.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

// import { DataContext } from "../../context/DataContext";
// import { useContext } from "react";
const Header: React.FC = () => {
  //   const { name } = useContext(DataContext);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            React Countries
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;

const Favourites = () => {
  return (
    <>
      <button type="button" className="btn btn-primary position-relative mt-3">
        Favourites
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {0}
        </span>
      </button>
    </>
  );
};

export default Favourites;

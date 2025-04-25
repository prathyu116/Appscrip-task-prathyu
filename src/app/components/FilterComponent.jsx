import Colllapse from "./Colllapse";
import "../styles/filter.css";

const FilterComponent = ({
  onFilterChange,
  onClearFilters,
  selectedFilters,
}) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    onFilterChange(value, checked);
  };

  const isAnyFilterActive = selectedFilters.length > 0;

  return (
    
    <div className="filter-box">
      <div className="filter-box-title">
        <input type="checkbox" />
        <h4>CUSTOMIZABLE</h4>
      </div>
      <Colllapse title="IDEAL FOR" title2="ALL">
        <div className="collaps-body">
          <div>
            <p
              onClick={isAnyFilterActive ? onClearFilters : null}
              style={{
                textDecoration: "underline",
                color: isAnyFilterActive ? "black" : "gray",
                cursor: isAnyFilterActive ? "pointer" : "default",
                marginBottom: "10px",
                marginTop: "30px",
              }}
            >
              Unselect All
            </p>
          </div>
          <div>
            <input
              type="checkbox"
              value="men's clothing"
              checked={selectedFilters.includes("men's clothing")}
              onChange={handleCheckboxChange}
            />{" "}
            MEN
          </div>
          <div>
            <input
              type="checkbox"
              value="women's clothing"
              checked={selectedFilters.includes("women's clothing")}
              onChange={handleCheckboxChange}
            />{" "}
            WOMEN
          </div>

          <div>
            <input
              type="checkbox"
              value="kid's clothing"
              checked={selectedFilters.includes("kid's clothing")}
              onChange={handleCheckboxChange}
            />{" "}
            KID
          </div>
        </div>
      </Colllapse>{" "}
      <br />
      <Colllapse title="OCCATION" title2="ALL"></Colllapse> <br />
      <Colllapse title="WORK" title2="ALL"></Colllapse> <br />
      <Colllapse title="FABRIC" title2="ALL"></Colllapse> <br />
      <Colllapse title="RAW METERIAL" title2="ALL"></Colllapse> <br />
      <Colllapse title="SEGMENT" title2="ALL"></Colllapse> <br />
      <Colllapse title="SUITABLE FOR" title2="ALL"></Colllapse> <br />
        <Colllapse title="PATTERN" title2="ALL"></Colllapse> <br />
    </div>
  );
};

export default FilterComponent;

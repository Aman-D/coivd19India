import React from "react";
import "./searchBar.style.scss";

import { connect } from "react-redux";
import { filterState } from "../../redux/app/app.action";

const SearchBar = ({ filterState }) => {
  const handelChange = (e) => {
    filterState(e.target.value);
  };
  return (
    <div className="search-bar-container">
      <input
        type="text"
        name="search"
        onChange={handelChange}
        placeholder="Search States"
      />
    </div>
  );
};

const mapDispatchProps = (dispatch) => ({
  filterState: (search) => dispatch(filterState(search)),
});

export default connect(null, mapDispatchProps)(SearchBar);

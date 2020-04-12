import React from "react";
import "./state.style.scss";

import Card from "../card/card.componenet";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectStates,
  selectFIlteredState,
} from "../../redux/app/app.selector";
import SearchBar from "../search-bar/searchBar.componenet";

const StateArea = ({ filterState }) => {
  return (
    <div className="state-container">
      <SearchBar className="search-container" />
      <div className="state">
        {filterState.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  states: selectStates,
  filterState: selectFIlteredState,
});

export default connect(mapStateToProps)(StateArea);

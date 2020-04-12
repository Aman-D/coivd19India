import React from "react";
import "./state.style.scss";

import Card from "../card/card.componenet";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectStates,
  selectFilteredState,
} from "../../redux/app/app.selector";
import SearchBar from "../search-bar/searchBar.componenet";

const StateArea = ({ filterStates, states }) => {
  return (
    <div className="state-container">
      <SearchBar className="search-container" />
      <div className="state">
        {filterStates.length !== 0
          ? filterStates.map((data, index) => <Card key={index} data={data} />)
          : states.map((data, index) => <Card key={index} data={data} />)}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  states: selectStates,
  filterStates: selectFilteredState,
});

export default connect(mapStateToProps)(StateArea);

import React from "react";
import "./state.style.scss";

import Card from "../card/card.componenet";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectStates } from "../../redux/app/app.selector";

const StateArea = ({ states }) => {
  return (
    <div className="state-container">
      {states.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  states: selectStates,
});

export default connect(mapStateToProps)(StateArea);

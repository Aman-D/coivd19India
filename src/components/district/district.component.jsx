import React from "react";
import "./district.style.scss";
// import Card from "../card/card.componenet";
import { createStructuredSelector } from "reselect";
import { selectCurrentDistricts } from "../../redux/app/app.selector";

import { connect } from "react-redux";

const DistrictArea = ({ current_state }) => {
  if (current_state.length > 0) {
    const { state, District } = current_state[0];

    return (
      <div className="dist-container">
        <h3 className="dist-title">{state}</h3>
        {District
          ? District.map(({ District, confirmed }) => (
              <div className="dist-card" key={District}>
                <h3>{District}</h3>
                <span>Confirmed: {confirmed}</span>
              </div>
            ))
          : ""}
      </div>
    );
  } else {
    return (
      <div className="dist-container">
        <h3 className="dist-title">No Data of Districts</h3>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  current_state: selectCurrentDistricts,
});

export default connect(mapStateToProps)(DistrictArea);

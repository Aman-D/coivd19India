import React from "react";
import "./district.style.scss";
import Card from "../card/card.componenet";
import { createStructuredSelector } from "reselect";
import { selectCurrentDistricts } from "../../redux/app/app.selector";

import { connect } from "react-redux";

const DistrictArea = ({ current_state }) => {
  const { state, district } = current_state[0];

  return (
    <div className="dist-container">
      <h3 className="dist-title">{state}</h3>
      {district
        ? Object.entries(district).map(([key, value]) => (
            <div className="dist-card" key={key}>
              <h3>{value.District}</h3>
              <span>Confirmed: {value.confirmed}</span>
            </div>
          ))
        : ""}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  current_state: selectCurrentDistricts,
});

export default connect(mapStateToProps)(DistrictArea);

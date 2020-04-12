import React from "react";
import "./card.style.scss";

import { connect } from "react-redux";
import { setCurrentDistrict } from "../../redux/app/app.action";

const Card = ({ data, setCurrentDistrict }) => {
  const { state, deaths, confirmed, recovered, active } = data;

  return (
    <div
      id="card-container"
      className="card-container"
      onClick={() => {
        setCurrentDistrict(state);
      }}
      style={{
        backgroundColor: `rgba(33,200,${252 - confirmed * 0.001},${
          recovered !== "0" ? (confirmed / recovered) * 0.1 : 0.1
        })`,
      }}
    >
      <h1 className="title">{state}</h1>
      <div className="cases">
        <div className="tab">
          <span className="count">{confirmed}</span>
          <h4>Confirmed</h4>
        </div>
        <div className="tab">
          <span className="count">{recovered}</span>
          <h4>Recovered</h4>
        </div>
        <div className="tab">
          <span className="count">{deaths}</span>
          <h4>Deaths</h4>
        </div>
        <div className="tab">
          <span className="count">{active}</span>
          <h4>Active</h4>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentDistrict: (state) => dispatch(setCurrentDistrict(state)),
});
export default connect(null, mapDispatchToProps)(Card);

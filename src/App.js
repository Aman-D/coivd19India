import React from "react";
import { connect } from "react-redux";

import DailyArea from "./components/daily/daily.component";
import DistrictArea from "./components/district/district.component";
import StateArea from "./components/state/state.component";
import Video from "./components/covid-video/video.component";
import { fetchData, fetchDailyData } from "./api/api";

import { setData, setCurrentDistrict } from "./redux/app/app.action";
import { setChartData } from "./redux/chart/chart.action";
import "./App.scss";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    const dailyData = await fetchDailyData();
    this.props.setData(data);
    this.props.setCurrentState("Andhra Pradesh");
    this.props.setChartData(dailyData);
  }
  render() {
    return (
      <div className="appContainer">
        <h1 className="appTitle">Covid Statics In India</h1>
        <DailyArea />
        <div className="appSubContainer">
          <h1 className="appTitle">State And District Wise Stats</h1>
          <div className="stateDistrictContainer">
            <DistrictArea />
            <StateArea />
          </div>
        </div>
        <div className="videoContainer">
          <Video />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
  setCurrentState: (state) => dispatch(setCurrentDistrict(state)),
  setChartData: (chart_data) => dispatch(setChartData(chart_data)),
});
export default connect(null, mapDispatchToProps)(App);

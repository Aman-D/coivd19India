import React from "react";
import "./daily.style.scss";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCategories,
  selectSeries,
} from "../../redux//chart/chart.selector";

const DailyArea = ({ categories, series }) => {
  const data = {
    options: {
      chart: {
        id: "basic-bar",

        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: [],
          },
          autoSelected: "zoom",
        },
      },
      colors: ["#EC7063", "#F4D03F", "#2ECC71"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Daily Stats of Covid Cases",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },

      xaxis: {
        type: "datetime",
        categories: categories,

        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#78909C",
          height: 6,
        },
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "Number of Cases",
          style: {
            fontSize: "15px",
          },
        },
      },
      legend: {
        show: true,
        position: "top",
      },
    },

    series: series,
  };

  return (
    <div className="daily-container">
      <div className="chart">
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          width="100%"
          height="450px"
          className="stats"
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
  series: selectSeries,
});
export default connect(mapStateToProps)(DailyArea);

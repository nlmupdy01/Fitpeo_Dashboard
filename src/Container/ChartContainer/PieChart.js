import React from "react";
import ReactDOM from "react-dom";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
// import "./ibm-plex-font.css";

const  PieChart = () => {
  const chartRef = React.useRef();

  React.useLayoutEffect(() => {
    window.chart = chartRef?.current?.chart;
  });

  const state = {
    data: [
    //   {
    //     group: "Easy",
    //     value: 20000
    //   },
    //   {
    //     group: "Lemon",
    //     value: 65000
    //   },
      {
        group: "Shine",
        value: 75000
      },
    //   {
    //     group: "Bus",
    //     value: 1200
    //   },
    //   {
    //     group: "Quandry Far",
    //     value: 10000
    //   },
      {
        group: "Misc",
        value: 25000
      },
      {
        group: "Give 5",
        value: 500
      },
      {
        group: "Super small",
        value: 25
      },
      {
        group: "Ultra small",
        value: 12
      },
      {
        group: "Atom",
        value: 1
      },
      {
        group: "Quark",
        value: 0.1
      }
    ],
    options: {
      title: "Donut",
      resizable: true,
      donut: {
        center: {
          label: "Browsers"
        }
      },
      height: "400px"
    }
  };

  return (
    <DonutChart
      ref={chartRef}
      data={state.data}
      options={state.options}
    ></DonutChart>
  );
};
export default PieChart;

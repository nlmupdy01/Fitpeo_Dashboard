import React from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";


class SidebarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return Number(val).toLocaleString() + "$";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Aprl",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          position: "bottom",
          labels: {
            offsetY: 0
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs_: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: false,
            offsetY: -35
          }
        },
        fill: {
          gradient: {
            shade: "light",
            type: "horizontal",
            // shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 200, 100, 100 ,60,10,30 ,56,100]
          }
        },
        yaxis: {
          axisBorder: {
            // show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return Number(val).toLocaleString() + "$";
            }
          }
        },
        title: {
          text: "Revenus des 12 derniers mois",
          floating: true,
          offsetY: 0,
          align: "center",
          style: {
            color: "#444"
          }
        },
        chart: {
          animations: {
            enabled: false
          }
        }
      },
      series: [
        {
          name: "Chiffre d'affaires",
          data: [8976, 12987, 9853, 10986, 3571 ,1054,754,500,5678 ,2000,10987,6000]
        }
      ]
    };

    setTimeout(() => {
      this.setState({
        series: [
          {
            name: "Chiffre d'affaires",
            data: [8976, 12987, 9853,167, 3571 ,1054,7054,5000,5678 ,2000,10987,6000]
          }
        ]
      });
    }, 4000);
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          // height="300"
        />
      </div>
    );
  }
}

export default SidebarChart; 

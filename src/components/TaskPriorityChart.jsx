/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";

export default function TaskPriorityChart({ d }) {
  const data = {
    series: d,
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Low", "Medium", "High"],
      responsive: [
        {
          breakpoint: 580,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="donut"
          width={430}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

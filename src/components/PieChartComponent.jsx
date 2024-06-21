/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";

export default function PieChartComponent({ d }) {
  const data = {
    series: d,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Pending", "In Progress", "Completed"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
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
          type="pie"
          width={380}
        />
      </div>
    </div>
  );
}

import { ChartOptions } from "chart.js";
import { BarChartData, ChartData } from "../types";

export const barChartConfigData = (barChartData: BarChartData): ChartData => {
  return {
    labels: barChartData.labels,
    datasets: [
      {
        label: "Sales", // The label for the dataset
        data: barChartData.data, // An array of data points corresponding to each label on the x-axis
        backgroundColor: "#1FD69F", // The background color for the bars
        // borderColor: "rgba(75,192,192,1)", // The border color for the bars
        borderWidth: 1, // The width of the border for the bars
      },
    ],
  };
};

export const barChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

import { ChartOptions } from "chart.js";
import { BarChartData, ChartData } from "../types";

export const barChartConfigData = (barChartData: BarChartData): ChartData => {
  return {
    labels: barChartData.labels,
    datasets: [
      {
        label: "Sales",
        data: barChartData.data,
        backgroundColor: "#1FD69F",
        borderWidth: 1,
      },
    ],
  };
};
const formatYAxisValue = (value: number) => {
  if (value >= 1000000) {
    return (value / 1000000).toString() + "M";
  } else if (value >= 1000) {
    return (value / 1000).toString() + "K";
  } else {
    return value.toString();
  }
};

export const desktopBarChartOptions: ChartOptions = {
  // responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const value = context.parsed.y;
          return value !== null
            ? `Sales: ${(Math.round(value * 10) / 10).toFixed(
                1
              )} M-KWh (Million Kilowatt-hours)`
            : "";
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Year",
      },
    },
    y: {
      title: {
        display: true,
        text: "Sales per year (M-KWh)",
      },
      beginAtZero: true,
    },
  },
};

export const mobileBarChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const value = context.parsed.y;
          return value !== null
            ? `Sales: ${(Math.round(value * 10) / 10).toFixed(
                1
              )} Million Kilowatt-hours`
            : "";
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Year",
      },
    },
    y: {
      title: {
        display: false,
        text: "Sales per year (M-KWh)",
      },
      beginAtZero: true,
      ticks: {
        callback: (value) => formatYAxisValue(Number(value)),
      },
    },
  },
};

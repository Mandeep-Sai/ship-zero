import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarChartData, BarChartProps } from "../../types";
import { barChartConfigData } from "../../utilities/barChartConfig";
import { filterBarChartData } from "../../utilities/utils";

import { Chart as ChartJS, registerables } from "chart.js";
// import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

const BarChart = ({ data }: BarChartProps) => {
  const [chartData, setChartData] = useState<BarChartData>({
    labels: [],
    data: [],
  });

  const [startYear, setStartYear] = useState<number>(2014);
  const [endYear, setEndYear] = useState<number>(2023);

  useEffect(() => {
    const filteredBarChartData = filterBarChartData(data, startYear, endYear);
    console.log(filteredBarChartData);
    setChartData(filteredBarChartData);
  }, [data]);

  return (
    <div className="barChart_wrapper">
      <Bar data={barChartConfigData(chartData)} />
    </div>
  );
};

export default BarChart;

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarChartData, BarChartProps } from "../../types";
import {
  barChartConfigData,
  barChartOptions,
} from "../../utilities/barChartConfig";
import { filterBarChartData } from "../../utilities/utils";
import "./BarChart.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import { Chart as ChartJS, registerables, scales } from "chart.js";
// import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

const BarChart = ({ data }: BarChartProps) => {
  const [chartData, setChartData] = useState<BarChartData>({
    labels: [],
    data: [],
  });

  const [startYear, setStartYear] = useState<number>(2014);
  const [endYear, setEndYear] = useState<number>(2023);

  const onChangeStartYear = (year: Date | null) => {
    console.log(year);
    if (year) {
      setStartYear(year?.getFullYear());
    }
  };
  const onChangeEndYear = (year: Date | null) => {
    console.log(year);
    if (year) {
      setEndYear(year?.getFullYear());
    }
  };

  useEffect(() => {
    const filteredBarChartData = filterBarChartData(data, startYear, endYear);
    console.log(filteredBarChartData);
    setChartData(filteredBarChartData);
  }, [data, startYear, endYear]);

  return (
    <div className="barChart_wrapper">
      <div className="yearRangePicker_wrapper">
        <DatePicker
          selected={new Date(startYear, 0, 1)}
          onChange={(date: Date) => onChangeStartYear(date)}
          selectsStart
          startDate={new Date(startYear, 0, 1)}
          endDate={new Date(endYear, 0, 1)}
          dateFormat="yyyy"
          showYearPicker
        />
        <DatePicker
          selected={new Date(endYear, 0, 1)}
          onChange={(date: Date) => onChangeEndYear(date)}
          selectsEnd
          startDate={new Date(startYear, 0, 1)}
          endDate={new Date(endYear, 0, 1)}
          dateFormat="yyyy"
          showYearPicker
        />
      </div>
      <Bar
        data={barChartConfigData(chartData)}
        // options={{ maintainAspectRatio: false }}
        options={barChartOptions}
      />
    </div>
  );
};

export default BarChart;

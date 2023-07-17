import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarChartData, BarChartProps } from "../../types";
import {
  barChartConfigData,
  desktopBarChartOptions,
  mobileBarChartOptions,
} from "../../utilities/barChartConfig";
import { filterBarChartData } from "../../utilities/utils";
import "./BarChart.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import { Chart as ChartJS, registerables } from "chart.js";
import useWindowSize from "../../utilities/useWindowSize";
// import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

const BarChart = ({ data }: BarChartProps) => {
  const [chartData, setChartData] = useState<BarChartData>({
    labels: [],
    data: [],
  });

  const [startYear, setStartYear] = useState<number>(2014);
  const [endYear, setEndYear] = useState<number>(2023);
  const size = useWindowSize();

  const onChangeStartYear = (year: Date | null) => {
    if (year) {
      setStartYear(year?.getFullYear());
    }
  };
  const onChangeEndYear = (year: Date | null) => {
    if (year) {
      setEndYear(year?.getFullYear());
    }
  };

  useEffect(() => {
    const filteredBarChartData = filterBarChartData(data, startYear, endYear);
    setChartData(filteredBarChartData);
  }, [data, startYear, endYear, size]);

  return (
    <div className="barChart_wrapper">
      <h1>
        Electricity Sales from {startYear} - {endYear}
      </h1>
      <div className="yearRangePicker_wrapper">
        <div>
          <p>From : </p>
          <DatePicker
            selected={new Date(startYear, 0, 1)}
            onChange={(date: Date) => onChangeStartYear(date)}
            selectsStart
            startDate={new Date(startYear, 0, 1)}
            endDate={new Date(endYear, 0, 1)}
            dateFormat="yyyy"
            showYearPicker
          />
        </div>

        <div>
          <p>To : </p>
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
      </div>
      <div className="chart_wrapper">
        {size.width < 768 ? (
          <Bar
            data={barChartConfigData(chartData)}
            options={mobileBarChartOptions}
          />
        ) : (
          <Bar
            data={barChartConfigData(chartData)}
            options={desktopBarChartOptions}
          />
        )}
      </div>
    </div>
  );
};

export default BarChart;

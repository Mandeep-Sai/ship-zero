import { BarChartData, Datum, filteredDatum } from "../types";

export const filterTableData = (salesData: Datum[]): filteredDatum[] => {
  return salesData.map(({ period, stateDescription, sectorName, sales }) => ({
    period,
    stateDescription,
    sectorName: sectorName.charAt(0).toUpperCase() + sectorName.slice(1),
    sales,
  }));
};

export const filterBarChartData = (
  data: Datum[],
  startYear: number,
  endYear: number
) => {
  const filteredData = data.filter(
    (element) => element.period >= startYear && element.period <= endYear
  );
  const barChartData = filteredData.reduce(
    (acc: BarChartData, { period, sales }) => {
      acc.labels.push(period.toString());
      acc.data.push(sales);
      return acc;
    },
    { labels: [], data: [] }
  );
  const sortedBarChartData = {
    labels: barChartData.labels.slice().sort((a, b) => Number(a) - Number(b)),
    data: barChartData.data.slice().sort((a, b) => a - b),
  };
  return sortedBarChartData;
};

export const latestData = (data: Datum[]) => {
  return data.reduce((acc, cur) => {
    return cur.period > acc.period ? cur : acc;
  }, data[0]);
};

export const oldestData = (data: Datum[]) => {
  return data.reduce((acc, cur) => {
    return cur.period < acc.period ? cur : acc;
  }, data[0]);
};

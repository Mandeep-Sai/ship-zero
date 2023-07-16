import { BarChartData, Datum } from "../types";

export const filterTableData = (salesData: Datum[]) => {
  return salesData.map(({ period, stateDescription, sectorName, sales }) => ({
    period,
    stateDescription,
    sectorName: sectorName.charAt(0).toUpperCase() + sectorName.slice(1),
    sales,
  }));
};

export const filterBarChartData = (data: Datum[]) => {
  return data.reduce(
    (acc: BarChartData, { period, sales }) => {
      acc.labels.push(period.toString());
      acc.data.push(sales);
      return acc;
    },
    { labels: [], data: [] }
  );
};

import { BarChartData, Datum, filteredDatum } from "../types";
import { formatYAxisValue } from "./barChartConfig";
import {
  filterTableData,
  filterBarChartData,
  oldestData,
  latestData,
} from "./utils";

export const sampleSalesData: Datum[] = [
  {
    period: 2021,
    stateid: "CO",
    stateDescription: "Colorado",
    sectorid: "RES",
    sectorName: "residential",
    sales: 20625.00501,
    "sales-units": "million kilowatthours",
  },
  {
    period: 2020,
    stateid: "CO",
    stateDescription: "Colorado",
    sectorid: "RES",
    sales: 20482.50199,
    sectorName: "residential",
    "sales-units": "million kilowatthours",
  },
  {
    period: 2019,
    stateid: "CO",
    stateDescription: "Colorado",
    sectorid: "RES",
    sales: 19404.743,
    sectorName: "residential",
    "sales-units": "million kilowatthours",
  },
  {
    period: 2018,
    stateid: "CO",
    stateDescription: "Colorado",
    sectorid: "RES",
    sales: 19286.95201,
    sectorName: "residential",
    "sales-units": "million kilowatthours",
  },
];
const expectedFilteredData: filteredDatum[] = [
  {
    period: 2021,
    stateDescription: "Colorado",
    sectorName: "Residential",
    sales: 20625.00501,
  },
  {
    period: 2020,
    stateDescription: "Colorado",
    sectorName: "Residential",
    sales: 20482.50199,
  },
  {
    period: 2019,
    stateDescription: "Colorado",
    sales: 19404.743,
    sectorName: "Residential",
  },
  {
    period: 2018,
    stateDescription: "Colorado",
    sales: 19286.95201,
    sectorName: "Residential",
  },
];
const expectedFilteredBarChartData: BarChartData = {
  labels: ["2020", "2021"],
  data: [20482.50199, 20625.00501],
};

describe("test all utilities functions", () => {
  it("should filter the data to view in table", () => {
    const filteredData = filterTableData(sampleSalesData);
    expect(filteredData).toEqual(expectedFilteredData);
  });

  it("should filter and sort data to view in bar chart", () => {
    const filteredBarChartData = filterBarChartData(
      sampleSalesData,
      2020,
      2023
    );
    expect(filteredBarChartData).toEqual(expectedFilteredBarChartData);
  });

  it("should return the oldest available value of sales in the data", () => {
    expect(oldestData(sampleSalesData)).toEqual({
      period: 2018,
      stateid: "CO",
      stateDescription: "Colorado",
      sectorid: "RES",
      sales: 19286.95201,
      sectorName: "residential",
      "sales-units": "million kilowatthours",
    });
  });
  it("should return the latest available value of sales in the data", () => {
    expect(latestData(sampleSalesData)).toEqual({
      period: 2021,
      stateid: "CO",
      stateDescription: "Colorado",
      sectorid: "RES",
      sectorName: "residential",
      sales: 20625.00501,
      "sales-units": "million kilowatthours",
    });
  });

  it("should format string for Y axis", () => {
    expect(formatYAxisValue(10000)).toEqual("10K");
    expect(formatYAxisValue(1000)).toEqual("1K");
    expect(formatYAxisValue(999)).toEqual("999");
  });
});

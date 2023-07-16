import { Datum } from "../types";

export const filterTableData = (salesData: Datum[]) => {
  return salesData.map(({ period, stateDescription, sectorName, sales }) => ({
    period,
    stateDescription,
    sectorName: sectorName.charAt(0).toUpperCase() + sectorName.slice(1),
    sales,
  }));
};

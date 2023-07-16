import { GridColDef } from "@mui/x-data-grid";

export const mobileColumns: GridColDef[] = [
  {
    field: "period",
    headerName: "Year",
    width: 200,
    flex: 1.5,
    disableColumnMenu: true,
  },
  {
    field: "stateDescription",
    headerName: "State",
    sortable: false,
    disableColumnMenu: true,
    align: "center",
    headerAlign: "center",
    flex: 2,
  },
  {
    field: "sectorName",
    headerName: "Sector",
    sortable: false,
    disableColumnMenu: true,
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "sales",
    headerName: "Sales",
    type: "number",
    width: 300,
    align: "center",
    headerAlign: "center",

    disableColumnMenu: true,
    flex: 2,
  },
];

export const desktopColumns: GridColDef[] = [
  {
    field: "period",
    headerName: "Year",
    width: 200,
    flex: 1,
  },
  {
    field: "stateDescription",
    headerName: "State",
    sortable: false,
    disableColumnMenu: true,
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "sectorName",
    headerName: "Sector",
    sortable: false,
    disableColumnMenu: true,
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "sales",
    headerName: "Sales",
    type: "number",
    width: 300,
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
];

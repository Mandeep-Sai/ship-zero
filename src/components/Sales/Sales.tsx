import { SalesProps } from "../../types";
import { DataGrid } from "@mui/x-data-grid";
import useWindowSize from "../../utilities/useWindowSize";
import { desktopColumns, mobileColumns } from "../../utilities/tableConfig";
import { filterTableData, latestData, oldestData } from "../../utilities/utils";

const Sales = ({ salesData }: SalesProps) => {
  const size = useWindowSize();
  const latestYear = latestData(salesData);
  const oldestYear = oldestData(salesData);

  return (
    <>
      <div className="data_grid_wrapper">
        <h1 style={{ margin: "16px 0px" }}>
          Data from {latestYear.period} - {oldestYear.period}
        </h1>
        <DataGrid
          className="data_grid"
          rows={filterTableData(salesData)}
          getRowId={(row) => row.period}
          columns={size.width < 768 ? mobileColumns : desktopColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          sx={{
            border: 1,
            borderColor: "#1FD69F",
            boxShadow: 3,
            "& .MuiDataGrid-cell:hover": {
              color: "#1FD69F",
            },
          }}
        />
      </div>
    </>
  );
};

export default Sales;

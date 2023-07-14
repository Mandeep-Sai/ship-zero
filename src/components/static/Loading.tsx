import { CircularProgress } from "@mui/material";
import "./StaticComponents.css";

const Loading = () => {
  return (
    <>
      <CircularProgress sx={{ color: "#1FD69F" }} className="loading" />
    </>
  );
};

export default Loading;

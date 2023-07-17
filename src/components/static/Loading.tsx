import { CircularProgress } from "@mui/material";
import "./StaticComponents.css";

const Loading = () => {
  return (
    <div data-testid="loading">
      <CircularProgress sx={{ color: "#1FD69F" }} className="loading" />
    </div>
  );
};

export default Loading;

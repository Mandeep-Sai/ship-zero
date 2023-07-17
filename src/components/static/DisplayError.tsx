import { DisplayErrorProps } from "../../types";
import "./StaticComponents.css";

const DisplayError = ({ data }: DisplayErrorProps) => {
  return (
    <div className="error" data-testid="apierror">
      {"code" in data ? (
        <>
          <h1>{data.code}</h1>
          <h2 style={{ width: "600px" }}> {data.error}</h2>
        </>
      ) : (
        <>
          <h1>{data.error.code}</h1>{" "}
          <h2 style={{ width: "600px" }}> {data.error.message}</h2>
        </>
      )}
    </div>
  );
};

export default DisplayError;

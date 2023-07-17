import { useQuery } from "react-query";
import { fetchData } from "../../services/electricitySales";
import { APIResponse } from "../../types";
import BarChart from "../Charts/BarChart";
import Sales from "../Sales/Sales";
import DisplayError from "../static/DisplayError";
import Loading from "../static/Loading";
import "../static/StaticComponents.css";
import "./Home.css";

const Home = () => {
  const { data, isLoading } = useQuery<APIResponse>("sales", fetchData);

  //   Loading state
  if (isLoading) {
    return <Loading />;
  }

  //   Response from API is object that has data or information about error
  if (data !== undefined) {
    // If response from API has error message
    // If 404 error need to display custom error message else display the error message from API
    if ("error" in data) {
      return <DisplayError data={data} />;
    }
    // If response from API has data
    if ("response" in data) {
      return (
        <div className="home">
          <Sales salesData={data.response.data} />
          <BarChart data={data.response.data} />
        </div>
      );
    }
  }

  //   Error state when we are unable to contact API (might be error in URL)

  return (
    <div className="error" data-testid="error">
      <h1>Unable to contact server.</h1>
      <h2>Please try again later</h2>
    </div>
  );
};

export default Home;

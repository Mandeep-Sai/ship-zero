import { useQuery } from "react-query";
import { fetchData } from "../../services/electricitySales";
import { APIResponse } from "../../types";

const Home = () => {
  const { data, isLoading, error } = useQuery<APIResponse>("sales", fetchData);

  console.log(error, "error");
  console.log(data, "data");

  //   Loading state
  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  //   Response from API is object that has data or information about error
  if (data !== undefined) {
    // If response from API has data
    if ("error" in data) {
      return (
        <>
          <h1>{data.error.message} </h1>
        </>
      );
    }
    // If response from API has error message
    // If 404 error need to display custom error message else display the error message from API
    if ("response" in data) {
      return <>{data.response.total}</>;
    }
  }

  //   Error state when we are unable to contact API (might be error in URL)

  return <>Unable to contact server</>;
};

export default Home;

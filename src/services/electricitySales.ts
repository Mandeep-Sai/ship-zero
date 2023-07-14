import { APIResponse } from "../types";

export const fetchData = async (): Promise<APIResponse> => {
  const response = await fetch(
    `https://api.eia.gov/v2/seriesid/ELEC.SALES.CO-RES.A?api_key=nIa7SZTCOf4VWCgh5fQUqXKNVdTZWzmzDDBVukfI`
  );
  const parsedResponse = (await response.json()) as APIResponse;
  return parsedResponse;
};

import { URL, VITE_API_KEY } from "../constants";
import { APIResponse } from "../types";
// const API_KEY = import.meta.env.VITE_API_KEY as string;

export const fetchData = async (): Promise<APIResponse> => {
  const response = await fetch(`${URL}?api_key=${VITE_API_KEY}`);
  const parsedResponse = (await response.json()) as APIResponse;
  return parsedResponse;
};

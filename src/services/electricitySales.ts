import { URL } from "../constants";
import { APIResponse } from "../types";
const API_KEY = import.meta.env.VITE_API_KEY as string;

export const fetchData = async (): Promise<APIResponse> => {
  const response = await fetch(`${URL}?api_key=${API_KEY}`);
  const parsedResponse = (await response.json()) as APIResponse;
  return parsedResponse;
};

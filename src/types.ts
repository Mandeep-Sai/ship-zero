export interface ErrorResponse {
  error: GenericErrorMessage;
}
export interface SuccessResponse {
  response: Response;
  request: Request;
  apiVersion: string;
}
export type APIResponse = SuccessResponse | ErrorResponse;
export type APIErrorResponse = ErrorResponse | Error404Response;

export interface GenericErrorMessage {
  code: string;
  message: string;
}
export interface Error404Response {
  error: string;
  code: number;
}

export interface Request {
  command: string;
  params: Params;
  route: string;
}

export interface Params {
  frequency: string;
  data: string[];
  facets: Facets;
  start: null;
  end: null;
  sort: Sort[];
  offset: number;
  length: number;
  api_key: string;
}

export interface Facets {
  sectorid: Sectorid[];
  stateid: Stateid[];
}

export enum Sectorid {
  Res = "RES",
}

export enum Stateid {
  Co = "CO",
}

export interface Sort {
  column: string;
  direction: string;
}

export interface Response {
  total: number;
  dateFormat: string;
  frequency: string;
  data: Datum[];
  description: string;
  id: string;
}

export interface Datum {
  period: number;
  stateid: Stateid;
  stateDescription: StateDescription;
  sectorid: Sectorid;
  sectorName: SectorName;
  sales: number;
  "sales-units": SalesUnits;
}

export enum SalesUnits {
  MillionKilowatthours = "million kilowatthours",
}

export enum SectorName {
  Residential = "residential",
}

export enum StateDescription {
  Colorado = "Colorado",
}

export interface DisplayErrorProps {
  data: APIErrorResponse;
}

export interface SalesProps {
  salesData: Datum[];
}

export interface BarChartProps {
  data: Datum[];
}

// Chart data properties
interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
  // borderColor: string;
  borderWidth: number;
}

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

export interface BarChartData {
  labels: string[];
  data: number[];
}

// export interface YearRange {
//   start: number;
//   end: number;
// }

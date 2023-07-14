export interface ErrorResponse {
  error: ErrorMessage;
}
export interface SuccessResponse {
  response: Response;
  request: Request;
  apiVersion: string;
}
export type APIResponse = SuccessResponse | ErrorResponse;
export interface ErrorMessage {
  code: string;
  message: string;
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

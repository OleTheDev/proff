import { APIRequestType } from "./enums";

export interface IAPIRequest {
  type: APIRequestType;
  endpoint: string;
}

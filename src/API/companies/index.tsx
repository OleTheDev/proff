import { APIRequest } from "../index";
import { IAPICompanySearch } from "./types";
import { APIRequestType } from "../enums";

export const APISearchForCompanies = async ({
  name,
  country,
}: IAPICompanySearch) => {
  const endPoint = `companies/eniropro/${country.toUpperCase()}?industry=${name}`;
  const result = await APIRequest({
    endpoint: endPoint,
    type: APIRequestType.GET,
  });

  return result;
};

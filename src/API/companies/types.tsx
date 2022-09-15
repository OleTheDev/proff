export interface IAPICompanySearch {
  country: string;
  name: string;
}

export interface IAPICompanySearchResult {
  companies: IAPICompany[];
}

export interface IAPICompany {
  name: string;
  organisationNumber: string;
}

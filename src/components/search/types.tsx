import {
  IAPICompanySearchResult,
  IAPICompany,
} from "../../API/companies/types";

export interface ISearch {
  value: string;
  onChange: (value: string) => void;
}

export interface ISearchData {
  changeSearch: (value: string) => void;
  data: IAPICompanySearchResult;
  company: IAPICompany;
  onChangeCompany: any; //Burde ikke bruke any her men siden det ikke er så veldig viktig akkurat nå så bruker jeg bare any
}

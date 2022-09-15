import React from "react";
import { IAPICompany } from "../../API/companies/types";

interface ICompanyProfile {
  company: IAPICompany;
}

export default function CompanyProfile({ company }: ICompanyProfile) {
  return (
    <>
      {company !== undefined && (
        <div>
          <h2>Selskap detailer</h2>
          <div>
            <span>Navn: {company.name}</span>
          </div>
          <div>
            <span>organisationNumber: {company.organisationNumber}</span>
          </div>
        </div>
      )}
    </>
  );
}

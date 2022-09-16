import { useEffect, useState } from "react";
import { APISearchForCompanies } from "../API/companies";
import { IAPICompanySearchResult } from "../API/companies/types";

interface Params {
  query: string;
}

export function useCompanySearch({ query }: Params) {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<IAPICompanySearchResult>({
    companies: [],
  });

  useEffect(() => {
    (async () => {
      try {
        if (query !== "") {
          setLoading(true);
          await APISearchForCompanies({
            country: "no",
            name: query,
          }).then((result: IAPICompanySearchResult) => {
            console.log(result);
            setResult(result);
          });
        } else {
          setResult({
            companies: [],
          });
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  return { result, loading };
}

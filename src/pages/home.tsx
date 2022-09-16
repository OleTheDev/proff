import React from "react";
import { SearchBar } from "../components/search";
import { useCompanySearch } from "../hooks/useCompanySearch";
import { Spinner } from "../components/common/spinner";
import SearchResult from "../components/search/result";
import { IAPICompany } from "../API/companies/types";

export default function HomePage() {
  const [search, setSearch] = React.useState<string>("");
  const [companySelected, setCompanySelected] = React.useState<IAPICompany>();
  const { result, loading } = useCompanySearch({ query: search });
  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />

      <Spinner loading={loading}>
        <SearchResult
          changeSearch={setSearch}
          data={result!}
          company={companySelected!}
          onChangeCompany={setCompanySelected!}
        />
      </Spinner>
    </div>
  );
}

import React from "react";
import { ISearchData } from "./types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CompanyProfile from "../company/profile";
import { IAPICompany } from "../../API/companies/types";
import { PaginationView } from "../common/pageination";

export default function SearchResult({
  data,
  company,
  onChangeCompany,
  changeSearch,
}: ISearchData) {
  const handleCompanyClick = (data: IAPICompany) => {
    onChangeCompany(data);
    changeSearch("");
  };

  const [dataLimit] = React.useState<number>(4);
  const [pages] = React.useState<number>(
    Math.ceil(data.companies.length / dataLimit)
  );
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  //Dette kunne blitt en del av pageination component men regner med det går fint at den blir her bare for selve testen
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.companies.slice(startIndex, endIndex);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        {data.companies.length > 0 && (
          <List
            sx={{
              width: "100%",
              maxWidth: 350,
              bgcolor: "background.paper",
              mt: 5,
            }}
          >
            {getPaginatedData().map((company, i) => {
              return (
                <div key={i} style={{ textAlign: "center" }}>
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      ":hover": {
                        boxShadow: "0.2px 0.2px",
                      },
                    }}
                    onClick={() => handleCompanyClick(company)}
                  >
                    <ListItemText
                      primary={company.name}
                      secondary={company.organisationNumber}
                    />
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
            <PaginationView
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pages={pages}
            />
          </List>
        )}
      </Box>

      <CompanyProfile company={company} />
    </>
  );
}

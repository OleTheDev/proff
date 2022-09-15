import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: any;
  pages: number;
}

export const PaginationView: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  pages,
}) => {
  return (
    <Pagination
      page={currentPage}
      count={pages}
      renderItem={(item) => (
        <PaginationItem {...item} onClick={() => setCurrentPage(item.page)} />
      )}
    />
  );
};

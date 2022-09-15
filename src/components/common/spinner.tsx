import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface Props {
  loading?: boolean;
  children: React.ReactNode;
}

export const Spinner: FC<Props> = ({ loading, children }) => {
  return (
    <div>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

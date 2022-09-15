import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ISearch } from "./types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paperBox: {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "auto",
    marginTop: "2vh",
  },
  inputBase: {
    textAlign: "center",
    flex: 1,
  },
}));

export const SearchBar = ({ value, onChange }: ISearch) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.paperBox}>
      <InputBase
        className={classes.inputBase}
        placeholder="Søk etter industri"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        inputProps={{ "aria-label": "søk etter industri" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

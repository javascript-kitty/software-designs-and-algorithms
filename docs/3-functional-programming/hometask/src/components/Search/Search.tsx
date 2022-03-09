import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./Search.module.scss";

interface SearchProps {
  selected?: string;
  updateSelected?: (val) => void;
}

export function Search(props: SearchProps) {
  const onChange = (value) => {
    props.updateSelected(value.toLowerCase());
  };

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={props.selected}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}

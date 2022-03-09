import { useState, useEffect, useMemo } from "react";
import { StyledEngineProvider } from "@mui/material/styles";

import { Table, Filters, Sort, Search } from "./components";
import { getImages, getUsers, getAccounts } from "./mocks/api";

import styles from "./App.module.scss";

import type { Row } from "./components";
import type { Image, User, Account, TSort } from "../types";
import { applyFilters, dataConverter } from "./utils";

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [filter, setFilters] = useState<string[]>([]);
  const [sort, setSort] = useState<TSort | undefined>(undefined);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        setData(dataConverter(users, accounts, images));
      }
    );
  }, []);

  const usersToDisplay = useMemo(() => {
    return applyFilters(data, search, filter, sort);
  }, [sort, filter, search, data]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters
              selected={filter}
              updateSelected={(data) => setFilters(data)}
            />
            <Sort selected={sort} updateSelected={(data) => setSort(data)} />
          </div>
          <Search
            selected={search}
            updateSelected={(value) => setSearch(value)}
          />
        </div>
        {!data ? <div>Loading...</div> : <Table rows={usersToDisplay} />}
      </div>
    </StyledEngineProvider>
  );
}

export default App;

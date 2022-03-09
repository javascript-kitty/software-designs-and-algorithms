import { Account, User, Image, TSort } from "../types";
import { Row } from "./components";

export const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  return users.map(({ userID, username, country, name }) => ({
    avatar: images.find((el) => el.userID === userID).url,
    username,
    country,
    name,
    lastPayments: accounts.find((el) => el.userID === userID).payments.length,
    posts: accounts.find((el) => el.userID === userID).posts,
  }));
};

export const searchData = (input: string, data: Row[]) =>
  data.filter(
    (row) =>
      row.name.toLowerCase().includes(input) ||
      row.username.toLowerCase().includes(input) ||
      row.country.toLowerCase().includes(input)
  );

export const sortData = (sort: TSort, data: Row[]) =>
  data.sort((a, b) => (sort === "asc" ? a.posts - b.posts : b.posts - a.posts));

export const filterData = (filter: string[], data: Row[]) => {
  debugger;
  return filter.length === 2
    ? data.filter((el) => el.posts === 0 || el.posts > 100)
    : filter.includes("Without posts")
    ? data.filter((el) => el.posts === 0)
    : filter.includes("More than 100 posts")
    ? data.filter((el) => el.posts > 100)
    : data;
};

export const applyFilters = (data, search, filter, sort) => {
  debugger;
  if (data) {
    let filteredData = data;

    if (search.length > 0) {
      filteredData = searchData(search, data);
    }
    if (filter.length > 0) {
      filteredData = filterData(filter, data);
    }
    if (sort) {
      filteredData = sortData(sort, data);
    }

    return filteredData;
  }
};

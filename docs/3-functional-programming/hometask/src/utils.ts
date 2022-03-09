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

export const searchData = (input: string) => (data: Row[]) => {
  if (input.length === 0) {
    return data;
  }

  return data.filter(
    (row) =>
      row.name.toLowerCase().includes(input) ||
      row.username.toLowerCase().includes(input) ||
      row.country.toLowerCase().includes(input)
  );
};

export const sortData = (sort: TSort) => (data: Row[]) => {
  if (!sort) {
    return data;
  }
  return data.sort((a, b) =>
    sort === "asc" ? a.posts - b.posts : b.posts - a.posts
  );
};

export const filterData = (filter: string[]) => (data: Row[]) => {
  return filter.length === 2
    ? data.filter((el) => el.posts === 0 || el.posts > 100)
    : filter.includes("Without posts")
    ? data.filter((el) => el.posts === 0)
    : filter.includes("More than 100 posts")
    ? data.filter((el) => el.posts > 100)
    : data;
};

const compose = (...funcs) => {
  return (data) => {
    return funcs.reverse().reduce((acc, func) => func(acc), data);
  };
};

export const applyFilters = (data, search, filter, sort) => {
  if (data) {
    return compose(
      searchData(search),
      filterData(filter),
      sortData(sort)
    )(data);
  }
};

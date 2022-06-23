import { httpClient } from "./httpClient";

export const getTasks = () => {
  const noOfFollowers = 35000;
  const perPage = 10;
  const response = httpClient.get(
    // '/tasks'
    `search/users?q=followers:>${noOfFollowers}&per_page=${perPage}`
  );
  return response;
};

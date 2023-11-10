import axios from "axios";
export const getAllRepositories = async (queryParams) => {
  return axios
    .get("https://api.github.com/search/repositories", {
      params: queryParams,
    })
    .then((res) => res?.data);
};

import axios from "axios";

export const searchQuery = (query: string, value?: string) => {
  const data = axios
    .get(`https://restcountries.com/v3.1/${query}/${value}`)
    .then((res) => res.data);
  return data;
};

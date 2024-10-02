import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";

export const getCountries = async () => {
  const data = await axios.get(baseUrl).then((res) => res.data);
  return data;
};

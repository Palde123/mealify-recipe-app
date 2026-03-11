import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = (query: string) => {
  return axios.get(`${BASE_URL}/search.php?s=${query}`);
};

export const getMealDetails = (id: string) => {
  return axios.get(`${BASE_URL}/lookup.php?i=${id}`);
};
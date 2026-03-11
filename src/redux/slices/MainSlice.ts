import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  selectedMeal: null,
  favorites: [],
  mealsLoading: false,
  mealDetailLoading: false,
  mealsError: null,
  mealDetailError: null,
};

const mainSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    searchMealsRequest: (state) => {
      state.mealsLoading = true;
      state.mealsError = null;
    },
    searchMealsSuccess: (state, action) => {
      state.mealsLoading = false;
      state.meals = action.payload ?? [];
    },
    searchMealsFailure: (state, action) => {
      state.mealsLoading = false;
      state.mealsError = action.payload;
    },

    mealDetailRequest: (state) => {
      state.mealDetailLoading = true;
      state.mealDetailError = null;
      state.selectedMeal = null;
    },
    mealDetailSuccess: (state, action) => {
      state.mealDetailLoading = false;
      state.selectedMeal = action.payload;
    },
    mealDetailFailure: (state, action) => {
      state.mealDetailLoading = false;
      state.mealDetailError = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload ?? [];
    },
    toggleFavorite: (state, action) => {
      const meal = action.payload;
      const exists = state.favorites.some(
        (item: any) => item.idMeal === meal.idMeal
      );

      state.favorites = exists
        ? state.favorites.filter((item: any) => item.idMeal !== meal.idMeal)
        : [meal, ...state.favorites];
    },
  },
});

export const {
  searchMealsRequest,
  searchMealsSuccess,
  searchMealsFailure,
  mealDetailRequest,
  mealDetailSuccess,
  mealDetailFailure,
  setFavorites,
  toggleFavorite,
} = mainSlice.actions;

export default mainSlice.reducer;

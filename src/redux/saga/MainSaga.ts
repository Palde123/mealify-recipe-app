import { call, put, takeLatest } from "redux-saga/effects";
import {
  mealDetailFailure,
  mealDetailRequest,
  mealDetailSuccess,
  searchMealsFailure,
  searchMealsRequest,
  searchMealsSuccess,
} from "../slices/MainSlice";
import { getMealDetails, searchMeals } from "../Service";


function* fetchMeals(action: any): any {
  try {
    const response = yield call(searchMeals, action.payload);
    yield put(searchMealsSuccess(response.data.meals || []));
  } catch (error) {
    yield put(searchMealsFailure("Failed to fetch meals"));
  }
}

function* fetchMealDetails(action: any): any {
  try {
    const response = yield call(getMealDetails, action.payload);
    yield put(mealDetailSuccess(response.data.meals?.[0] ?? null));
  } catch (error) {
    yield put(mealDetailFailure("Failed to fetch meal details"));
  }
}

export default function* MainSaga() {
  yield takeLatest(searchMealsRequest.type, fetchMeals);
  yield takeLatest(mealDetailRequest.type, fetchMealDetails);
}

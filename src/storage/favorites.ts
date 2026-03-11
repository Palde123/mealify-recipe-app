import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_STORAGE_KEY = "@mealify/favorites";

export const loadFavoriteMeals = async () => {
  const storedFavorites = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);

  if (!storedFavorites) {
    return [];
  }

  try {
    return JSON.parse(storedFavorites);
  } catch (error) {
    await AsyncStorage.removeItem(FAVORITES_STORAGE_KEY);
    return [];
  }
};

export const persistFavoriteMeals = async (favorites: any[]) => {
  await AsyncStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(favorites ?? [])
  );
};

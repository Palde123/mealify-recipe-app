import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Route from "./Routes";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { setFavorites } from "./redux/slices/MainSlice";
import { loadFavoriteMeals } from "./storage/favorites";

function AppShell() {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    const bootstrapFavorites = async () => {
      try {
        const favorites = await loadFavoriteMeals();

        if (isMounted) {
          dispatch(setFavorites(favorites));
        }
      } catch (error) {
        if (isMounted) {
          dispatch(setFavorites([]));
        }
      }
    };

    bootstrapFavorites();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppShell />
    </Provider>
  );
}

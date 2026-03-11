import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Screens/Main";
import DetailScreen from "./Screens/DetailScreen";
import FavoriteScreen from "./Screens/FavoriteScreen";
import AppHeader from "./components/AppHeader";
import { Colors } from "./theme/colors";

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, options, back, route }) => {
          const headerOptions = options as any;

          return (
            <AppHeader
              title={(options.title as string) || ""}
              showBackButton={!!back}
              onBackPress={navigation.goBack}
              showFavoriteButton={
                headerOptions.headerFavoriteVisible ?? (route.name === "Home")
              }
              isFavoriteActive={headerOptions.headerFavoriteActive}
              onFavoritePress={
                headerOptions.headerOnFavoritePress ??
                (route.name === "Home"
                  ? () => navigation.navigate("Favorite")
                  : undefined)
              }
            />
          );
        },
        contentStyle: {
          backgroundColor: Colors.surface,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Main}
        options={{
          title: "Mealify",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Recipe",
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
        }}
      />
    </Stack.Navigator>
  );
}

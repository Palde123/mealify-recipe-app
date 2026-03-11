import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import Matrics from "../theme/Matrics";
import { Colors } from "../theme/colors";
import icons from "../theme/Images";
export default function FavoriteScreen({ navigation }: any) {
  const favorites = useSelector((state: any) => state.meal.favorites);

  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientMid, Colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.headerBlock}>
        <Text style={styles.eyebrow}>YOUR SAVED PICKS</Text>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.description}>
          Keep the meals you want to revisit, cook, and share.
        </Text>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.idMeal}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          favorites.length === 0 ? styles.emptyListContent : styles.listContent
        }
        renderItem={({ item }) => (
          <RecipeCard
            meal={item}
            onPress={() => navigation.navigate("Detail", { id: item.idMeal })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.card}>
            <Image
              source={icons.PLACEHOLDER}
              style={styles.emptyImage}
            />
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptyDescription}>
              Tap the heart on any meal detail screen and it will appear here.
            </Text>
          </View>
        }
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Matrics.ms(16),
  },

  headerBlock: {
    paddingTop: Matrics.vs(14),
    paddingBottom: Matrics.vs(12),
  },

  eyebrow: {
    color: Colors.primary,
    fontSize: Matrics.mvs(11),
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: Matrics.vs(8),
  },

  listContent: {
    paddingBottom: Matrics.vs(24),
  },

  emptyListContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: Matrics.vs(24),
  },

  card: {
    backgroundColor: Colors.surfaceMuted,
    borderRadius: Matrics.ms(24),
    padding: Matrics.ms(24),
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },

  title: {
    fontSize: Matrics.mvs(30),
    fontWeight: "900",
    color: Colors.text,
    marginBottom: Matrics.vs(8),
  },

  description: {
    fontSize: Matrics.mvs(14),
    lineHeight: Matrics.mvs(22),
    color: Colors.textSoft,
  },

  emptyTitle: {
    fontSize: Matrics.mvs(22),
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Matrics.vs(8),
  },

  emptyImage: {
    width: Matrics.ms(150),
    height: Matrics.ms(150),
    resizeMode: "contain",
    marginBottom: Matrics.vs(18),
  },

  emptyDescription: {
    fontSize: Matrics.mvs(14),
    lineHeight: Matrics.mvs(22),
    color: Colors.textSoft,
    textAlign: "center",
  },
});

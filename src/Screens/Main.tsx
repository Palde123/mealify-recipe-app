import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Skeleton from "../components/Skeleton";
import { searchMealsRequest } from "../redux/slices/MainSlice";
import Matrics from "../theme/Matrics";
import { Colors } from "../theme/colors";
import icons from "../theme/Images";

export default function Main({ navigation }: any) {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const meals = useSelector((state: any) => state.meal.meals);
  const mealsLoading = useSelector((state: any) => state.meal.mealsLoading);
  const mealsError = useSelector((state: any) => state.meal.mealsError);

  const searchMeal = (text: string) => {
    setQuery(text);
    dispatch(searchMealsRequest(text));
  };

  const retrySearch = () => {
    dispatch(searchMealsRequest(query));
  };

  const renderSkeletonCard = ({ index }: { index: number }) => (
    <View style={styles.skeletonCard} key={index}>
      <Skeleton style={styles.skeletonImage} />
      <View style={styles.skeletonContent}>
        <Skeleton style={styles.skeletonTitle} />
        <Skeleton style={styles.skeletonCategory} />
      </View>
    </View>
  );

  const renderEmptyState = () => {
    if (mealsLoading) {
      return null;
    }

    if (mealsError) {
      return (
        <View style={styles.feedbackCard}>
          <Text style={styles.feedbackTitle}>Could not load recipes</Text>
          <Text style={styles.feedbackText}>{mealsError}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={retrySearch}>
            <Text style={styles.retryText}>Try again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.feedbackCard}>
        <Image
         source={icons.PLACEHOLDER}
          style={styles.feedbackImage}
        />
        <Text style={styles.feedbackTitle}>
          {query ? "No recipes found" : "Search for a recipe"}
        </Text>
        <Text style={styles.feedbackText}>
          {query
            ? "Try a different keyword to explore more meals."
            : "Type a meal name above to load recipes."}
        </Text>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientMid, Colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.heroBlock}>
        <Text style={styles.eyebrow}>TODAY'S KITCHEN MOOD</Text>
        <Text style={styles.heroTitle}>Find your next favorite plate</Text>
        <Text style={styles.heroText}>
          Search comforting meals, bold flavors, and easy recipe ideas in one
          place.
        </Text>
      </View>

      <SearchBar value={query} onChange={searchMeal} />

      <FlatList
        data={mealsLoading ? [0, 1, 2, 3] : meals}
        keyExtractor={(item, index) =>
          mealsLoading ? `skeleton-${index}` : item.idMeal
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) =>
          mealsLoading ? (
            renderSkeletonCard({ index })
          ) : (
            <RecipeCard
              meal={item}
              onPress={() =>
                navigation.navigate("Detail", { id: item.idMeal })
              }
            />
          )
        }
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={meals.length === 0 ? styles.listContent : styles.listSpacing}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Matrics.ms(16),
  },

  listContent: {
    flexGrow: 1,
    paddingBottom: Matrics.vs(24),
  },

  listSpacing: {
    paddingBottom: Matrics.vs(24),
  },

  heroBlock: {
    paddingTop: Matrics.vs(14),
    paddingBottom: Matrics.vs(6),
  },

  eyebrow: {
    color: Colors.primary,
    fontSize: Matrics.mvs(11),
    fontWeight: "800",
    letterSpacing: 1.3,
    marginBottom: Matrics.vs(8),
  },

  heroTitle: {
    color: Colors.text,
    fontSize: Matrics.mvs(30),
    fontWeight: "900",
    lineHeight: Matrics.mvs(36),
    maxWidth: "82%",
  },

  heroText: {
    marginTop: Matrics.vs(10),
    color: Colors.textSoft,
    fontSize: Matrics.mvs(14),
    lineHeight: Matrics.mvs(22),
    maxWidth: "92%",
  },

  skeletonCard: {
    backgroundColor: Colors.surfaceMuted,
    borderRadius: Matrics.ms(24),
    marginBottom: Matrics.vs(15),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.border,
  },

  skeletonImage: {
    height: Matrics.vs(230),
    width: "100%",
    borderRadius: 0,
  },

  skeletonContent: {
    padding: Matrics.ms(16),
  },

  skeletonTitle: {
    height: Matrics.vs(26),
    width: "74%",
    marginBottom: Matrics.vs(10),
  },

  skeletonCategory: {
    height: Matrics.vs(16),
    width: "38%",
  },

  feedbackCard: {
    flex: 1,
    backgroundColor: Colors.surfaceMuted,
    borderRadius: Matrics.ms(24),
    padding: Matrics.ms(24),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },

  feedbackImage: {
    width: Matrics.ms(140),
    height: Matrics.ms(140),
    resizeMode: "contain",
    marginBottom: Matrics.vs(16),
  },

  feedbackTitle: {
    fontSize: Matrics.mvs(20),
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Matrics.vs(8),
    textAlign: "center",
  },

  feedbackText: {
    fontSize: Matrics.mvs(14),
    lineHeight: Matrics.mvs(22),
    color: Colors.textSoft,
    textAlign: "center",
  },

  retryButton: {
    marginTop: Matrics.vs(16),
    backgroundColor: Colors.primary,
    paddingHorizontal: Matrics.s(20),
    paddingVertical: Matrics.vs(12),
    borderRadius: Matrics.ms(999),
  },

  retryText: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: Matrics.mvs(14),
  },
});

import React, { useEffect, useLayoutEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { mealDetailRequest, setFavorites } from "../redux/slices/MainSlice";
import Skeleton from "../components/Skeleton";
import Matrics from "../theme/Matrics";
import { Colors } from "../theme/colors";
import { persistFavoriteMeals } from "../storage/favorites";

const getMealIngredients = (meal: any) =>
  Array.from({ length: 20 }, (_, index) => {
    const ingredient = meal?.[`strIngredient${index + 1}`]?.trim();
    const measure = meal?.[`strMeasure${index + 1}`]?.trim();

    if (!ingredient) {
      return null;
    }

    return measure ? `${measure} ${ingredient}` : ingredient;
  }).filter(Boolean);

export default function DetailScreen({ navigation, route }: any) {
  const { id } = route.params;

  const dispatch = useDispatch();
  const meal = useSelector((state: any) => state.meal.selectedMeal);
  const favorites = useSelector((state: any) => state.meal.favorites);
  const mealDetailLoading = useSelector(
    (state: any) => state.meal.mealDetailLoading
  );
  const mealDetailError = useSelector(
    (state: any) => state.meal.mealDetailError
  );

  const isFavorite = favorites.some((item: any) => item.idMeal === id);
  const ingredients = getMealIngredients(meal);

  useEffect(() => {
    dispatch(mealDetailRequest(id));
  }, [dispatch, id]);

  const handleFavoriteToggle = async () => {
    if (!meal) {
      return;
    }

    const updatedFavorites = isFavorite
      ? favorites.filter((item: any) => item.idMeal !== meal.idMeal)
      : [meal, ...favorites];

    dispatch(setFavorites(updatedFavorites));

    try {
      await persistFavoriteMeals(updatedFavorites);
    } catch (error) {
      dispatch(setFavorites(favorites));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.strMeal || "Recipe",
      headerFavoriteVisible: !!meal,
      headerFavoriteActive: isFavorite,
      headerOnFavoritePress: handleFavoriteToggle,
    });
  }, [handleFavoriteToggle, isFavorite, meal?.strMeal, navigation]);

  const retryMealDetail = () => {
    dispatch(mealDetailRequest(id));
  };

  if (mealDetailLoading) {
    return (
      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientMid, Colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Skeleton style={styles.image} />
          <View style={styles.contentCard}>
            <Skeleton style={styles.titleSkeleton} />
            <Skeleton style={styles.categorySkeleton} />
            <Skeleton style={styles.metaRowSkeleton} />
            <Skeleton style={styles.headingSkeleton} />
            <Skeleton style={styles.lineSkeleton} />
            <Skeleton style={styles.lineSkeleton} />
            <Skeleton style={styles.shortLineSkeleton} />
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }

  if (mealDetailError) {
    return (
      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientMid, Colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.feedbackCard}
      >
        <View style={styles.feedbackPanel}>
          <Text style={styles.feedbackTitle}>Meal details unavailable</Text>
          <Text style={styles.feedbackText}>{mealDetailError}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={retryMealDetail}>
            <Text style={styles.retryText}>Try again</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  if (!meal) {
    return (
      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientMid, Colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.feedbackCard}
      >
        <View style={styles.feedbackPanel}>
          <Text style={styles.feedbackTitle}>Meal not found</Text>
          <Text style={styles.feedbackText}>
            The selected recipe could not be loaded.
          </Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientMid, Colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroWrap}>
          <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
          <LinearGradient
            colors={[Colors.cardOverlayStart, Colors.cardOverlayEnd]}
            style={styles.imageOverlay}
          >
            <View style={styles.heroTopRow}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryBadgeText}>{meal.strCategory}</Text>
              </View>
              <View style={styles.saveBadge}>
                <Text style={styles.saveBadgeText}>
                  {isFavorite ? "Saved" : "Tap heart to save"}
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.heroTitle}>{meal.strMeal}</Text>
              <Text style={styles.heroSubtitle}>
                {meal.strArea ? `${meal.strArea} kitchen` : "Signature dish"}
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.contentCard}>
          <View style={styles.metaRow}>
            <View style={styles.metaCard}>
              <Text style={styles.metaLabel}>Category</Text>
              <Text style={styles.metaValue}>{meal.strCategory}</Text>
            </View>
            <View style={styles.metaCard}>
              <Text style={styles.metaLabel}>Origin</Text>
              <Text style={styles.metaValue}>{meal.strArea || "Global"}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>About this dish</Text>
          <Text style={styles.sectionText}>
            Rich flavors, balanced textures, and a restaurant-style finish for
            your home kitchen.
          </Text>

          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.ingredientsWrap}>
            {ingredients.map((ingredient: any) => (
              <View key={ingredient} style={styles.ingredientChip}>
                <Text style={styles.ingredientText}>{ingredient}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.sectionText}>{meal.strInstructions}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  heroWrap: {
    marginHorizontal: Matrics.ms(16),
    marginTop: Matrics.vs(16),
    borderRadius: Matrics.ms(30),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.border,
  },

  image: {
    width: "100%",
    height: Matrics.vs(360),
  },

  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    padding: Matrics.ms(18),
  },

  heroTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: Colors.chipBackground,
    paddingHorizontal: Matrics.s(12),
    paddingVertical: Matrics.vs(8),
    borderRadius: Matrics.ms(999),
  },

  categoryBadgeText: {
    color: Colors.primary,
    fontSize: Matrics.mvs(12),
    fontWeight: "800",
  },

  saveBadge: {
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: Matrics.s(12),
    paddingVertical: Matrics.vs(8),
    borderRadius: Matrics.ms(999),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },

  saveBadgeText: {
    color: Colors.white,
    fontSize: Matrics.mvs(11),
    fontWeight: "700",
  },

  heroTitle: {
    fontSize: Matrics.mvs(30),
    fontWeight: "900",
    color: Colors.white,
    lineHeight: Matrics.mvs(36),
  },

  heroSubtitle: {
    marginTop: Matrics.vs(4),
    color: "rgba(255, 255, 255, 0.82)",
    fontSize: Matrics.mvs(14),
    fontWeight: "700",
  },

  contentCard: {
    marginTop: Matrics.vs(-30),
    marginBottom: Matrics.vs(24),
    marginHorizontal: Matrics.ms(16),
    backgroundColor: Colors.surfaceMuted,
    borderRadius: Matrics.ms(28),
    padding: Matrics.ms(20),
    borderWidth: 1,
    borderColor: Colors.border,
  },

  metaRow: {
    flexDirection: "row",
    gap: Matrics.ms(12),
    marginBottom: Matrics.vs(18),
  },

  metaCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: Matrics.ms(18),
    padding: Matrics.ms(14),
    borderWidth: 1,
    borderColor: Colors.border,
  },

  metaLabel: {
    color: Colors.textSoft,
    fontSize: Matrics.mvs(11),
    fontWeight: "700",
    letterSpacing: 0.8,
    marginBottom: Matrics.vs(6),
  },

  metaValue: {
    color: Colors.text,
    fontSize: Matrics.mvs(16),
    fontWeight: "800",
  },

  sectionTitle: {
    color: Colors.text,
    fontSize: Matrics.mvs(19),
    fontWeight: "800",
    marginBottom: Matrics.vs(8),
    marginTop: Matrics.vs(10),
  },

  sectionText: {
    color: Colors.textSoft,
    fontSize: Matrics.mvs(14),
    lineHeight: Matrics.mvs(23),
  },

  ingredientsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: Matrics.vs(4),
  },

  ingredientChip: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: Matrics.s(12),
    paddingVertical: Matrics.vs(9),
    borderRadius: Matrics.ms(999),
    marginRight: Matrics.s(8),
    marginBottom: Matrics.vs(10),
  },

  ingredientText: {
    color: Colors.text,
    fontSize: Matrics.mvs(12),
    fontWeight: "600",
  },

  titleSkeleton: {
    height: Matrics.vs(30),
    width: "72%",
    marginBottom: Matrics.vs(12),
  },

  categorySkeleton: {
    height: Matrics.vs(16),
    width: "32%",
    marginBottom: Matrics.vs(20),
  },

  metaRowSkeleton: {
    height: Matrics.vs(72),
    width: "100%",
    marginBottom: Matrics.vs(18),
  },

  headingSkeleton: {
    height: Matrics.vs(22),
    width: "40%",
    marginBottom: Matrics.vs(14),
  },

  lineSkeleton: {
    height: Matrics.vs(15),
    width: "100%",
    marginBottom: Matrics.vs(10),
  },

  shortLineSkeleton: {
    height: Matrics.vs(15),
    width: "84%",
  },

  feedbackCard: {
    flex: 1,
    padding: Matrics.ms(24),
    justifyContent: "center",
    alignItems: "center",
  },

  feedbackPanel: {
    width: "100%",
    backgroundColor: Colors.surfaceMuted,
    borderRadius: Matrics.ms(24),
    padding: Matrics.ms(24),
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },

  feedbackTitle: {
    fontSize: Matrics.mvs(22),
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

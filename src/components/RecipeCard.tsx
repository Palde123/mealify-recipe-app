import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Matrics from "../theme/Matrics";
import { Colors } from "../theme/colors";

export default function RecipeCard({ meal, onPress }: any) {
  return (
    <TouchableOpacity
      style={styles.cardShadow}
      onPress={onPress}
      activeOpacity={0.92}
    >
      <View style={styles.card}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.image} />

        <LinearGradient
          colors={[Colors.cardOverlayStart, Colors.cardOverlayEnd]}
          style={styles.overlay}
        >
          <View style={styles.topRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.category}>{meal.strCategory}</Text>
            </View>
          </View>

          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.title}>
              {meal.strMeal}
            </Text>
            <Text style={styles.caption}>Tap to explore the full recipe</Text>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    marginBottom: Matrics.vs(15),
    borderRadius: Matrics.ms(24),
    shadowColor: "#563322",
    shadowOffset: {
      width: 0,
      height: Matrics.vs(14),
    },
    shadowOpacity: 0.14,
    shadowRadius: Matrics.ms(18),
    elevation: Matrics.vs(10),
  },

  card: {
    backgroundColor: Colors.surface,
    borderRadius: Matrics.ms(24),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.border,
  },

  image: {
    height: Matrics.vs(230),
    width: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    padding: Matrics.ms(16),
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  categoryBadge: {
    backgroundColor: Colors.chipBackground,
    paddingHorizontal: Matrics.s(12),
    paddingVertical: Matrics.vs(7),
    borderRadius: Matrics.ms(999),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },

  info: {
    paddingTop: Matrics.vs(20),
  },

  title: {
    fontSize: Matrics.mvs(22),
    fontWeight: "800",
    color: Colors.white,
    lineHeight: Matrics.mvs(28),
  },

  category: {
    color: Colors.primary,
    fontSize: Matrics.mvs(12),
    fontWeight: "700",
  },

  caption: {
    color: "rgba(255,255,255,0.82)",
    marginTop: Matrics.vs(8),
    fontSize: Matrics.mvs(13),
    fontWeight: "500",
  },
});

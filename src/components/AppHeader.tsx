import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Matrics from "../theme/Matrics";
import { Colors } from "../theme/colors";
import icons from "../theme/Images";
type AppHeaderProps = {
  title: string;
  showBackButton?: boolean;
  showFavoriteButton?: boolean;
  isFavoriteActive?: boolean;
  onBackPress?: () => void;
  onFavoritePress?: () => void;
};

export default function AppHeader({
  title,
  showBackButton = false,
  showFavoriteButton = false,
  isFavoriteActive = false,
  onBackPress,
  onFavoritePress,
}: AppHeaderProps) {
  const isBrandHeader = !showBackButton && title === "Mealify";

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <LinearGradient
          colors={[Colors.surface, Colors.gradientStart]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
          <View style={styles.leadingArea}>
            {showBackButton ? (
              <TouchableOpacity onPress={onBackPress} style={styles.actionButton}>
                <Image
                  source={icons.LEFT_ARROW}
                  style={styles.backIcon}
                />
              </TouchableOpacity>
            ) : isBrandHeader ? (

                <Image
                  source={icons.BRAND_ICON}
                  style={styles.brandIcon}
                />
              
            ) : (
              <View style={styles.actionPlaceholder} />
            )}
          </View>

          <View style={styles.titleWrap}>
            {isBrandHeader ? (
              <>
                {/* <Text style={styles.brandEyebrow}>Fresh recipes daily</Text> */}
                <Text numberOfLines={1} style={styles.brandTitle}>
                  Mealify
                </Text>
              </>
            ) : (
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
            )}
          </View>

          <View style={styles.trailingArea}>
            {showFavoriteButton ? (
              <TouchableOpacity
                onPress={onFavoritePress}
                style={styles.actionButton}
              >
                <Image
                  source={
                    isFavoriteActive
                      ? icons.HEART_FILLED
                      : icons.HEART
                  }
                  style={styles.favoriteIcon}
                />
              </TouchableOpacity>
            ) : (
              <View style={styles.actionPlaceholder} />
            )}
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    shadowColor: "#211712",
    shadowOffset: {
      width: 0,
      height: Matrics.vs(8),
    },
    shadowOpacity: 0.06,
    shadowRadius: Matrics.ms(16),
    elevation: Matrics.vs(6),
  },

  container: {
    minHeight: Matrics.vs(68),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Matrics.s(16),
    paddingBottom: Matrics.vs(12),
    paddingTop: Matrics.vs(8),
  },

  leadingArea: {
    width: Matrics.ms(56),
    justifyContent: "center",
    alignItems: "flex-start",
  },

  trailingArea: {
    width: Matrics.ms(56),
    justifyContent: "center",
    alignItems: "flex-end",
  },

  titleWrap: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Matrics.s(8),
  },

  actionButton: {
    width: Matrics.ms(42),
    height: Matrics.ms(42),
    borderRadius: Matrics.ms(16),
    backgroundColor: "rgba(255,255,255,0.58)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },

  brandBadge: {
    width: Matrics.ms(44),
    height: Matrics.ms(44),
    borderRadius: Matrics.ms(18),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Matrics.vs(8),
    },
    shadowOpacity: 0.2,
    shadowRadius: Matrics.ms(12),
    elevation: Matrics.vs(6),
  },

  actionPlaceholder: {
    width: Matrics.ms(42),
    height: Matrics.ms(42),
  },

  title: {
    fontSize: Matrics.mvs(24),
    fontWeight: "800",
    color: Colors.tittle,
    textAlign: "left",
    includeFontPadding: false,
  },

  brandEyebrow: {
    color: Colors.primary,
    fontSize: Matrics.mvs(10),
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: Matrics.vs(2),
    textTransform: "uppercase",
  },

  brandTitle: {
    fontSize: Matrics.mvs(30),
    fontWeight: "900",
    color: Colors.tittle,
    letterSpacing: -0.8,
    //includeFontPadding: false,
  },

  backIcon: {
    width: Matrics.ms(18),
    height: Matrics.ms(18),
    tintColor: Colors.primary,
    resizeMode: "contain",
  },

  favoriteIcon: {
    width: Matrics.ms(20),
    height: Matrics.ms(20),
    tintColor: Colors.primary,
    resizeMode: "contain",
  },

  brandIcon: {
    width: Matrics.ms(42),
    height: Matrics.ms(42),
    resizeMode: "contain",
    marginLeft:Matrics.ms(10),
    //tintColor: Colors.white,
  },
});

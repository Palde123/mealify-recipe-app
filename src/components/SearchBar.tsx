import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Matrics from "../theme/Matrics";
import { Colors } from "../theme/colors";
import icons from "../theme/Images";
export default function SearchBar({ value, onChange }: any) {
  return (
    <View style={styles.shadowWrap}>
      <View style={styles.container}>
        <View style={styles.iconBadge}>
          <Image
            source={icons.SEARCH_ICON}
            style={styles.searchIcon}
          />
        </View>

        <TextInput
          placeholder="Search recipes, ingredients, dishes..."
          placeholderTextColor="#9A928F"
          value={value}
          onChangeText={onChange}
          style={styles.input}
          selectionColor={Colors.primary}
        />

        {value ? (
          <TouchableOpacity
            onPress={() => onChange("")}
            style={styles.clearButton}
            activeOpacity={0.8}
          >
            <Image
              source={icons.CROSS_ICON}
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrap: {
    marginVertical: Matrics.vs(10),
    borderRadius: Matrics.ms(22),
    shadowColor: "#1F1A17",
    shadowOffset: {
      width: 0,
      height: Matrics.vs(10),
    },
    shadowOpacity: 0.08,
    shadowRadius: Matrics.ms(18),
   // elevation: Matrics.vs(2),
  },

  container: {
    minHeight: Matrics.vs(55),
    backgroundColor: Colors.surfaceMuted,
    borderRadius: Matrics.ms(22),
    paddingLeft: Matrics.s(14),
    paddingRight: Matrics.s(10),
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: "row",
    alignItems: "center",
  },

  iconBadge: {
    width: Matrics.ms(42),
    height: Matrics.ms(42),
    borderRadius: Matrics.ms(14),
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Matrics.s(12),
  },

  searchIcon: {
    width: Matrics.ms(18),
    height: Matrics.ms(18),
    resizeMode: "contain",
    tintColor: Colors.primary,
  },

  input: {
    fontSize: Matrics.mvs(16),
    color: Colors.text,
    flex: 1,
    paddingVertical: 0,
    fontWeight: "500",
  },

  clearButton: {
    width: Matrics.ms(38),
    height: Matrics.ms(38),
    borderRadius: Matrics.ms(19),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8EFEA",
    marginLeft: Matrics.s(10),
  },

  clearIcon: {
    width: Matrics.ms(12),
    height: Matrics.ms(12),
    resizeMode: "contain",
    tintColor: "#8C817B",
  },
});

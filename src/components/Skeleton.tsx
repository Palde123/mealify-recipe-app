import React, { useEffect, useRef } from "react";
import { Animated, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Matrics from "../theme/Matrics";

type SkeletonProps = {
  style?: StyleProp<ViewStyle>;
};

export default function Skeleton({ style }: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.45)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.45,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [opacity]);

  return <Animated.View style={[styles.base, { opacity }, style]} />;
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#E7DDD8",
    borderRadius: Matrics.ms(12),
  },
});

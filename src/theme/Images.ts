import { ImageSourcePropType } from 'react-native';

interface Icons {
  HEART: ImageSourcePropType;
  HEART_FILLED: ImageSourcePropType;
  BRAND_ICON: ImageSourcePropType;
  LEFT_ARROW: ImageSourcePropType;
  PLACEHOLDER:ImageSourcePropType;
  SEARCH_ICON: ImageSourcePropType;
  CROSS_ICON: ImageSourcePropType;
}

const icons: Icons = {
  HEART: require('../assets/Icons/Heart.png'),
  HEART_FILLED: require('../assets/Icons/FilledHeart.png'),
  BRAND_ICON: require("../assets/Icons/Background.png"),
  LEFT_ARROW: require('../assets/Icons/LeftArrow.png'),
  PLACEHOLDER:require('../assets/Icons/recipe.png'),
  SEARCH_ICON: require('../assets/Icons/search.png'),
  CROSS_ICON: require('../assets/Icons/cross.png'),
};

export default icons;

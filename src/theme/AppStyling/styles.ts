import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import Matrics from './Matrics';
import { Colors } from '../colors';
import typography from './typography';

interface Theme {
  backgroundColor: string;
  backgroundCard: string;
  fontColor: string;
  color: string;
}

interface Styles {
  flexone: ViewStyle;
  wrapper: ViewStyle;
  backIcon: ImageStyle;
  shadow: ViewStyle;
  shadowUp: ViewStyle;
  root: ViewStyle;
  rootTop: ViewStyle;
  emptyView: ViewStyle;
  emptyText: TextStyle;
  emptyTextDesc: TextStyle;
  flexGrow: ViewStyle;
  shadowColor: (shadowColor: string) => ViewStyle;
  mainBody: (theme: Theme) => ViewStyle;
}

const styles = StyleSheet.create<Omit<Styles, 'shadowColor' | 'mainBody'>>({
  flexone: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backIcon: {
    height: Matrics.ms(18),
    width: Matrics.ms(18),
    tintColor: Colors.primary,
  },
  shadow: {
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  shadowUp: {
    shadowColor: Colors.primary,
    shadowOffset: { width: Matrics.s(0), height: Matrics.vs(5) },
    shadowRadius: Matrics.mvs(20),
    shadowOpacity: 0.2,
    elevation: Matrics.vs(5),
  },
  root: {
    marginHorizontal: Matrics.ms(15),
    marginTop: Matrics.ms(15),
    flex: 1,
  },
  rootTop: {
    marginTop: Matrics.ms(15),
    flex: 1,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: Matrics.ms(10),
    textTransform: 'uppercase',
    fontFamily: typography.fontFamily.Inter.Light,
    fontSize: typography.fontSizes.fs12,
    color: Colors.gray,
    textAlign: 'center',
  },
  emptyTextDesc: {
    marginTop: Matrics.ms(10),
    fontFamily: typography.fontFamily.Inter.Light,
    fontSize: typography.fontSizes.fs12,
    color: Colors.gray
  },
  flexGrow: {
    flexGrow: 1,
  },
});

const shadowColor = (color: string): ViewStyle => ({
  shadowColor: color,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 5,
});

const mainBody = (theme: Theme): ViewStyle => ({
  flex: 1,
  backgroundColor: theme.backgroundColor,
});

export default {
  ...styles,
  shadowColor,
  mainBody, // include this too
};

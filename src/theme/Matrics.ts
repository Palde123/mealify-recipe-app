import { Dimensions, Platform, StatusBar } from "react-native";
import { ms, mvs, s, vs } from "react-native-size-matters";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;
const baselineHeight = screenHeight === 812 ? 800 : 680;

const X_WIDTH = 812;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 896;
const XSMAX_HEIGHT = 896;

const isIPhoneX = (): boolean =>
  Platform.OS === "ios" && !Platform.isPad
    ? screenWidth === X_WIDTH ||
      screenHeight === X_HEIGHT ||
      screenWidth === XSMAX_WIDTH ||
      screenHeight === XSMAX_HEIGHT
    : false;

const scale = (value: number): number =>
  Math.round((screenHeight / baselineHeight) * value);

const statusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 25,
  android: StatusBar.currentHeight || 0,
  default: 0,
});

interface Matrics {
  screenHeight: number;
  screenWidth: number;
  statusBarHeight: number;
  isIPhoneX: () => boolean;
  s: typeof s;
  vs: typeof vs;
  ms: typeof ms;
  mvs: typeof mvs;
  scale: (value: number) => number;
}

const MatricsExport: Matrics = {
  screenHeight: screenWidth < screenHeight ? screenHeight : screenWidth,
  screenWidth: screenWidth < screenHeight ? screenWidth : screenHeight,
  statusBarHeight,
  isIPhoneX,
  s,
  vs,
  ms,
  mvs,
  scale,
};

export default MatricsExport;
export { scale as Scale };

import * as Font from "expo-font";

export const useFonts = async () =>
  await Font.loadAsync({
    montRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    montMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    montBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    montSBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

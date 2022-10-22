import { StyleSheet, View, Image, Text } from "react-native";
import BackButton from "../UI/BackButton";

interface WelcomeLogoProps {
  navigation: any;
  isWelcomeScreen: boolean;
}
const WelcomeLogo = ({ navigation, isWelcomeScreen }: WelcomeLogoProps) => {
  return (
    <View style={styles.whiteContainer}>
      {!isWelcomeScreen && (
        <BackButton toScreen="Welcome" navigation={navigation} />
      )}
      <Image
        style={styles.logo}
        source={require("../../images/matcherLogo.png")}
      />
      <Text style={styles.title}>Matcher</Text>
      <Text style={styles.desc}>
        Find Your Best{" "}
        <Text
          style={{
            color: "#1E1E1E",
            fontFamily: "montSBold",
            letterSpacing: -1,
          }}
        >
          Match
        </Text>{" "}
        with Us!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  logo: {},
  title: {
    fontSize: 40,
    marginTop: 10,
    letterSpacing: -2.5,
    fontFamily: "montMedium",
  },
  desc: {
    fontSize: 18,
    marginTop: 20,
    color: "#511E78",
    fontFamily: "montMedium",
  },
});
export default WelcomeLogo;

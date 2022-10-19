import { StyleSheet, View, Image, Text } from "react-native";

const WelcomeLogoLogin = () => {
  return (
    <View style={styles.whiteContainer}>
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
    height: "55%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  logo: {
    marginTop: 130,
  },
  title: {
    fontSize: 40,
    marginTop: 2,
    fontFamily: "montMedium",
    letterSpacing: -2.5,
    marginBottom: "5%",
  },
  desc: {
    fontSize: 18,
    marginTop: 20,
    color: "#511E78",
    fontFamily: "montMedium",
  },
});
export default WelcomeLogoLogin;

import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

interface MessageScreenProps {
  route: any;
  navigation: any;
}

const MessageScreen = ({ route, navigation }: MessageScreenProps) => {
  const user = route.params.user;

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.shadowProp]}>
        <View style={styles.headerContainer}>
          <View style={styles.headerItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image source={require("../../images/backIcon.png")} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#1E1E1E",
                fontFamily: "montSBold",
              }}
            >
              {user.name}
            </Text>
          </View>
          <View style={styles.headerItem}>
            <Image source={require("../../images/moreBtn.png")} />
          </View>
        </View>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 115,
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "flex-end",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  headerItem: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MessageScreen;

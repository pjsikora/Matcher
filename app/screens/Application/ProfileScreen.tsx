import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import { useEffect } from "react";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      defaultStatus="open"
      useLegacyImplementation={true}
      initialRouteName="Home"
      screenOptions={{ headerShown: false, swipeEnabled: false }}
      drawerContent={(props) => {
        return (
          <View style={styles.container}>
            <Image
              style={styles.bcg}
              source={require("../../images/me/bcgProfileScreen.png")}
            />
            <View style={styles.imageContainer}>
              <Image
                style={styles.profilePhoto}
                source={require("../../images/me/profilePhoto.png")}
              />
            </View>
            <Text style={styles.nameText}>Josh, 26</Text>

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Image
                  style={styles.buttonIcon}
                  source={require("../../images/me/settingsButton.png")}
                />
                <Text style={styles.btnText}>Settings</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Image
                  style={styles.buttonIcon}
                  source={require("../../images/me/editButton.png")}
                />
                <Text style={styles.btnText}>Edit info</Text>
              </View>
            </View>

            <View style={styles.versionContainer}>
              <Image
                style={styles.logoIcon}
                source={require("../../images/me/logoVersion.png")}
              />
              <Text style={styles.versionText}>Version 1.0.0</Text>
            </View>

            <TouchableOpacity style={styles.logoutBtn}>
              <Image source={require("../../images/me/logoutBtnIcon.png")} />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  bcg: {
    position: "absolute",
  },
  imageContainer: {
    marginTop: "30%",
    width: 230,
    height: 230,
    borderRadius: 150,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePhoto: {
    width: "100%",
    height: "100%",
  },
  nameText: {
    fontSize: 40,
    fontFamily: "montBold",
    marginTop: "5%",
  },
  buttonsContainer: {
    width: "80%",
    height: 100,
    marginTop: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btnIcon: {
    marginBottom: "5%",
  },
  btnText: {
    fontSize: 16,
    fontFamily: "montMedium",
    color: "#ABABAB",
  },
  versionContainer: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
    padding: 10,
    marginTop: "40%",
  },
  logoutBtn: {
    marginTop: "12%",
    backgroundColor: "#CF56A1",
    width: "70%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 20,
  },
  logoutText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "montSBold",
    marginLeft: 10,
  },
  versionText: {},
  logoIcon: {},
  buttonIcon: {},
});

export default ProfileScreen;

import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import { useEffect, useState } from "react";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import LoadingDots from "react-native-loading-dots";
import { useDispatch, useSelector } from "react-redux";
import { getUserCall } from "../../controllers/userController";
import { saveUserData, updateUser } from "../../redux/userSlice";
import SettingsScreen from "./SettingsScreen";
import { BottomTab } from "../../App";
import EditInfoScreen from "./EditInfoScreen";
import EditGender from "../editInfo/EditGender";
import EditHobbies from "../editInfo/EditHobbies";

const AppContainer = ({ navigation }: { navigation: any }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const Drawer = createDrawerNavigator();

  const state = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    const getUser = async () => {
      const result: any = await getUserCall(state.accessToken, dispatch);

      if (result.success) {
        setUser(result.message);
        dispatch(updateUser(result.message));
      }
    };

    getUser();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    setTimeout(() => {
      isMounted && setLoading(state.pending);
    }, 2000);

    return () => {
      isMounted = false;
    };
  }, [state.pending]);

  const logoutHandler = () => {
    dispatch(saveUserData({}));
    navigation.navigate("Welcome");
  };
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="bottomTab"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerStyle: { width: "80%" },
      }}
      drawerContent={(props) => {
        return (
          <View style={styles.container}>
            {loading && user ? (
              <View style={styles.loading}>
                <LoadingDots />
              </View>
            ) : (
              <>
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
                <Text style={styles.nameText}>
                  {user && user.username}, {user && user.age}
                </Text>
                <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("settings");
                      }}
                    >
                      <Image
                        style={styles.buttonIcon}
                        source={require("../../images/me/settingsButton.png")}
                      />
                      <Text style={styles.btnText}>Settings</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("edit");
                      }}
                    >
                      <Image
                        style={styles.buttonIcon}
                        source={require("../../images/me/editButton.png")}
                      />
                      <Text style={styles.btnText}>Edit info</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.versionContainer}>
                  <Image
                    style={styles.logoIcon}
                    source={require("../../images/me/logoVersion.png")}
                  />
                  <Text style={styles.versionText}>Version 1.0.0</Text>
                </View>
                <TouchableOpacity
                  style={styles.logoutBtn}
                  onPress={() => {
                    logoutHandler();
                  }}
                >
                  <Image
                    source={require("../../images/me/logoutBtnIcon.png")}
                  />
                  <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
              </>
            )}

            {/* <Spinner visible={true} textContent={'Loading...'} /> */}
          </View>
        );
      }}
    >
      <Drawer.Screen name="bottomTab" component={BottomTab} />
      <Drawer.Screen name="settings" component={SettingsScreen} />
      <Drawer.Screen name="edit" component={EditInfoScreen} />
      <Drawer.Screen name="editGender" component={EditGender} />
      <Drawer.Screen name="editHobbies" component={EditHobbies} />
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
    top: 0,
    left: 0,
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
    marginTop: "45%",
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
  loading: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppContainer;

import useCachedResources from "./hooks/useCachedResources";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import EmailScreen from "./screens/SignUp/EmailScreen";
import PasswordScreen from "./screens/SignUp/PasswordScreen";
import NameScreen from "./screens/SignUp/NameScreen";
import AgeScreen from "./screens/SignUp/AgeScreen";
import GenderScreen from "./screens/SignUp/GenderInput";
import SearchForScreen from "./screens/SignUp/SearchForScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LocationScreen from "./screens/SignUp/LocationScreen";
import PhotosScreen from "./screens/SignUp/PhotosScreen";
import HobbyScreen from "./screens/SignUp/HobbyScreen";
import AboutYourselfScreen from "./screens/SignUp/AboutYourselfScreen";
import VerifyEmailScreen from "./screens/SignUp/VerifyEmailScreen";
import SignInScreen from "./screens/SignIn/SignIn";
import SuccessScreen from "./screens/SignUp/SuccessScreen";
import { useFonts } from "./hooks/useFonts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SwapScreen from "./screens/Application/SwapScreen";
import HomeScreen from "./screens/Application/HomeScreen";
import MatchesScreen from "./screens/Application/MatchesScreen";
import MessagesScreen from "./screens/Application/MessagesScreen";
import ProfileScreen from "./screens/Application/ProfileScreen";
import SettingsScreen from "./screens/Application/SettingsScreen";
import { View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TestScreen from "./screens/Application/TestScrees";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function AppContainer() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: "center",
        },
        tabBarStyle: {
          width: "100%",
          height: 100,
          backgroundColor: "#FFF",
          borderTopWidth: 0,
          shadowColor: "rgba(172, 55, 127, 0.05)",
          shadowOpacity: 1,
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <View>
                <Image
                  source={require("../app/images/bottomTabNav/swap.png")}
                />
              </View>
            ) : (
              <View style={styles.bottomTabIconContainer}>
                <Image
                  source={require("../app/images/bottomTabNav/swapFocused.png")}
                />
              </View>
            );
          },
        }}
        name="SwapScreen"
        component={SwapScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <View>
                <Image
                  source={require("../app/images/bottomTabNav/matches.png")}
                />
              </View>
            ) : (
              <View style={styles.bottomTabIconContainer}>
                <Image
                  source={require("../app/images/bottomTabNav/matchesFocused.png")}
                />
              </View>
            );
          },
        }}
        name="Matches"
        component={MatchesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <View>
                <Image
                  source={require("../app/images/bottomTabNav/home.png")}
                />
              </View>
            ) : (
              <View style={styles.bottomTabIconContainer}>
                <Image
                  source={require("../app/images/bottomTabNav/home.png")}
                />
              </View>
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <View>
                <Image
                  source={require("../app/images/bottomTabNav/messages.png")}
                />
              </View>
            ) : (
              <View style={styles.bottomTabIconContainer}>
                <Image
                  source={require("../app/images/bottomTabNav/messagesFocused.png")}
                />
              </View>
            );
          },
        }}
        name="Messages"
        component={MessagesScreen}
      />
      <Tab.Screen
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <View>
                <Image
                  source={require("../app/images/bottomTabNav/profile.png")}
                />
              </View>
            ) : (
              <View style={styles.bottomTabIconContainer}>
                <Image
                  source={require("../app/images/bottomTabNav/profileFocused.png")}
                />
              </View>
            );
          },
        }}
        name="Test"
        component={TestScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const isLoadingComplete = useCachedResources();

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isLoadingComplete) {
    LoadFonts();
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="emailInput"
              component={EmailScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="passwordInput"
              component={PasswordScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="nameInput"
              component={NameScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="ageInput"
              component={AgeScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="genderInput"
              component={GenderScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="searchForInput"
              component={SearchForScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="photosInput"
              component={PhotosScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="aboutYourselfInput"
              component={AboutYourselfScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="hobbyInput"
              component={HobbyScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="locationInput"
              component={LocationScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="tokenInput"
              component={VerifyEmailScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="success"
              component={SuccessScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="signIn"
              component={SignInScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="profileScreen"
              component={ProfileScreen}
              options={{ title: "", gestureEnabled: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabIconContainer: {
    backgroundColor: "#F2F2F2",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

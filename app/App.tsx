import useCachedResources from "./hooks/useCachedResources";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
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

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
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
              name="locationInput"
              component={LocationScreen}
              options={{ title: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

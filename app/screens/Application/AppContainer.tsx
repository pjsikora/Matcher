import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SwapScreen from "./SwapScreen";
import MatchesScreen from "./MatchesScreen";
import MessagesScreen from "./MessagesScreen";
import ProfileScreen from "./ProfileScreen";
import React from "react";

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="SwapScreen" component={SwapScreen} />
        <Tab.Screen name="Matches" component={MatchesScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default AppContainer;

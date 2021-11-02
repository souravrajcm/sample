import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import EventsScreen from "./src/screens/EventsScreen";
import Home from "./src/screens/Home";
import VisitorsScreen from "./src/screens/VisitorsScreen";
import Support from "./src/screens/Support";
import MyTabs from "./src/navigation/MyTabs";
import ProfileScreen from "./src/screens/ProfileScreen";
import Access_Control from "./src/screens/Access_Control";
import Food_Beverages from "./src/screens/Food_Beverages";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="Home"
          component={MyTabs}
          options={{ drawerLabel: "Home", }}
        />
        <Drawer.Screen
          name="profile"
          component={ProfileScreen}
          options={{ drawerLabel: "Profile" }}
        />
        <Drawer.Screen
          name="Access_control"
          component={Access_Control}
          options={{ drawerLabel: "Access Control" }}
        />
        <Drawer.Screen
          name="Food_Beverages"
          component={Food_Beverages}
          options={{ drawerLabel: "Food and Beverages" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  <div>
    
  </div>
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./Settings";
import React from "react";
const Stack = createNativeStackNavigator();

function SettingsScreenNavigation() {
  return (
    <Stack.Navigator>
      {allScreens.map((c, i) => (
        <Stack.Screen
          name={c.name}
          component={c.component}
          key={i}
          options={{ tabBarIcon: c.tabBarIcon, headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default SettingsScreenNavigation;
const allScreens = [{ name: "Home", component: Settings }];

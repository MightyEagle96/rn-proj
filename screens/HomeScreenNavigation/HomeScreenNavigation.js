import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import HotelScreen from "./HotelScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Payments from "./Payments";

const Stack = createNativeStackNavigator();
function HomeScreenNavigation() {
  return (
    <Stack.Navigator>
      {allScreens.map((c, i) => (
        <Stack.Screen
          name={c.name}
          component={c.component}
          key={i}
          options={{ tabBarIcon: c.tabBarIcon }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default HomeScreenNavigation;

const allScreens = [
  {
    name: "Home",
    component: HomeScreen,
    // tabBarIcon: () => <Ionicons name="home-outline" size={20} color="black" />,
  },
  {
    name: "Payments",
    component: Payments,
    //tabBarIcon: () => <MaterialIcons name="payment" size={20} color="black" />,
  },
];

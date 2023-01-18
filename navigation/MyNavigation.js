import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleSheet } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState, useEffect } from "react";

import { LoginContext } from "../contexts/LoginContext";

import { AllScreens, AuthScreens } from "../screens/AllScreens";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyNavigation() {
  const [token, setToken] = useState(null);

  const getToken = async () => {
    const value = await AsyncStorage.getItem("token");

    setToken(value);
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <LoginContext.Provider value={{ token, setToken }}>
      {token ? (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            {AllScreens.map((c, i) => (
              <Drawer.Screen name={c.name} component={c.component} key={i} />
            ))}
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          {AuthScreens.map((c, i) => (
            <Stack.Screen component={c.component} name={c.name} key={i} />
          ))}
        </NavigationContainer>
      )}
    </LoginContext.Provider>
  );
}

export default MyNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});

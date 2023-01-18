import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerLayoutAndroid,
  Platform,
  StyleSheet,
  View,
  Text,
} from "react-native";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "../screens/HomePage";
import { useState, useEffect, useRef } from "react";

import { LoginContext } from "../contexts/LoginContext";
import { IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const screens = [{ name: "Home", component: HomeScreen }];

const Stack = createNativeStackNavigator();

function MyNavigation() {
  const [token, setToken] = useState(null);

  const getToken = async () => {
    const value = await AsyncStorage.getItem("token");

    setToken(value);
  };
  useEffect(() => {
    getToken();
  }, []);
  const drawer = useRef(null);
  const [drawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Hello</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
    <LoginContext.Provider value={{ token, setToken }}>
      {Platform.OS === "android" ? (
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition={drawerPosition}
          renderNavigationView={navigationView}
        >
          <NavigationContainer>
            <Stack.Navigator>
              {token ? (
                <>
                  {screens.map((c, i) => (
                    <Stack.Screen
                      key={i}
                      name={c.name}
                      options={{
                        headerLeft: () => {
                          return Platform.OS === "android" ? (
                            <IconButton
                              onPress={() => drawer.current.openDrawer()}
                              icon={() => (
                                <Icon style={{ fontSize: 23 }} name="menu" />
                              )}
                            />
                          ) : null;
                        },
                      }}
                    >
                      {(props) => <c.component {...props} />}
                    </Stack.Screen>
                  ))}
                </>
              ) : (
                <>
                  <Stack.Screen name="Login">
                    {(props) => <LoginScreen {...props} setToken={setToken} />}
                  </Stack.Screen>
                  <Stack.Screen name="Sign Up">
                    {(props) => <SignUpScreen {...props} setToken={setToken} />}
                  </Stack.Screen>
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </DrawerLayoutAndroid>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            {token ? (
              <>
                {screens.map((c, i) => (
                  <Stack.Screen
                    key={i}
                    name={c.name}
                    options={{
                      headerLeft: () => {
                        return Platform.OS === "android" ? (
                          <IconButton
                            onPress={() => drawer.current.openDrawer()}
                            icon={() => (
                              <Icon style={{ fontSize: 23 }} name="menu" />
                            )}
                          />
                        ) : null;
                      },
                    }}
                  >
                    {(props) => <c.component {...props} />}
                  </Stack.Screen>
                ))}
              </>
            ) : (
              <>
                <Stack.Screen name="Login">
                  {(props) => <LoginScreen {...props} setToken={setToken} />}
                </Stack.Screen>
                <Stack.Screen name="Sign Up">
                  {(props) => <SignUpScreen {...props} setToken={setToken} />}
                </Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </LoginContext.Provider>
  );
}

export default MyNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
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

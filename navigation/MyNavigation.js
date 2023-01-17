import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "../screens/HomePage";
import { useState, useEffect } from "react";

import { LoginContext } from "../contexts/LoginContext";

const screens = [
  { name: "Home", component: HomeScreen },
  // { name: "Sign Up", component: SignUpScreen },
];

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
  return (
    // <LoginContext>
    <LoginContext.Provider value={{ token, setToken }}>
      <NavigationContainer>
        <Stack.Navigator>
          {token ? (
            <>
              {screens.map((c, i) => (
                <Stack.Screen
                  key={i}
                  name={c.name}
                  // options={{ headerTransparent: true }}
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LoginContext.Provider>
  );
}

export default MyNavigation;

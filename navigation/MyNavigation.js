import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";

const screens = [
  { name: "Login", component: LoginScreen },
  { name: "Sign Up", component: SignUpScreen },
];

const Stack = createNativeStackNavigator();

function MyNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((c, i) => (
          <Stack.Screen key={i} name={c.name}>
            {(props) => <c.component {...props} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigation;

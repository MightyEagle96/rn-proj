import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";

import { LoginContext } from "../contexts/LoginContext";
function HomeScreen() {
  const { setToken } = useContext(LoginContext);

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("account");

    setToken(null);
  };

  return (
    <View>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
export default HomeScreen;

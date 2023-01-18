import { View, DrawerLayoutAndroid, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useRef, useState } from "react";

import { Text, Button, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LoginContext } from "../contexts/LoginContext";

function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({});
  }, []);
  const { setToken } = useContext(LoginContext);

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("account");

    setToken(null);
  };

  return <View style={styles.container}></View>;
}
export default HomeScreen;

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

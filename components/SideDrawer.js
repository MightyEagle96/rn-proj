import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Stack, Chip } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
function MySideDrawer({ navigation }) {
  const menuItems = [
    {
      text: "Home",
      icon: () => <SimpleLineIcons name="home" size={24} />,
      navigateTo: "home",
    },
    {
      text: "Bookings",
      icon: () => <Fontisto name="hotel" size={24} />,
      navigateTo: "bookings",
    },
    {
      text: "Settings",
      icon: () => <SimpleLineIcons name="settings" size={24} />,
      navigateTo: "settings",
    },
  ];
  return (
    <View style={styles.container}>
      <Stack fill center spacing={40}>
        {menuItems.map((c, i) => (
          <Chip
            key={i}
            variant="filled"
            label={() => <Text style={{ fontSize: 18 }}>{c.text}</Text>}
            leading={() => <c.icon />}
            // onPress={navigation.navigate(c.navigateTo)}
          />
        ))}
      </Stack>
    </View>
  );
}

export default MySideDrawer;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

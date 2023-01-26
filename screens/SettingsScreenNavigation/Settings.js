import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Avatar, Icon } from "@react-native-material/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Feather } from "@expo/vector-icons";
function Settings() {
  const [user, setUser] = useState(null);
  const getData = async () => {
    const userData = await AsyncStorage.getItem("userData");

    setUser(JSON.parse(userData));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Settings</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginEnd: 10 }}>
              <Avatar
                image={{
                  uri: "https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=600",
                }}
              />
            </View>
            <View>
              <Text
                style={{ fontWeight: "500", fontSize: 20, marginBottom: 5 }}
              >{`${user.firstName} ${user.lastName}`}</Text>
              <Text
                style={{ fontWeight: "300", fontSize: 15, marginBottom: 5 }}
              >{`${user.emailAddress}`}</Text>
            </View>
          </View>

          <View style={{ marginTop: 50 }}>
            <View style={{ marginBottom: 20 }}>
              <ListItem
                leadingMode="icon"
                leading={<AntDesign name="user" size={24} color="#9e9e9e" />}
                title="Account"
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <ListItem
                leadingMode="icon"
                leading={
                  <AntDesign name="notification" size={24} color="#ff3d00" />
                }
                title="Notifications"
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <ListItem
                leadingMode="icon"
                leading={<Feather name="lock" size={24} color="#ff9100" />}
                title="Privacy"
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <ListItem
                leadingMode="icon"
                leading={
                  <AntDesign name="infocirlceo" size={24} color="#4caf50" />
                }
                title="Help"
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <ListItem
                leadingMode="icon"
                leading={<AntDesign name="hearto" size={24} color="#007bb2" />}
                title="Tell a friend"
              />
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: { marginTop: 100, padding: 15 },
  title: { fontWeight: "700", fontSize: 45, marginBottom: 20 },
});

import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

function EmployeeItem({ data, navigation }) {
  return (
    <View style={styles.employeeView}>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        android_ripple={{ color: "#bdbdbd" }}
        onPress={() => navigation.navigate("Employee", data.item)}
      >
        <View>
          <Image source={{ uri: data.item.avatar }} style={styles.avatar} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ marginBottom: 5, fontWeight: "700", fontSize: 18 }}>
            {data.item.name}
          </Text>
          <Text>{data.item.role}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default EmployeeItem;

const styles = StyleSheet.create({
  avatar: { height: 80, width: 80, borderRadius: 50 },

  employeeView: {
    //paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});

/* eslint-disable react/prop-types */
import { Avatar, Text } from "@react-native-material/core";
import React from "react";
import { View, Image, Pressable } from "react-native";

function HotelTypeItem({ data, navigation }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Pressable
        android_ripple={{ color: "#bdbdbd" }}
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("HotelScreen", data.item)}
      >
        <Avatar
          size={80}
          image={
            <Image
              source={{
                uri: data.item.uri,
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 5,
              }}
            />
          }
        />
        <View style={{ marginLeft: 10 }}>
          <Text variant="h6" color="#757575" style={{ marginBottom: 1 }}>
            {data.item.type}
          </Text>
          <Text variant="subtitle1">{data.item.description}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default HotelTypeItem;

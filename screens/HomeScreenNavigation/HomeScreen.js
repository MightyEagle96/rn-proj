/* eslint-disable react/prop-types */
import React from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";

import { Text, Divider } from "@react-native-material/core";

import HotelTypeItem from "./HotelTypeItem";
import { hotelPlans } from "../AllScreens";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={{
            uri: "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          resizeMode="cover"
          style={styles.imgBackground}
        >
          <Text
            style={{
              color: "white",
              backgroundColor: "#000000c0",
              padding: 30,
              textAlign: "right",
              fontWeight: "700",
              fontSize: 24,
            }}
          >
            ME-CORP HOTELS
          </Text>
        </ImageBackground>
      </View>
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <Text
          style={{ fontWeight: "600", textAlign: "center" }}
          variant="h6"
          color="#616161"
        >
          HOTEL CLASSES
        </Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          data={hotelPlans}
          renderItem={(itemData) => (
            <HotelTypeItem data={itemData} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    height: 300,
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "flex-end",
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

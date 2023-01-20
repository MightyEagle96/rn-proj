/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Button, Text, Surface } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";

function HotelScreen({ route, navigation }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const { params } = route;

    setData(params);

    navigation.setOptions({ title: params.type });
  }, []);
  return (
    <View>
      {data ? (
        <View>
          <ImageBackground
            source={{ uri: data.uri }}
            resizeMode="cover"
            style={styles.imgBackground}
          >
            <Text
              style={{
                color: "white",
                backgroundColor: "#000000c0",
                padding: 20,
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: 24,
              }}
            >
              {data.type}
            </Text>
          </ImageBackground>
          <View style={{ padding: 15 }}>
            <Text style={{ marginBottom: 20 }} variant="h6">
              {data.description}
            </Text>
            <Text>{data.text}</Text>

            <View style={{ marginTop: 20 }}>
              {data.rates.map((c, i) => (
                // <Text>{c.name}</Text>
                <Surface
                  key={i}
                  elevation={2}
                  category="medium"
                  style={{
                    padding: 15,
                    marginBottom: 15,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text>{c.name}</Text>
                  <Button
                    title={`$${c.price.toLocaleString()}.00`}
                    variant="text"
                    color="#2196f3"
                    trailing={() => (
                      <MaterialIcons name="payment" size={24} color="#2196f3" />
                    )}
                  />
                </Surface>
              ))}
            </View>
            {/* <View style={{ marginTop: 20 }}>
              <Button
                title="Pay now"
                variant="text"
                color="#2196f3"
                trailing={() => (
                  <MaterialIcons name="payment" size={24} color="#2196f3" />
                )}
              />
            </View> */}
          </View>
        </View>
      ) : null}
    </View>
  );
}

export default HotelScreen;

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

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

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
          <Text>HELLo</Text>
        </View>
      ) : null}
    </View>
  );
}

export default HotelScreen;

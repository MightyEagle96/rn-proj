import { View, Text, Button, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { employees } from "../data/employees";
import EmployeeItem from "../components/EmployeeItem";
import { useState, useEffect } from "react";

function EmployeesScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={employees}
        renderItem={(itemData) => {
          return <EmployeeItem data={itemData} navigation={navigation} />;
        }}
      />
    </View>
  );
}

function EmployeeScreen({ route, navigation }) {
  const data = route.params;

  //this is to set the title option of the page
  useEffect(() => {
    navigation.setOptions({ title: data.name });
  });
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}

const screens = [
  {
    name: "Employees",
    component: EmployeesScreen,
    pageTitle: "Company Employees",
  },
  { name: "Employee", component: EmployeeScreen },
];

const Stack = createNativeStackNavigator();

function MyNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((c, i) => (
          <Stack.Screen
            key={i}
            name={c.name}
            //component={c.component}
            options={{ title: c.pageTitle }}
          >
            {(props) => <c.component {...props} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigation;

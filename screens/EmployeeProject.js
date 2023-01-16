import { View, Text, Button, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { employees } from "../data/employees";
import EmployeeItem from "../components/EmployeeItem";

function EmployeesScreen() {
  return (
    <View>
      <FlatList
        data={employees}
        renderItem={(itemData) => {
          return <EmployeeItem data={itemData} />;
        }}
      />
    </View>
  );
}

function EmployeeScreen() {}

const screens = [
  { name: "Employees", component: EmployeesScreen },
  { name: "Employee", component: EmployeeScreen },
];

const Stack = createNativeStackNavigator();

function MyNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((c, i) => (
          <Stack.Screen key={i} name={c.name} component={c.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigation;

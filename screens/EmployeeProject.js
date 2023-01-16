// import { View, Text, Image, FlatList, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { employees } from "../data/employees";
// import EmployeeItem from "../components/EmployeeItem";
// import { useState, useEffect } from "react";

// function EmployeesScreen({ navigation }) {
//   return (
//     <View>
//       <FlatList
//         data={employees}
//         renderItem={(itemData) => {
//           return <EmployeeItem data={itemData} navigation={navigation} />;
//         }}
//       />
//     </View>
//   );
// }

// function EmployeeScreen({ route, navigation }) {
//   const data = route.params;

//   //this is to set the title option of the page
//   useEffect(() => {
//     navigation.setOptions({ title: data.name });
//   });
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.imgAvatar}>
//         <Image source={{ uri: data.avatar }} style={styles.avatar} />
//       </View>
//       <View></View>
//     </View>
//   );
// }

// const screens = [
//   {
//     name: "Employees",
//     component: EmployeesScreen,
//     pageTitle: "Company Employees",
//   },
//   { name: "Employee", component: EmployeeScreen },
// ];

// const Stack = createNativeStackNavigator();

// const styles = StyleSheet.create({
//   avatar: { height: 200, width: 200, borderRadius: 100 },

//   imgAvatar: { justifyContent: "center", alignItems: "center", padding: 20 },
// });

import React from "react";

import HomeScreenNavigation from "./HomeScreenNavigation/HomeScreenNavigation";
import LoginScreen from "./Login";

import SignUpScreen from "./SignUp";

import { Ionicons } from "@expo/vector-icons";
import SettingsScreenNavigation from "./SettingsScreenNavigation/SettingsScreenNavigation";

const AllScreens = [
  {
    name: "ME-CORP",
    component: HomeScreenNavigation,
    tabIcon: () => <Ionicons name="home" size={20} color="#1976d2" />,
  },
  {
    name: "Settings",
    component: SettingsScreenNavigation,
    tabIcon: () => <Ionicons name="settings" size={20} color="#1976d2" />,
  },
];

const AuthScreens = [
  { name: "Login", component: LoginScreen },
  { name: "Sign Up", component: SignUpScreen },
];

export { AllScreens, AuthScreens };

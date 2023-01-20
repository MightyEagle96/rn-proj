import React from "react";
import Bookings from "./Bookings";
import HomeScreenNavigation from "./HomeScreenNavigation/HomeScreenNavigation";
import LoginScreen from "./Login";
import Settings from "./Settings";
import SignUpScreen from "./SignUp";

import { Ionicons } from "@expo/vector-icons";

const AllScreens = [
  {
    name: "Home",
    component: HomeScreenNavigation,
    tabIcon: () => <Ionicons name="home" size={20} color="#1976d2" />,
  },
  {
    name: "Bookings",
    component: Bookings,
    tabIcon: () => <Ionicons name="pencil" size={20} color="#1976d2" />,
  },
  {
    name: "Settings",
    component: Settings,
    tabIcon: () => <Ionicons name="settings" size={20} color="#1976d2" />,
  },
];

const AuthScreens = [
  { name: "Login", component: LoginScreen },
  { name: "Sign Up", component: SignUpScreen },
];

const hotelPlans = [
  {
    type: "Deluxe",
    description: "Deluxe suite for your taste",
    uri: "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    type: "Fantasia",
    description: "Fantasia suite for your taste",
    uri: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    type: "Exotic",
    description: "Exquisiter suite for your taste",
    uri: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export { AllScreens, AuthScreens, hotelPlans };

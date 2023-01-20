import React from "react";
import Bookings from "./Bookings";
import HomeScreenNavigation from "./HomeScreenNavigation/HomeScreenNavigation";
import LoginScreen from "./Login";
import Settings from "./Settings";
import SignUpScreen from "./SignUp";

import { Ionicons } from "@expo/vector-icons";

const AllScreens = [
  {
    name: "ME-CORP",
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
    type: "Exquisite",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    description: "Exquisite suite for your taste",
    uri: "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600",
    rates: [
      { name: "Royal", price: 2500 },
      { name: "Executive", price: 2900 },
      { name: "Deluxe", price: 3500 },
    ],
  },
  {
    type: "Fantasia",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    description: "Fantasia suite for your taste",
    uri: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
    rates: [
      { name: "Scenic", price: 2500 },
      { name: "Ocean View", price: 2900 },
      { name: "Imperial", price: 3500 },
    ],
  },
  {
    type: "Exotic",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    description: "Exquisiter suite for your taste",
    uri: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600",
    rates: [
      { name: "Blossom", price: 2500 },
      { name: "Outdoor", price: 2900 },
      { name: "Jolly", price: 3500 },
    ],
  },
];

export { AllScreens, AuthScreens, hotelPlans };

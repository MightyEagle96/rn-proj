import Bookings from "./Bookings";
import HomeScreen from "./HomePage";
import LoginScreen from "./Login";
import SignUpScreen from "./SignUp";

const AllScreens = [
  { name: "Home", component: HomeScreen },
  { name: "Bookings", component: Bookings },
];

const AuthScreens = [
  { name: "Login", component: LoginScreen },
  { name: "Sign Up", component: SignUpScreen },
];
export { AllScreens, AuthScreens };

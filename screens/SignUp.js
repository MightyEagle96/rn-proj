import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { httpService } from "../services/httpService";
import { ErrorAlerts } from "../components/MyAlerts";
import { LoginContext } from "../contexts/LoginContext";
import {
  Button,
  Text,
  Snackbar,
  Dialog,
  DialogHeader,
  DialogActions,
  ActivityIndicator,
  TextInput,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function SignUpScreen({ navigation }) {
  const [securePassword, setSecurePassword] = useState(true);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [signUpData, setSignUpData] = useState({});

  const [showDialog, setShowDialog] = useState(false);

  const signUp = async () => {
    setLoading(true);
    const res = await httpService.post("mobile-signup", signUpData);
    if (res) {
      if (res.type) {
        console.log(res);
        setErrorMessage(res.message);
      }
      if (res.data) {
        console.log(res.data);
      }
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{}}>
          <View>
            <Text
              variant="h4"
              style={{
                color: "#2196f3",
                fontSize: 24,
                fontWeight: "600",
                marginBottom: 20,
              }}
            >
              Create a new account
            </Text>
          </View>
          <View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                label="First Name"
                variant="standard"
                leading={(props) => <Icon name="account" {...props} />}
                onChangeText={(e) =>
                  setSignUpData({ ...signUpData, firstName: e })
                }
                value={signUpData.firstName}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                label="Last Name"
                variant="standard"
                leading={(props) => <Icon name="account" {...props} />}
                onChangeText={(e) =>
                  setSignUpData({ ...signUpData, lastName: e })
                }
                value={signUpData.lastName}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                label="Email Address"
                variant="standard"
                leading={(props) => <Icon name="email" {...props} />}
                onChangeText={(e) =>
                  setSignUpData({ ...signUpData, emailAddress: e })
                }
                value={signUpData.emailAddress}
                keyboardType="email-address"
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                label="Password"
                variant="standard"
                trailing={(props) => (
                  <IconButton
                    onPress={() => setSecurePassword(!securePassword)}
                    icon={(props) => (
                      <Icon
                        name={securePassword ? "eye" : "eye-off"}
                        {...props}
                      />
                    )}
                  />
                )}
                onChangeText={(e) =>
                  setSignUpData({ ...signUpData, password: e })
                }
                value={signUpData.password}
                secureTextEntry={securePassword}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                label="Confirm Password"
                variant="standard"
                color={errorPassword ? "red" : "black"}
                helperText={errorPassword ? "Passwords don't match" : ""}
                trailing={(props) => (
                  <IconButton
                    onPress={() => setSecurePassword(!securePassword)}
                    icon={(props) => (
                      <Icon
                        name={securePassword ? "eye" : "eye-off"}
                        {...props}
                      />
                    )}
                  />
                )}
                onEndEditing={(e) => {
                  signUpData.password !== e.nativeEvent.text
                    ? setErrorPassword(true)
                    : setErrorPassword(false);
                }}
                onChangeText={(e) =>
                  setSignUpData({ ...signUpData, confirmPassword: e })
                }
                value={signUpData.confirmPassword}
                secureTextEntry={securePassword}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              <Button
                title="Create Account"
                variant="text"
                onPress={signUp}
                disabled={errorPassword}
              />
              <Button title="Cancel" variant="text" color="#f50057" />
            </View>
            {loading ? <ActivityIndicator /> : null}
            {errorMessage ? (
              <Snackbar
                message={errorMessage}
                style={{ position: "relative" }}
                action={
                  <Button
                    title="dismiss"
                    variant="text"
                    color="#f73378"
                    onPress={() => setErrorMessage("")}
                  />
                }
              />
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignUpScreen;
const styles = StyleSheet.create({
  loginView: { height: "100%", justifyContent: "center", marginBottom: 40 },
  loginBox: { paddingHorizontal: 20, justifyContent: "center" },

  buttonContainer: { alignItems: "center", marginBottom: 30 },
  buttonView: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderColor: "#bdbdbd",
    borderRadius: 5,
    marginBottom: 20,
  },
  container: { flex: 1 },

  inputLabel: { color: "#9e9e9e", fontWeight: "500", marginBottom: 4 },
});

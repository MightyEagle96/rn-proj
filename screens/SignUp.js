import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { httpService } from "../services/httpService";
import { ErrorAlerts } from "../components/MyAlerts";
import { LoginContext } from "../contexts/LoginContext";

function SignUpScreen({ navigation }) {
  const [securePassword, setSecurePassword] = useState(true);
  const [errorPassword, setErrorPassword] = useState(false);

  const [signUpData, setSignUpData] = useState({});

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              color: "#2196f3",
              fontSize: 24,
              fontWeight: "600",
              alignContent: "center",
            }}
          >
            Create a new account
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChangeText={(e) => setSignUpData({ ...signUpData, firstName: e })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            onChangeText={(e) => setSignUpData({ ...signUpData, lastName: e })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            keyboardType="email-address"
            onChangeText={(e) =>
              setSignUpData({ ...signUpData, emailAddress: e })
            }
          />
          <TextInput
            style={{
              ...styles.textInput,
              borderColor: errorPassword ? "#f50057" : "#bdbdbd",
            }}
            placeholder="Password"
            secureTextEntry={securePassword}
            onChangeText={(e) => setSignUpData({ ...signUpData, password: e })}
          />
          <TextInput
            style={{
              ...styles.textInput,
              borderColor: errorPassword ? "#f50057" : "#bdbdbd",
            }}
            placeholder="Confirm Password"
            secureTextEntry={securePassword}
            onEndEditing={(e) => {
              // console.log(e.nativeEvent.text);
              signUpData.password !== e.nativeEvent.text
                ? setErrorPassword(true)
                : setErrorPassword(false);
            }}
          />
          <View>
            <BouncyCheckbox
              iconStyle={{ borderColor: "red" }}
              onPress={() => {
                setSecurePassword(!securePassword);
              }}
              text="Show password"
            />
            {errorPassword ? (
              <Text style={{ marginTop: 10, color: "#f50057" }}>
                Passwords don't match
              </Text>
            ) : null}
          </View>
        </View>
      </View>
    </ScrollView>
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
});

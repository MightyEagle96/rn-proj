import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
//import SnackBar from "react-native-snackbar-component";
import { Snackbar } from "@react-native-material/core";
import { httpService } from "../services/httpService";
import { ErrorAlerts } from "../components/MyAlerts";

function LoginScreen() {
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const login = async () => {
    setLoading(true);
    const res = await httpService.post("login", loginData);
    if (res) {
      if (res.type === "error") {
        setMessage(res.message);

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
      console.log(res);
    }
    setLoading(false);
  };

  return (
    <View style={styles.loginView}>
      <View style={styles.loginBox}>
        <View>
          <Text>Login into your account</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          inputMode="email"
          onChangeText={(e) => setLoginData({ ...loginData, emailAddress: e })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          type="password"
          secureTextEntry={true}
          onChangeText={(e) => setLoginData({ ...loginData, password: e })}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <View style={{ marginRight: 10 }}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Button title="Login" onPress={login} />
              )}
            </View>
            <View>
              <Button title="Cancel" onPress={login} color="#f73378" />
            </View>
          </View>
        </View>
        {message ? <ErrorAlerts message={message} /> : null}
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginView: { flex: 1, justifyContent: "center" },
  loginBox: { paddingHorizontal: 20 },

  buttonContainer: { alignItems: "center" },
  buttonView: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderColor: "#2196f3",
    borderRadius: 5,
    marginBottom: 20,
  },
});

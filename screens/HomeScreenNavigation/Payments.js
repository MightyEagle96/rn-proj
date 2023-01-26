import React from "react";
import { View, Text } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";
import { stripeKey } from "../../services/payment";
function Payments() {
  return (
    <View>
      <StripeProvider
        publishableKey={stripeKey}
        // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        //merchantIdentifier="merchant.com." // required for Apple Pay
      >
        <Text>Hello</Text>
      </StripeProvider>
    </View>
  );
}

export default Payments;

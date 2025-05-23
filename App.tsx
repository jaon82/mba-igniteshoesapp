import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";

import { Routes } from "./src/routes";

import { Loading } from "./src/components/Loading";
import { THEME } from "./src/theme";

import { useEffect } from "react";
import { OneSignal } from "react-native-onesignal";
import { CartContextProvider } from "./src/contexts/CartContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // Initialize OneSignal in useEffect to ensure it runs only once
  useEffect(() => {
    // Initialize with your OneSignal App ID
    OneSignal.initialize("136846cb-2161-43eb-a09d-59805b61fd03");
    // Use this method to prompt for push notifications.
    // We recommend removing this method after testing and instead use In-App Messages to prompt for notification permission.
    //OneSignal.Notifications.requestPermission(false);
  }, []); // Ensure this only runs once on app mount

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}

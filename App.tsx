import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";

import Routes from "./src/routes";
import AppContainer from "./src/hooks";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <AppContainer>
      <StatusBar />
      <Routes />
    </AppContainer>
  );
}

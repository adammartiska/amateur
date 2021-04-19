import React from "react";
import ContestScreen from "./ContestScreen.js";
import Navigation from "./Navigation.js";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

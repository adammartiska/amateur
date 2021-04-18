import React from "react";
import ContestScreen from "./ContestScreen.js";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <ContestScreen />
    </PaperProvider>
  );
}

import React, { useState } from "react";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import AutoSuggest from "./Components/Autosuggest.js";
import { includes, filter } from "ramda";

const ContestScreen = (props) => {
  const [text, setText] = useState("");
  const data = [
    "0m4aka",
    "0m4asb",
    "0m4aa",
    "0s4sas",
    "0m4aaaa",
    "0m3sa",
    "0m2sas",
    "9320oms",
    "0ms3",
    "000m",
    "0mkol",
    "0mk3",
  ];

  const [filteredItems, setFilteredItems] = useState([]);

  const handleChangedText = (text) => {
    setText(text);
    const filteredItems = () => filter((word) => includes(text, word), data);
    setFilteredItems(filteredItems);
  };

  const handlePressedOption = (selectedItem) => {
    setText(selectedItem);
    setFilteredItems([]);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <AutoSuggest
        suggestions={filteredItems}
        onChangeText={handleChangedText}
        onSuggestionPress={handlePressedOption}
        value={text}
      />
      <View>
        <View style={{ position: "absolute", top: 50, left: 20 }}>
          <Text>ahoj co ty</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: "3%",
  },
});

export default ContestScreen;

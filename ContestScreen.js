import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Keyboard,
} from "react-native";
import Autocomplete from "react-native-autocomplete-input";
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
  const [hideResult, setHideResult] = useState(false);

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

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const FlatListSeparator = () => <View style={styles.flatlistSeparator} />;

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", marginTop: 20 }}>
        <View style={styles.autocompleteContainer}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <Autocomplete
              data={filteredItems}
              value={text}
              placeholder="Znacka"
              style={styles.autocompleteComponent}
              onChangeText={handleChangedText}
              inputContainerStyle={{ borderWidth: 0 }}
              listStyle={styles.listContainer}
              keyboardShouldPersistTaps="always"
              flatListProps={{
                keyboardShouldPersistTaps: "always",
                keyExtractor: (_, idx) => idx,
                ItemSeparatorComponent: FlatListSeparator,
                renderItem: ({ item }) => (
                  <TouchableOpacity
                    onPress={() => handlePressedOption(item)}
                    style={styles.listItem}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ),
              }}
            />
          </ScrollView>
        </View>
      </View>
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
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: 20,
    marginTop: 20,
  },
  autocompleteComponent: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "#000",
    height: 50,
  },
  // autocomplete: {
  //   borderColor: "black",
  //   borderWidth: 1,
  //   borderRadius: 3,
  //   backgroundColor: "green",
  // },
  listItem: {
    height: 40,
    paddingLeft: 5,
    justifyContent: "center",
  },
  listContainerStyle: {
    backgroundColor: "yellow",
    marginVertical: 20,
  },
  contentContainerStyle: {
    flex: 0,
  },
  flatlistSeparator: {
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
});

export default ContestScreen;

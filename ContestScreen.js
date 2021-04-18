import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import { includes, filter } from "ramda";

const ContestScreen = (props) => {
  const [text, setText] = useState("");
  const data = ["0m4aka", "0m4asb", "0m4aa", "0s4sas"];
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChangedText = (text) => {
    setText(text);
    const filteredItems = () => filter((word) => includes(text, word), data);
    setFilteredItems(filteredItems);
  };

  const handlePressedOption = (selectedItem) => {
    setText(selectedItem);
    setFilteredItems([]);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", marginTop: 20 }}>
        <View style={styles.autocompleteContainer}>
          <Autocomplete
            data={filteredItems}
            value={text}
            onChangeText={handleChangedText}
            flatListProps={{
              keyExtractor: (_, idx) => idx,
              renderItem: ({ item }) => (
                <TouchableOpacity onPress={() => handlePressedOption(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </View>
      </View>
      {/* <View style={{ width: "100%" }}>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
          }}
        >
          <TextInput onChangeText={(text) => setText(text)} value={text} />
        </View>
        {text.length > 0 && (
          <FlatList
            style={{ position: "absolute", zIndex: 1, elevation: 1, top: 30 }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            // extraData={selectedId}
          />
        )}
      </View> */}
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
  contentContainerStyle: {
    flex: 0,
  },
});

export default ContestScreen;

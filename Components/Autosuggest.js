import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Autocomplete from "react-native-autocomplete-input";

const FlatListSeparator = () => <View style={styles.flatlistSeparator} />;

const AutoSuggest = ({
  suggestions,
  onChangeText,
  onSuggestionPress,
  value,
}) => {
  return (
    <View style={{ width: "100%", marginTop: 20 }}>
      <View style={styles.autocompleteContainer}>
        <Autocomplete
          data={suggestions}
          value={value}
          placeholder="Znacka"
          style={styles.autocompleteComponent}
          onChangeText={onChangeText}
          inputContainerStyle={{ borderWidth: 0 }}
          listStyle={styles.listContainer}
          keyboardShouldPersistTaps="always"
          flatListProps={{
            keyboardShouldPersistTaps: "always",
            keyExtractor: (_, idx) => idx,
            ItemSeparatorComponent: FlatListSeparator,
            renderItem: ({ item }) => (
              <TouchableOpacity
                onPress={() => onSuggestionPress(item)}
                style={styles.listItem}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 18,
  },
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
export default AutoSuggest;

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import Colors from "../Constants/Colors";

const FlatListSeparator = () => <View style={styles.flatlistSeparator} />;

const AutoSuggest = ({
  suggestions,
  onChangeText,
  onSuggestionPress,
  value,
  zIndex,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.autocompleteContainer, { zIndex: zIndex }]}>
        <Autocomplete
          data={suggestions}
          value={value}
          hideResults={value.length === 0}
          placeholder="Znacka"
          style={styles.autocompleteComponent}
          onChangeText={onChangeText}
          containerStyle={{ elevation: 50 }}
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
  container: { width: "100%", marginTop: 20 },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  autocompleteComponent: {
    borderRadius: 3,
    borderWidth: 1.5,
    paddingHorizontal: 10,
    borderColor: Colors.onyxDarker,
    //  backgroundColor: Colors.lightGray,
    height: 40,
    fontSize: 18,
  },
  listItem: {
    height: 40,
    paddingLeft: 5,
    justifyContent: "center",
  },
  flatlistSeparator: {
    borderWidth: 0.5,
    borderColor: Colors.darkGray,
  },
});
export default AutoSuggest;

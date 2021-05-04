import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../Constants/Colors";

const FlatListSeparator = () => <View style={styles.flatlistSeparator} />;
const CustomSuggest = ({
  value,
  label,
  onChangeText,
  suggestions,
  onSuggestionPress,
  hideFlatList = true,
  zIndex,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        style={{ height: 40, marginVertical: 20 }}
      />
      {!hideFlatList && (
        <FlatList
          data={suggestions}
          style={[styles.list, { zIndex: zIndex }]}
          keyboardShouldPersistTaps="always"
          keyExtractor={(_, idx) => idx}
          ItemSeparatorComponent={FlatListSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onSuggestionPress(item)}
              style={styles.listItem}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    borderColor: "#b9b9b9",
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: "white",
    borderTopWidth: 0,
    left: 0,
    top: 70,
    position: "absolute",
    right: 0,
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
export default CustomSuggest;

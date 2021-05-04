import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const LocatorPicker = ({ selectedValue, onValueChange, options }) => {
  return (
    //TODO handle picker in iOS
    <View style={styles.container}>
      <Picker
        //mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 50, width: "20%" }}
        onValueChange={(itemValue) => onValueChange(itemValue)}
      >
        {options.map((option) => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 2,
  },
});
export default LocatorPicker;

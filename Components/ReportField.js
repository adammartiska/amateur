import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

const ReportField = ({ value, onChangeText, label }) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      style={{ height: 40, width: "40%", marginVertical: 20 }}
    />
  );
};

const styles = StyleSheet.create({});
export default ReportField;

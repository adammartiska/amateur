import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import AutoSuggest from "../Components/Autosuggest.js";
import ReportField from "../Components/ReportField";
import CustomSuggest from "../Components/CustomSuggest";
import { includes, filter } from "ramda";
import * as FileSystem from "expo-file-system";
import Colors from "../Constants/Colors";

const gifDir = FileSystem.cacheDirectory + "giphy/";
const gifFileUri = gifDir + `gif_1_200.gif`;
const ContestScreen = (props) => {
  const [text, setText] = useState("");
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());
  const [report, setReport] = useState(59);
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
  const date = new Date();

  const getCurrentTime = () => {
    let minutes = date.getMinutes();
    minutes = minutes > 9 ? minutes : "0" + minutes;
    let hours = date.getHours();
    hours = hours > 9 ? hours : "0" + hours;
    setMinutes(minutes);
    setHours(hours);
  };

  // useEffect(() => {
  //   setInterval(() => getCurrentTime(), 1000);
  //   console.log(minutes);
  //   console.log(hours);
  // }, []);

  setInterval(() => {
    getCurrentTime();
    // console.log(minutes);
    // console.log(hours);
  }, 1000);

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

  // useEffect(() => {
  //   RNFS.readDir(RNFS.DocumentDirectoryPath)
  //     .then((files) => {
  //       console.log(files);
  //     })
  //     .catch((err) => {
  //       console.log(err.message, err.code);
  //     });
  // });

  const readFile = async () => {
    const content = await FileSystem.readAsStringAsync(gifFileUri);
    console.log(content);
  };

  useEffect(() => {
    //FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
    //FileSystem.writeAsStringAsync(gifFileUri, "blablabla");
    console.log(FileSystem.documentDirectory);
    readFile();
  });
  const handleReport = (text) => setReport(text);

  return (
    <View style={styles.container}>
      {/* <AutoSuggest
        suggestions={filteredItems}
        onChangeText={handleChangedText}
        onSuggestionPress={handlePressedOption}
        value={text}
        zIndex={2}
      /> */}
      <View style={{ alignItems: "center" }}>
        <View style={styles.clockContainer}>
          <Text
            style={{ fontSize: 20, fontFamily: "monospace" }}
          >{`${hours}:${minutes}`}</Text>
        </View>
      </View>

      <CustomSuggest
        value={text}
        label="Znacka"
        onChangeText={handleChangedText}
        suggestions={filteredItems}
        onSuggestionPress={handlePressedOption}
        hideFlatList={text.length === 0 || filteredItems.length === 0}
        zIndex={2}
      />
      <CustomSuggest
        value={text}
        label="QTH"
        onChangeText={handleChangedText}
        suggestions={filteredItems}
        onSuggestionPress={handlePressedOption}
        hideFlatList={text.length === 0 || filteredItems.length === 0}
        zIndex={2}
      />
      <CustomSuggest
        value={text}
        label="Lokator"
        onChangeText={handleChangedText}
        suggestions={filteredItems}
        onSuggestionPress={handlePressedOption}
        hideFlatList={text.length === 0 || filteredItems.length === 0}
        zIndex={2}
      />
      <View style={styles.reportContainer}>
        <ReportField
          label="Prijaty report"
          value={report}
          onChangeText={handleReport}
        />
        <ReportField
          label="Odoslany report"
          value={report}
          onChangeText={handleReport}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: "3%",
  },
  cont: {
    marginBottom: 30,
  },
  reportContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  clockContainer: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "#3F4045",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    height: 40,
  },
});

export default ContestScreen;

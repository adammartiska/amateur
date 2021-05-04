import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  Button,
  TouchableOpacity,
} from "react-native";
import AutoSuggest from "../Components/Autosuggest.js";
import Picker from "../Components/LocatorPicker";
import ReportField from "../Components/ReportField";
import CustomSuggest from "../Components/CustomSuggest";
import { includes, filter } from "ramda";
import * as FileSystem from "expo-file-system";
import Colors from "../Constants/Colors";
import LocatorPicker from "../Components/LocatorPicker";
import iconv from "iconv-lite";
import { Buffer } from "buffer";

const gifDir = FileSystem.cacheDirectory + "giphy/";
const gifFileUri = gifDir + `gif_1_200.gif`;

// const largeData = "JN79TJ;Adam Jihlava (JIHLAVA - ČR);23.06.2020
// KN08PR;Aďo Košice (KOŠICE - SK);14.12.2017
// JN88WE;Aďo Šaľa (ŠAĽA - SK);18.04.2021
// JN69RJ;Agáta Plánice (KLATOVY - ČR);17.04.2021
// JN99DF;Alan Horná Maríková (POVAŽSKÁ BYSTRICA - SK);01.04.2021
// JO70MF;Alan Nymburk Bobnice Cl-85 (NYMBURK - ČR);21.7.2015
// JN88SI;Alan Trnava (TRNAVA - SK);03.04.2021";

// http://www.cbdx.cz/denikcl6/add/denikcl6.tom

const options = ["doma", "/p", "/s"];
const ContestScreen = (props) => {
  const [text, setText] = useState("");
  const [pickerValue, setPickerValue] = useState("doma");
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());
  const [report, setReport] = useState(59);
  const [downText, setDownText] = useState("");
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

  const downloadResumable = FileSystem.createDownloadResumable(
    "http://www.cbdx.cz/denikcl6/add/denikcl6.tom",
    FileSystem.documentDirectory + "dennik.txt",
    {}
  );

  const getCurrentTime = () => {
    let minutes = date.getMinutes();
    minutes = minutes > 9 ? minutes : "0" + minutes;
    let hours = date.getHours();
    hours = hours > 9 ? hours : "0" + hours;
    setMinutes(minutes);
    setHours(hours);
  };

  const downloadData = async () => {
    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log("Finished downloading to", uri);
    } catch (e) {
      console.error(e);
    }
  };

  setInterval(() => {
    getCurrentTime();
    // console.log(minutes);
    // console.log(hours);
  }, 1000);

  const url = "http://www.cbdx.cz/denikcl6/add/denikcl6.tom";
  const urlRobo =
    "https://skydivenotes.sk/adam?fbclid=IwAR0HL0IGpZivFCUVo5XUU4_wBGAmGgx44oHQsu11k8wfTu-5ENImq_3DDFk";
  const downloadText = async () => {
    // const response = await fetch(url);
    // console.log(JSON.stringify(response.text()));

    // fetch(url, initObject)
    //   .then((response) => {
    //     let fr = new FileReader();
    //     fr.readAsDataURL(response);
    //     //response.arrayBuffer()
    //   })
    //   .then((buffer) => {
    //     let decoder = new TextDecoder("iso-8859-1");
    //     let text = decoder.decode(buffer);
    //     console.log(text.substring(0, 60));
    //   })
    //   .catch(function (err) {
    //     console.log("Something went wrong!", err);
    //   });

    // var request = new XMLHttpRequest();
    // request.open("GET", url, true);
    // request.setRequestHeader(
    //   "Content-Type",
    //   "text/plain; charset=windows-1250"
    // );
    // request.send(null);
    // request.onreadystatechange = function () {
    //   if (request.readyState === 4 && request.status === 200) {
    //     var type = request.getResponseHeader("Content-Type");
    //     if (type.indexOf("text") !== 1) {
    //       setDownText(
    //         iconv
    //           .decode(Buffer.from(request.response), "windows-1251")
    //           .substring(0, 60)
    //       );
    //       //setDownText(request.responseText.substring(0, 60));
    //       console.log(downText);
    //     }
    //   }
    // };
    fetchniUTF();
    //readFile();
  };

  //   const fetchJSON = (url) => {
  //     return new Promise((resolve, reject) => {
  //         const request = new XMLHttpRequest();

  //         request.onload = () => {
  //             if (request.status === 200) {
  //                 resolve(JSON.parse(iconv.decode(Buffer.from(request.response), 'iso-8859-1')));
  //             } else {
  //                 reject(new Error(request.statusText));
  //             }
  //         };
  //         request.onerror = () => reject(new Error(request.statusText));
  //         request.responseType = 'arraybuffer';

  //         request.open('GET', url);
  //         request.setRequestHeader('Content-type', 'application/json; charset=iso-8859-1');
  //         request.send();
  //     });
  // }

  // export const setDocumentListDataAsync = (k, action, server) => {
  //     return () => {
  //         return fetchJSON(defineUrlForDocumentList(action, server))
  //             .catch(error => console.log(error));
  //     }
  // }

  // TOTO FUNGUJE ALE NEVIEM TAM DAT ENCODING INY AKO UTF-8
  const fetchniUTF = () => {
    // fetch(urlRobo)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.ok) {
    //       console.log(response.text());
    //     }
    //     throw new Error("Error message.");
    //   })
    //   .catch(function (err) {
    //     console.log(
    //       "failed to load ",
    //       "http://www.cbdx.cz/denikcl6/add/denikcl6.tom",
    //       err.message
    //     );
    //   });

    var request = new XMLHttpRequest();
    request.open("GET", urlRobo, true);
    // request.setRequestHeader(
    //   "Content-Type",
    //   "text/plain; charset=windows-1250"
    // );
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader("Content-Type");
        if (type.indexOf("text") !== 1) {
          // setDownText(
          //   request.response.substring(0, 60)
          // );
          const pole = request.responseText
            .substring(0, 120)
            .split(/[;\n]/)
            .filter((e, i) => {
              if (i === 0) {
                return e;
              } else {
                if (i % 3 === 0) {
                  return e;
                }
              }
            });

          setDownText(request.responseText.substring(0, 60));
          console.log(pole);
        }
      }
    };
  };

  // var doc = new XMLHttpRequest();
  // doc.onreadystatechange = function () {
  //   if (doc.readyState == XMLHttpRequest.DONE) {
  //     console.log(doc);
  //   }
  // };
  // doc.open("get", url);
  // doc.setRequestHeader("Content-Encoding", "UTF-8");
  // doc.send();
  function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          alert(allText);
        }
      }
    };
    rawFile.send(null);
  }

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

  const handlePickerValue = (selectedValue) => setPickerValue(selectedValue);

  const readFile = async () => {
    const content = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + "dennik.txt",
      { encoding: FileSystem.EncodingType.Base64 }
    );
    const short = content.substring(0, 60);
    const decoded = new Buffer(content, "base64").toString("ascii");
    console.log(decoded);
  };

  // setInterval(() => {
  //   //FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
  //   //FileSystem.writeAsStringAsync(gifFileUri, "blablabla");
  //   readFile();
  // }, 10000);
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
        label="Volacka"
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
      <Button title="buzna" onPress={downloadText} />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <CustomSuggest
          value={text}
          label="Lokator"
          onChangeText={handleChangedText}
          suggestions={filteredItems}
          onSuggestionPress={handlePressedOption}
          hideFlatList={text.length === 0 || filteredItems.length === 0}
          zIndex={2}
        />
        <LocatorPicker
          selectedValue={pickerValue}
          options={options}
          onValueChange={handlePickerValue}
        />
      </View>
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

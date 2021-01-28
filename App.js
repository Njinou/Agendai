import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  Image,
  ImagePropTypes
} from "react-native";

import ModalComposantScreen from './src/views/screens/ModalComposantScreen';
import MonthScreen from './src/views/screens/MonthScreen';
import DateTemps from './src/views/screens/DateTemps';
/*

 <MonthScreen/>
    <View style={{zIndex:1}}>
    <ModalComposantScreen/>
    </View>
*/
const App: () => React$Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex:1}}>
      <ModalComposantScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  BottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
// <Image source={require('./src/image/plus/plusplusbleu.png')} style={{position: "absolute", bottom: 0, right: 0,width:150,height:150}}/>
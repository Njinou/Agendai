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
  return (
    <SafeAreaView style={{flex:1}}>
      <ModalComposantScreen/>
    </SafeAreaView>
  );
};

export default App;
// <Image source={require('./src/image/plus/plusplusbleu.png')} style={{position: "absolute", bottom: 0, right: 0,width:150,height:150}}/>
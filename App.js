import React, { useState } from "react";
import {
  SafeAreaView,
} from "react-native";

import ModalComposantScreen from './src/views/screens/ModalComposantScreen';
import MonthScreen from './src/views/screens/MonthScreen';
import DateTemps from './src/views/screens/DateTemps';
import AgTextInput from './src/views/components/AgTextInput';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ModalComposantScreen/>
    </SafeAreaView>
  );
};

export default App;
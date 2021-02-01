  
import React, { useState } from "react";
import {
  SafeAreaView,
} from "react-native";

import ModalComposantScreen from './src/views/screens/ModalComposantScreen';
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
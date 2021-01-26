/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View, Button, Platform,StatusBar,SafeAreaView,Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import time from './src/text/time';
import SemaineScreen  from './src/views/screens/SemaineScreen';
import JourScreen from './src/views/screens/JourScreen';
import Band from './src/views/components/Band';
const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
const Semaine = () =>{
    return   jours.map ( (val,key)=> <Band key={val} text={val} color="blue"/>);
}

//
//<JourScreen data={time.military}/>
const Schedule = () =>{
  return jours.map ( (val,key)=>  {
    return (
      <Band key={key}>
           <JourScreen data={time.military}/>
      </Band>);
 });
}
 





const App: () => React$Node = () => {

  return (
    <SafeAreaView style={{flex:1,flexDirection:'column',alignItems:'stretch'}}>
       <View style={{flex:2,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Semaine/>
      </View>
      <View style={{flex:24,flexDirection:'row'}}>
      <Schedule />
      </View>
    
          
    </SafeAreaView>
  );
};


export default App;

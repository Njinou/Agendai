/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView,View} from 'react-native';
import time from '../../text/time';
import JourScreen from './JourScreen';
import Band from '../components/Band';
import DraggableJourneeScreen from './DraggableJourneeScreen';

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
           <DraggableJourneeScreen data={time.military}/>
      </Band>);
 });
}
 
const MonthScreen: () => React$Node = () => {

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


export default MonthScreen;

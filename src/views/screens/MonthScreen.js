/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView,View} from 'react-native';
import constants from '../../text/constants';
import JourScreen from './JourScreen';
import Band from '../components/Band';
import DraggableJourneeScreen from './DraggableJourneeScreen';

const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
const Semaine = () =>{
    return   jours.map ( (val,key)=> <Band key={val} text={val} color="blue"/>);
}

const Schedule = () =>{
  return jours.map ( (val,key)=>  {
    return (
      <Band key={key}>
           <DraggableJourneeScreen data={constants.time.military}/>
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

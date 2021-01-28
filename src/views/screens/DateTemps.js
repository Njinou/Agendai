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

import Band from '../components/Band';
const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const Semaine = () =>{
    return   jours.map ( (val,key)=> <Band key={val} text={val} color="blue"/>);
}

//
//<JourScreen data={time.military}/>
const Schedule = () =>{
  return jours.map ( (val,key)=> <Band key={key} color="white"/>);
}
 



const DateTemps: () => React$Node = () => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('datetime');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={{width:225}}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'datetime'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};


export default DateTemps;

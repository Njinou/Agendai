/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useEffect,useState}from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView
} from 'react-native';


import Band from '../components/Band';
const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
const JourDeLaSemaine = () =>{
    return   jours.map ( (val,key)=> <Band key={val} text={val} color="blue"/>);
}

//
//<JourScreen data={time.military}/>
const Schedule = () =>{
  return jours.map ( (val,key)=> <Band key={key} color="white"/>);
}

const SemaineScreen: () => React$Node = () => {
  const [tempsdelaJournee,setTempsJournee] = useState(null);
  //setInterval(function(){ alert("Hello"); }, 3000);
  useEffect(() =>{
    setTempsJournee(new Date().getMinutes());
  }, [])

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

  <Text style={{textAlign:'center'}}>{new Date().getHours()}  + {tempsdelaJournee} </Text>
      <View style={{flex:2,flexDirection:'row'}}>
          <JourDeLaSemaine/>
      </View>
      <View style={{flex:24,flexDirection:'row',}}>
        <Schedule/>
      </View>
    </ SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default SemaineScreen;

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
  ImagePropTypes,
  TextInput,
  Switch
} from "react-native";
import  DateTemps from './DateTemps';

//
const ModalComposantScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <SafeAreaView style={modalVisible?styles.centeredView : styles.BottomView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
       { props.composant? props.composant:<View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New Event</Text>
            <View style={{padding:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'bold'}}> Time & Date : </Text>
              <DateTemps/>
            </View>

            <View style={{padding:10,flexDirection:'row'}}>
              <Text style={{fontWeight:'bold',alignSelf:'center'}}> Title : </Text>
              <TextInput placeholder="Title" style={{margin:10,marginLeft:'auto'}}/>
            </View>

            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',}}>
                 {isEnabled? 'Repeat' : 'Does Not Repeat'} :
              </Text>

              <View style={styles.switch}>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
              <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
          </View>
        </View>}
      </Modal>

      { !modalVisible?<TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
       <Image source={require('../../image/plus/plusplusbleu.png')} style={{position: "absolute", bottom: 0, right: 0,width:50,height:50}}/>
      </TouchableHighlight>:null}
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
    marginTop: 22,
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
    textAlign: "center",
    fontSize:22,
    fontWeight:'bold'
  },
  switch: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  }
});

export default ModalComposantScreen;
// <Image source={require('./src/image/plus/plusplusbleu.png')} style={{position: "absolute", bottom: 0, right: 0,width:150,height:150}}/>
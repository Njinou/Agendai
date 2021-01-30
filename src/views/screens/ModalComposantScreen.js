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
  Switch,
  Button

} from "react-native";
import  DateTemps from './DateTemps';
import {Picker} from '@react-native-picker/picker';
import AgTextInput from '../components/AgTextInput';
//

const ChildComp = (props) => (
  <Button title ="Button" onPress={()=>props.logThis('test strinxaszxXZXxxxzxzxg')}>Click Here</Button>
)

const ModalComposantScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [repeat, setRepeat] = useState('');
  const [category,setCategory] = useState('Meeting');
  const [startDateTime,setStartDateTime] = useState("2011-04-13T08:22:41.081Z");
  const [endDateTime,setEndDateTime] = useState('');
  const [uploadPic,setUploadPic] = useState(false);
  const [priority,setPriority] = useState('low');
  
  //date
   settingEndDate = (date) => setEndDateTime(date);
   settingStartDate = (date) => setStartDateTime(date);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchUploadPic = () => setUploadPic(!uploadPic);
  //begin and end .....
  //var someDate = new Date();
//var numberOfDaysToAdd = 6;
//someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <SafeAreaView style={modalVisible?styles.centeredView : styles.BottomView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        style={{backgroundColor:'tranparent'}}
      >
       {props.composant? props.composant:<View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New Event</Text>
            <View style={{padding:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'bold'}}>  Time & Date : </Text>
              <DateTemps  func={this.settingStartDate} />
            </View>
            {isEnabled?<View style={{padding:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'bold'}}> Ending On : </Text>
              <View>
              <DateTemps func={this.settingEndDate}/>
              </View>
              
            </View>:null}


            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',}}>
                 {isEnabled? 'Repeat' : 'Does Not Repeat'} :
              </Text>

              <View style={styles.switch}>
                {!isEnabled?<Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />:null}
              </View>
                  
            

              {isEnabled?<View style={{marginLeft:'auto'}}>
                <Picker
                  selectedValue={repeat}
                  style={styles.onePicker} itemStyle={styles.onePickerItem}
                  onValueChange={(itemValue, itemIndex) =>
                    setRepeat(itemValue)
                  }
                > 
                  <Picker.Item label="Daily" value="daily" />
                  <Picker.Item label="Weekly" value="weekly" />
                  <Picker.Item label="Monthly" value="monthly" />
                  <Picker.Item label="Yearly" value="yearly" />


                  <Picker.Item label= "Twice in a Week" value= "Twice in a Week" />
                  <Picker.Item label= "Every Other Week" value= "Every Other Week" />
                  <Picker.Item label="Twice in a Month" value="Twice in a Month" />
                  <Picker.Item label="Every Other Month" value="Every Other Month" />
                </Picker>
              </View>:null}
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10,}}>
              <Text style={{fontWeight:'bold',flexWrap:'wrap',flex:1}}>
                 Title :
              </Text>

              <View style={styles.switch}>
                <AgTextInput style={{fontSize:22}} placeholder="Enter Title" multiline={true}/>
              </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10,}}>
              <Text style={{fontWeight:'bold'}}>
                 Description :
              </Text>

              <View style={styles.switch}>
              <AgTextInput placeholder="Enter the Description of the event" numberOfLines={5} multiline={true}/>
              </View>
            </View>
          
            <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
              <Text style={{fontWeight:'bold',flex:1}}>
                 Category :
              </Text>


              <View style={{marginLeft:'auto'}}>
                <Picker
                  selectedValue={category}
                  style={styles.onePicker} itemStyle={styles.onePickerItem}
                  onValueChange={(itemValue, itemIndex) =>
                    setCategory(itemValue)
                  }
                > 
                   <Picker.Item label="Sport" value="sport" />
                  <Picker.Item label="BirthDay" value="birthday" />
                  <Picker.Item label="Anniversary" value="anniversary" />
                  <Picker.Item label="work" value="work" />


                  <Picker.Item label="Family" value="family" />
                  <Picker.Item label="Friends" value="Friends" />
                  <Picker.Item label="Date" value="date" />
                  <Picker.Item label="party" value="party" />
                  <Picker.Item label="Event" value="event" />
                </Picker>
              </View>
            </View>
            
            

            <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
              <Text style={{fontWeight:'bold',flex:1}}>
                 Priority :
              </Text>


              <View style={{marginLeft:'auto'}}>
              <Picker
                  selectedValue={priority}
                  style={styles.onePicker} itemStyle={styles.onePickerItem}
                  onValueChange={(itemValue, itemIndex) =>
                    setPriority(itemValue)
                  }
                > 
                  <Picker.Item label="Low" value="low" />
                  <Picker.Item label="Medium" value="Medium" />
                  <Picker.Item label="High" value="high" />
              </Picker>
              </View>
            </View>


            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10,}}>
              <Text style={{fontWeight:'bold',flexWrap:'wrap',flex:1}}>
                 Guests :
              </Text>

              <View style={styles.switch}>
              <AgTextInput placeholder="Selectionnez les invites.."  style={{fontSize:22}} multiline={true}/>
              </View>
            </View>


            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10,}}>
              <Text style={{fontWeight:'bold',flexWrap:'wrap',flex:1}}>
                 Upload Pictures... :
              </Text> 

              <View style={styles.switch}>
                {uploadPic? <AgTextInput placeholder="Upload pictures will be replace with imagepicker"  style={{fontSize:22}} multiline={true}/>:<Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchUploadPic}
                  value={isEnabled}
                /> }
              </View>
            </View>


            <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  //Function to create the event and save it in firebase...
                }}
              >
              <Text style={styles.textStyle}> Create Event </Text>
              </TouchableHighlight>
          </View>
        </View>}
      </Modal>

      { !modalVisible?<TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
          console.log("Je ne suis plus la....");
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
  },
  description: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },

  pickerItem: {
    color: 'red'
  },
  onePicker: {
    width: 200,
    height: 44,
    backgroundColor: 'white',// '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  onePickerItem: {
    height: 44,
    color: "#2196F3"
  },

});

export default ModalComposantScreen;
// <Image source={require('./src/image/plus/plusplusbleu.png')} style={{position: "absolute", bottom: 0, right: 0,width:150,height:150}}/>
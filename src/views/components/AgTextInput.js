
import React from "react";
import { Keyboard, TextInput, StyleSheet } from "react-native";

const AgTextInput = (props) => {
  const [value, setValue] = React.useState('');

  const _keyboardDidShow = () => {
    alert("Keyboard Shown");
  };
  const logging = (val) => setValue(val);

  const _keyboardDidHide = () => {
    alert("Keyboard Hidden");
  };

  return <TextInput 
            onChangeText={props.func? props.func:logging} 
            style={props.style? props.style: null} 
            placeholder={props.placeholder? props.placeholder : 'Enter Value...'} 
            onSubmitEditing={Keyboard.dismiss} 
            numberOfLines={props.numberOfLines? props.numberOfLines : 4}
            value={props.value?props.value: value}
        />;
}

const s = StyleSheet.create({
   input:{
    margin:60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: "#fff"
   }
})


export default AgTextInput;
import React from 'react';
import { View } from 'react-native';

function SplitPane(props) {
  return (
    <View >
      <View  style={{backgroundColor:'black'}}>
        {props.left}
      </View>
      <View style={{backgroundColor:'red'}} >
        {props.right}
      </View>
    </View>
  );
}

const Contacts = () =>{
    return <Text> Contacts</Text>
}

const Chat = () =>{
    return <Text> Chat</Text>
}
function Test() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
export default SplitPane

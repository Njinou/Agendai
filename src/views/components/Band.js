import React from 'react';
import { View,Text } from 'react-native';

 const Band = (props) => {  
  return (  
        <View style={{ flex:1,borderColor:'#c3c3c3',borderRightWidth:1,borderTopWidth:1,borderLeftWidth:1,borderBottomWidth:1,backgroundColor:props.color,alignSelf: 'stretch' }}>
            <Text style={{textAlign:'center',color:'white',}}>{props.text}</Text>
           {props.children? <View style={{flex:1,alignSelf: 'stretch'}}>
                {props.children}
            </View> : null}
        </View>
    ); 
}
export default Band;
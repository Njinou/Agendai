import React from 'react';
import { View,Text,SafeAreaView,ScrollView } from 'react-native';
import TextView from '../components/TextView';

 const ScrollScreen = (props) => {  
    return (  
        <ScrollView >
            {props.data.map( (val,key) =>  < TextView key={key} text={val} color={props.color}/>)}
        </ScrollView>
    ); 
}
export default ScrollScreen;
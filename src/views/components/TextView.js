import React from 'react';
import { View,Text } from 'react-native';

 const TextView = (props) => {  
    return (  
        < Text 
            style={{
                flex: 1,
                backgroundColor:props.color?props.color:'rebeccapurple',
                alignSelf:'stretch',
                margin:'4%',
                padding:'10%',
                borderRadius:5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,  
                elevation: 5,
                textAlign:'center',
                fontWeight:'bold'
            }} 
        > 
            {props.text}
        </Text>
    ); 
}
export default TextView;
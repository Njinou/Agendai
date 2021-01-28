import React from 'react';
import { SafeAreaView,View } from 'react-native';
import Band from '../components/Band';
import ScrollScreen from './ScrollScreen';

 const JourScreen = (props) => {  
    return (  
        <View style={{flexDirection:'column',flex:1}}>
            <Band>
                 <ScrollScreen  data={props.data} />
            </Band>
     </View>
    ); 
}
export default JourScreen;
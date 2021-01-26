import React from 'react';
import { ScrollView } from 'react-native';
import TextView from '../components/TextView';

 const ViewDataScreen = (props) => {  
    return (  
        <ScrollView>
            {props.data.map( (val,key) =>  < TextView key={key} text={val}/>)}
        </ScrollView>
    ); 
}
export default ViewDataScreen;
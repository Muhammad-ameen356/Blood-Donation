import React from 'react';
import { View, Text,} from 'react-native';

function DonorRegister() {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight:'bold', backgroundColor:'orange'}}>
                A+
            </Text>
            <Text style={{fontSize:25, fontWeight:'bold',backgroundColor:'orange', marginTop:10,}}>
                B+
            </Text>
            <Text style={{fontSize:25, fontWeight:'bold',backgroundColor:'orange', marginTop:10,}}>
                O+
            </Text>
            <Text style={{fontSize:25, fontWeight:'bold',backgroundColor:'orange', marginTop:10,}}>
                A-
            </Text>
            <Text style={{fontSize:25, fontWeight:'bold',backgroundColor:'orange', marginTop:10,}}>
                B-
            </Text>
            <Text style={{fontSize:25, fontWeight:'bold',backgroundColor:'orange', marginTop:10,}}>
                O-
            </Text>
            
            
        </View>
    )
    
}

export default DonorRegister;
import * as React from 'react';
import {Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Donateblood from "../screens/Donateblood";
import Requestblood from "../screens/Requestblood";
import DonorRegister from "../screens/DonorRegister";
// import { color } from 'react-native-reanimated';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

// ==============SPLASH SCREEN==============

function splashScreen({navigation}){
  setTimeout(() => {
   navigation.replace('Home');
  }, 3500);
  return(
    <View style={styles.container}>
      <ImageBackground style={{resizeMode: "cover",height:'100%', width:'100%'}} source={require('../images/bc.jpg')}>

      <View style={styles.view1}>
        <Image 
        style={styles.Image}
        source={require('../images/doctor.png')}/>
      </View>
      <View style={styles.view2}>
        <Text style={styles.Text1}>
          GIVE THE GIFT OF LIFE
        </Text>
        <Text style={styles.Text2}>
        DONATE BLOOD
        </Text>
      </View>
      </ImageBackground>

    </View>
  )
}
// =========================




function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={{alignItems: 'center', justifyContent: 'center' }}>
          <Stack.Screen options={{headerShown:false,}} name="splashScreen" component={splashScreen} />

         <Stack.Screen
            options={{
              // headerShown:false,
              title: 'S A V E   L I F E',
              headerStyle: {
                backgroundColor: 'white',
                height:60,
              },
              headerTintColor: 'red',
              headerTitleStyle: {
                fontSize:30,
                fontWeight: 'bold',
                fontFamily:'Acme-Regular',
                flex:1,
                textAlign:'center',
              },
              
            }} name="Home" component={Home} />

         <Stack.Screen 
            options={{
              // headerShown:false,
              title: 'Login Or register',
              headerStyle: {
                backgroundColor: 'red',
                height:60,
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontSize:20,
                textTransform:"uppercase"
              },
            }} name="Donateblood" component={Donateblood} />

         <Stack.Screen 
            options={{
              title: 'Find Donor',
              headerStyle: {
                backgroundColor: 'red',
                height:60,
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontSize:20,
                textTransform:"uppercase"
              },
            }} name="Requestblood" component={Requestblood} />
          <Stack.Screen 
          options={{
            title: 'donors',
            headerStyle: {
              backgroundColor: 'red',
              height:60,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize:20,
              textTransform:"uppercase"
            },
          }}
          name='DonorRegister' component={DonorRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  Image:{
    top:70,
    width:300,
    height:300,
  },
  Text1:{
    fontSize:30,
    color:'#FFEE6F',
    fontWeight:'700',
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 6,
    
  },
  Text2:{
    color:"white",
    fontSize:40,
    fontWeight:'700',
    textShadowColor: 'rgba(255, 243, 0, 0.95)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 8,
  },
  view1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  view2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }

})
  
export default AppNavigation;
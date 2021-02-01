import React from 'react';
import { View, Text, Button, Image, StyleSheet} from 'react-native';



function Home(props) {
  return (
    <View style={styles.container}>
      {/* white background */}
      <View style={styles.main1}>
         <Image
           style={{ width: 100, height: 130, }}
           source={require('../images/nullxnull.png')}/>
          <Text style={styles.main1Text} onPress={()=>props.navigation.navigate("Donateblood")}>DONATE BLOOD</Text>
          <Text style={styles.main1Text2} onPress={()=>props.navigation.navigate("Donateblood")}>Tap here For Registration</Text>

          {/* <Button style={{fontWeight:'bold', fontSize:40, height:40,}} onPress={()=>props.navigation.navigate("Camera"), facebook_login} title="Login with facebook"/> */}
      </View>
      {/* ======>>>>>>>> */}


      {/* Red background */}
      <View style={styles.main2}>
         <Image
           style={{ width: 100, height: 130, }}
           source={require('../images/text2.png')}/>
          <Text style={styles.main2Text} onPress={()=>props.navigation.navigate("Requestblood")}>REQUEST BLOOD</Text>
          <Text style={styles.main2Text2} onPress={()=>props.navigation.navigate("Requestblood")}>Tap here For Blood Request</Text>

          {/* <Button style={{fontWeight:'bold', fontSize:40, height:40,}} onPress={()=>props.navigation.navigate("Camera"), facebook_login} title="Login with facebook"/> */}
      </View>
      {/* <=============> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
  },
  main1:{
    backgroundColor:'#FAFAFA',
    flex:1,
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
  },
  main1Text:{
    fontSize:33,
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 6,
    fontFamily:'Acme-Regular',

  },
  main1Text2:{
    fontSize:17,

  },

  // for request blood ---------------------
  main2:{
    backgroundColor:'#FF0000',
    flex:1,
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
  },
  main2Text:{
    fontSize:33,
    fontWeight:'bold',
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 6,
    color:'white'
  },
  main2Text2:{
    fontSize:17,
    color:'white',
  },
})

export default Home;
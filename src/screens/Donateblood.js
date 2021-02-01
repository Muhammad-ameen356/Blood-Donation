import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import auth from '@react-native-firebase/auth';



// <========Facebook LOGIN==========>

const facebook_login = async () => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential)
  .then((user)=>{
    this.props.navigation.navigate('Home');
    console.log("data=>>",user)

  })
  .catch((err)=>{
    console.log(err)
  })
 
}
 

// <=============>


function Requestblood() {
  return (
    <View style={{ flex: 1,}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image 
        style={{width:350,height:150,}}
        source={require('../images/savelife.png')}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.button} onPress={facebook_login}>
        <Text style={styles.buttonText}>Continue With Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText}>Continue With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText}>Continue With Phone</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#00269D",
    width:300,
    height:43,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomEndRadius:10,
    borderTopLeftRadius:10,
  },
  button1:{
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#FF553A",
    width:300,
    height:43,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomEndRadius:10,
    borderTopLeftRadius:10,
    marginTop:10,
    
  },
  button2:{
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#0F9D58",
    width:300,
    height:43,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomEndRadius:10,
    borderTopLeftRadius:10,
    marginTop:10,
  },
  buttonText:{
    fontSize:17,
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'white',
  }
})

export default Requestblood;
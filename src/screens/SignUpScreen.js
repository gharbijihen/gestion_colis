import { Image, View, SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, } from 'react-native'
import React, { useEffect, useState } from 'react';
import Background from '../components/Background';
import Button from '../components/Button';
import { auth } from "../Services/Auth/Firebase";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { app, db, getFirestore, collection, addDoc } from '../Services/Auth/Firebase'
export default function SignUpScreen({ navigation }) {

  const [username, setUsername] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [usernumber, setUserNumber] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async () => {
    try {
      console.log('Registering user...');
      if ((password !== confirmPassword))
        alert("Passwords don't match.")

      if (userEmail !== "" && password !== "")
          createUserWithEmailAndPassword(auth, userEmail, password).then(() =>
            navigation.navigate("Seetings")
          ).catch((err) => Alert.alert("login error", err))

      console.log("userEmail", userEmail)
      console.log("password", password)
      console.log("name", username)

      const userRef = firestore().collection('users').doc();
      await userRef.set({
        userEmail,
        username,
        usernumber,

      });
      console.log('User registered successfully!');
    } catch (error) {
      console.error(error);
    }
  };










  {/*const handleSignup = () => {
    if ((password !== confirmPassword))
      alert("Passwords don't match.")

    if (userEmail !== "" && password !== "")
      createUserWithEmailAndPassword(auth, userEmail, password).then(() =>
        navigation.navigate("Profile")
      ).catch((err) => Alert.alert("login error", err))
    console.log("userEmail", userEmail)
    console.log("password", password)
    console.log("name", username)
  }*/}




  return (
    <Background>
      <View
        style={{
          backgroundColor: '#fff',
          width: '85%',
          height: 650,
          margin: 25, borderRadius: 50,
          top: 90,

        }} >
        <View
          style={{ width: 150, height: 150, top: -60, borderRadius: 40, justifyContent: 'center', alignSelf: 'center', backgroundColor: "#fff" }}
        >
          <Icon name="user-o" size={80} color="#060606" style={{ marginLeft: 35, marginVertical: 30 }} />
        </View>


        <SafeAreaView style={[styles.view, { marginVertical: 20, top: 10 }]}>
          <TextInput style={styles.inputtxt}
            placeholder="First Name"
            onChangeText={txt => setUsername(txt)}
            value={username} />
            <TextInput style={styles.inputtxt}
            placeholder="Last Name"
            onChangeText={txt => setUsername(txt)}
            value={username} />
          <TextInput placeholder="Your email adress"
            onChangeText={txt => setUserEmail(txt)}
            value={userEmail}
            keyboardType="email-address"
            style={styles.inputtxt}

          />
          {/*<PhoneInput
            placeholder="Enter phone number"
            value={usernumber}
      onChangeText={txt => setUserNumber(txt)} />*/}
          <TextInput placeholder="Contact Number" keyboardType="numeric" style={styles.inputtxt}
            onChangeText={txt => setUserNumber(txt)}
            value={usernumber} />
          <TextInput placeholder="Password" style={styles.inputtxt}
            labelValue={password}
            secureTextEntry={true}
            value={password}
            onChangeText={txt => setPassword(txt)} />
          <TextInput placeholder="Confirm Password" style={styles.inputtxt}
            labelValue={confirmPassword}
            secureTextEntry={true}
            onChangeText={txt => setConfirmPassword(txt)} />
        </SafeAreaView>
        <SafeAreaView style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          top:30
        }}>

          <Button
            bgcolor="#81C6ED" textColor='#ffff' btnLabel={"CREAT YOUR ACCOUNT"}
            press={registerUser} width={240}/>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign IN')}>
              <Text style={{ color: '#81C6ED', fontWeight: 'bold', fontSize: 16 }}>
                Login</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </Background>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",


  },
  inputtxt: {
    elevation: 9,
    borderColor: '#8C8C8C',
    paddingHorizontal: 25, width: '80%',
    backgroundColor: '#ffff',
    marginVertical: 10,
    borderRadius: 10,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    borderWidth: 1,
    paddingLeft: 30,
  },
},
);

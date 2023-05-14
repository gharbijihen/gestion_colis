import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, } from 'react-native'
import React, { useEffect, useState } from 'react';
import Background from '../components/Background';
import Button from '../components/Button';

import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from '../helpers/Api';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
export default function SignUpScreen({ navigation }) {


  const [lastname, setUserlastname] = useState("")
  const [firstname, setUserfirstname] = useState("")
  const [email, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setUserNumber] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");

  // const registerUser = async () => {
  //   try {
  //     console.log('Registering user...');
  //     if ((password !== confirmPassword))
  //       alert("Passwords don't match.")

  //     if (userEmail !== "" && password !== "")
  //       createUserWithEmailAndPassword(auth, userEmail, password).then(() =>
  //         navigation.navigate("Seetings")
  //       ).catch((err) => Alert.alert("login error", err))

  //     console.log("userEmail", userEmail)
  //     console.log("password", password)
  //     console.log("name", username)

  //     const userRef = firestore().collection('users').doc();
  //     await userRef.set({
  //       userEmail,
  //       username,
  //       usernumber,

  //     });
  //     console.log('User registered successfully!');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // callApi = () => {
  //   axios.get('https://reqres.in/api/users?page=2')
  //   .then(function (response) {
  //   // handle success
  //   console.log("reponse=>",response)
  //   alert (JSON.stringify (response))

  //   })
  //   .catch(function (error) {
  //   // handle error
  //   alert ((error))
  //   })
  //   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      password: password
    };
    const headers = {
      'Accept': 'application/json',
    }
    try {
      const response = await axios.post(`${API_URL}/users/register`, data, { headers: headers })
      navigation.navigate('Sign IN')
    } catch (error) {
      console.log('error', error.message);
    };
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

        <ScrollView style={{ top: -70, left: 30, backgroundColor: 'transparent' }}>
          <TextInput style={styles.inputtxt}
            placeholder="First Name"
            onChangeText={txt => setUserfirstname(txt)}
            value={firstname} />
          <TextInput style={styles.inputtxt}
            placeholder="Last Name"
            onChangeText={txt => setUserlastname(txt)}
            value={lastname} />
          <TextInput placeholder="Your email adress"
            onChangeText={txt => setUserEmail(txt)}
            value={email}
            keyboardType="email-address"
            style={styles.inputtxt}

          />
          <TextInput placeholder="Contact Number" keyboardType="numeric" style={styles.inputtxt}
            onChangeText={txt => setUserNumber(txt)}
            value={phone} />
          <TextInput placeholder="Password" style={styles.inputtxt}
            labelValue={password}
            secureTextEntry={true}
            value={password}
            onChangeText={txt => setPassword(txt)} />
          <TextInput placeholder="Confirm Password" style={styles.inputtxt}
            labelValue={confirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={txt => setConfirmPassword(txt)} />


          <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            right: 30,
            top: -5
          }}>

            <Button
              bgcolor="#81C6ED" textColor='#ffff' btnLabel={"CREAT YOUR ACCOUNT"} press={handleSubmit}
              width={240} />

            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Already have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Sign IN")}>
                <Text style={{ color: '#81C6ED', fontWeight: 'bold', fontSize: 16 }}>
                  Login</Text>
              </TouchableOpacity>

            </View>
          </SafeAreaView>
        </ScrollView>

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

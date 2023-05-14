import React, { useState } from 'react'
import Button from '../components/Button';
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Background from '../components/Background'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { auth } from "../Services/Auth/Firebase";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { login } from '../features/auth/authSlice';
import axios from 'axios';
import { API_URL } from '../helpers/Api';
export default function SignINScreen({ navigation }) {

  const [passwordVisible, setPasswordVisible] = useState(true);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [brcolor, setbrcolor] = useState("#c1c1c1")

  // const handleSignin = () => {
  //   if (email === "") {
  //     setbrcolor("#FF1111")
  //   } else {
  //     setbrcolor("#C1C1C1")
  //   }
  //   if (email !== "" && password !== "") {

  //     signInWithEmailAndPassword(auth, email, password).then(() =>

  //     navigation.navigate("Tab")
  //   ).catch((err) => Alert.alert("wrong email/password plais try egain"))
  //   console.log("email", email)
  //   console.log("password", password)
  // }
  // }
  async function _storeUser(id) {
    console.log(id)
    try {
      await AsyncStorage.setItem('userId', id + "")
    } catch (e) {
      // Error saving data
    }
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password
    };
    const headers = {
      'Accept': 'application/json',
    }
    try {
      const response = await axios.post(`${API_URL}/users/login`, data, { headers: headers })
      console.log(response.data)
      if (response.data.message === "login avec success") {
        _storeUser(response.data.user.UUid)
        navigation.navigate('Tab')
      } else {
        Alert.alert(response.data.message)
      }
    } catch (error) {
      console.log('error', error.message);
    };
  };

  return (

    <Background style={{ alignItems: 'center', justifyContent: 'center' }} >
      <View
        style={{
          backgroundColor: '#fff',
          width: '85%',
          height: 500,
          margin: 25, borderRadius: 50,
          top: 150,

        }} >
        <View
          style={{ width: 150, height: 150, top: -70, borderRadius: 40, justifyContent: 'center', alignSelf: 'center', backgroundColor: "#fff" }}
        >
          <Icon name="user-o" size={80} color="#060606" style={{ marginLeft: 35, marginVertical: 30 }} />
        </View>

        <SafeAreaView style={[styles.view, { top: -40 }]}>
          <Text style={{ color: '#3E4C59', marginRight: 180, fontWeight: 'bold', marginVertical: 5 }}>Email-adress</Text>

          <TextInput style={[styles.input, { borderColor: brcolor, }]}
            placeholder="Your email adress"
            onChangeText={(email) => setEmail(email)}
            value={email}
            keyborardType="email-adress" />
          <Icon2 name="email" size={20} color="#9AA5B1" style={[styles.icon,{top: 54,}]} />
          <Text style={{ color: '#3E4C59', marginRight: 180, fontWeight: 'bold', marginVertical: 5 }}>Password</Text>
          <TextInput style={[styles.input, { borderColor: brcolor, }]}
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)} />
          <Icon2 name="locked" size={20} color="#9AA5B1" style={[styles.icon,{top: 151,}]} />
          <TouchableOpacity style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16 }}>
            <Text style={{ color: "#81C6ED", fontWeight: 'bold', fontSize: 16 }}>
              Forgot Pasword?
            </Text>
          </TouchableOpacity>

        </SafeAreaView>
        <SafeAreaView style={[styles.view, { top: 30 }]}>
          <Button bgcolor="#81C6ED" textColor='#fff' btnLabel={"LOG IN"} marginTop={'40'}
            press={handleSignin} width={250}
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}> Don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign UP')} style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: '#81C6ED', fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>
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
    top: 10,
    alignItems: "center",
    justifyContent: "center",
    alignItems: 'center',



  },
  input: {
    elevation: 9,
    color: '#c1c1c1',
    paddingHorizontal: 25, width: '80%',
    backgroundColor: '#ffff',
    marginVertical: 10,
    borderRadius: 15,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    borderWidth: 1,
    paddingLeft: 30,
  },
  icon: {
    position: "absolute",

    alignSelf: "flex-start", left: 40,
  },

},
);


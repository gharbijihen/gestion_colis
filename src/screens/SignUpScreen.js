import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import Background from '../components/Background';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from '../helpers/Api';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignUpScreen({ navigation }) {
  const [emptyFields, setEmptyFields] = useState([]);

  const [lastname, setUserlastname] = useState("")
  const [firstname, setUserfirstname] = useState("")
  const [email, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setUserNumber] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");

  const [touchedFields, setTouchedFields] = useState([]);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = async (e) => {
    const fields = [firstname, lastname, email, password, phone, confirmPassword];
    const isAnyFieldEmpty = fields.some((field) => field === "");

    if (isAnyFieldEmpty) {
      setEmptyFields(fields.map((field) => field === ""));
      Alert.alert('Verify your fields', 'Please fill in all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match.", 'Please enter matching passwords.');
      return;
    }


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



  const handleInputChange = (text, field) => {
    switch (field) {
      case 'lastname':
        setUserlastname(text);
        break;
      case 'firstname':
        setUserfirstname(text);
        break;
      case 'email':
        setUserEmail(text);
        break;
      case 'password':
        setPassword(text);
        break;
      case 'phone':
        setUserNumber(text);
        break;
      case 'confirmPassword':
        setConfirmPassword(text);
        break;
      default:
        break;
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };





  return (
    <Background>
      <View
        style={{
          backgroundColor: '#fff',
          width: '85%',
          height: 680,
         
          margin: 25, borderRadius: 50,
          top: 74,

        }} >
        <View
          style={{ width: 130, height: 110, top: -60, borderRadius: 40, justifyContent: 'center', alignSelf: 'center', backgroundColor: "#fff" }}
        >
          <Icon name="user-o" size={70} color="#060606" style={{ marginLeft: 35, marginVertical: 10 }} />
        </View>

        <ScrollView style={{ top: -60, left: 30, backgroundColor: 'transparent' }}>
          <Text style={styles.text}>First Name</Text>
          <TextInput style={[
            styles.inputtxt,
            emptyFields[0] && styles.inputError,
            touchedFields[0] && !emptyFields[0] && styles.inputTouched,
          ]}
            onFocus={() => handleFocus('firstname')}
            onBlur={handleBlur}
            placeholder="First Name"
            onChangeText={txt => setUserfirstname(txt)}
            value={firstname} />
          <Text style={styles.text}>Last Name </Text>
          <TextInput style={[
            styles.inputtxt,
            emptyFields[1] && styles.inputError,
            touchedFields[1] && !emptyFields[1] && styles.inputTouched,
          ]}
            placeholder="Last Name"
            onChangeText={txt => setUserlastname(txt)}
            value={lastname} />
          <Text style={styles.text}>E-mail</Text>
          <TextInput placeholder="Your email adress"
            onChangeText={txt => setUserEmail(txt)}
            value={email}
            keyboardType="email-address"
            style={[
              styles.inputtxt,
              emptyFields[2] && styles.inputError,
              touchedFields[2] && !emptyFields[2] && styles.inputTouched,
            ]}
          />
          <Text style={styles.text}>Phone Number</Text>
          <TextInput placeholder="Contact Number" keyboardType="numeric"
            style={[
              styles.inputtxt,
              emptyFields[3] && styles.inputError,
              touchedFields[3] && !emptyFields[3] && styles.inputTouched,
            ]}
            onChangeText={txt => setUserNumber(txt)}
            value={phone} />
          <Text style={styles.text}>Password</Text>
          <TextInput placeholder="Password" style={[
            styles.inputtxt,
            emptyFields[4] && styles.inputError,
          ]}
            labelValue={password}
            secureTextEntry={true}
            value={password}
            onChangeText={txt => setPassword(txt)} />
          <Text style={styles.text}>Confirm Password</Text>
          <TextInput placeholder="Confirm Password" style={[
            styles.inputtxt,
            emptyFields[5] && styles.inputError,
          ]}
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
              bgcolor="#137DC5" textColor='#ffff' btnLabel={"CREAT YOUR ACCOUNT"} press={handleSubmit}
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
    elevation: 5.3,
    borderColor: '#8C8C8C',
    paddingHorizontal: 25, width: '80%',
    backgroundColor: '#ffff',
    marginVertical: 5,
    borderRadius: 10,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    borderWidth: 1,
    paddingLeft: 15,
  },
  inputError: {
    borderColor: 'red',
  },
  text: {
    fontWeight: 'bold',
    // fontSize: 15,
    // color:"#137DC5"
    color:"#3E4C59"
    
  }
},
);

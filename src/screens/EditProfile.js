import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import { Avatar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { API_URL } from '../helpers/Api';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'
import axios from 'axios';

const EditProfile = () => {
  const [lastname, setUserlastname] = useState("")
  const [firstname, setUserfirstname] = useState("")
  const [email, setUserEmail] = useState("")
  const [phone, setUserNumber] = useState("")

  const navigation = useNavigation();
  const [singleFile, setSingleFile] = useState(null);
  

  const updateProfil = async () => {
    const userId = await AsyncStorage.getItem('userId')
  
    const headers = {
      'Accept': 'application/json',
    };
    const dataupdate = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email
    };
    try {
      const { response } = await axios.patch(`${API_URL}/users/update/${userId}`, dataupdate, { headers: headers })
      .then(navigation.navigate("Update"))

    }
    catch (error) {
      console.log('error', error.message);
    };
  }


  const Header = ({ title, button }) => {
    const createThreeButtonAlert = () =>
      Alert.alert('Discard changes?', 'if you go back now, you will lose your changes', [
        {
          text: 'Discard changes',
          onPress: () => navigation.goBack(),

        },
        {
          text: 'Keep editing',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',

        },

      ]);

    const navigation = useNavigation()
    return (
      <View style={{ alignContent: 'flex-start', }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity on Press={() => navigation.goBack()}>
            <Ionicons name="arrow-left" size={22} color="#FF5864" onPress={createThreeButtonAlert} style={{ top: 20, left: 10 }} />
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', top: 18, left: 28, fontSize: 18, fontWeight: '400', color: "black" }}>{title}</Text>
          <TouchableOpacity onPress={updateProfil} >
            <Text style={{ top: 18, left: 220, fontSize: 18, fontWeight: '400', color: "#33A4F8" }}>Done</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }


  return (
    <ScrollView>
      <Header title={"Edit profile"} ></Header>
      <Avatar.Image size={98} style={{ top: 30, alignSelf: 'center', marginVertical: 15 }} source={require('../assets/jj.jpg')} />

       <TouchableOpacity>
        <Text style={{ fontWeight: 500, color: '#4CB1F9', alignSelf: 'center', top: 28 }}>Edit picture</Text>
      </TouchableOpacity>
      <TextInput label="First name" activeUnderlineColor='green'
        underlineColor='#C1C1C1' style={styles.inputtxt}
        value={firstname} 
        onChangeText={(text) => setUserfirstname(text)}
      ></TextInput>
      <TextInput label="Last name" activeUnderlineColor='green' underlineColor='#C1C1C1' style={styles.inputtxt}
        value={lastname}
        onChangeText={txt => setUserlastname(txt)}
        ></TextInput>
      <TextInput label="Email" activeUnderlineColor='green' underlineColor='#C1C1C1'   onChangeText={txt => setUserEmail(txt)}
      style={styles.inputtxt} value={email}
      ></TextInput>
      <TextInput label="Phne Number" activeUnderlineColor='green' keyboardType="numeric" value={phone}
       underlineColor='#C1C1C1' style={styles.inputtxt}
       onChangeText={txt => setUserNumber(txt)}></TextInput> 
    
    </ScrollView>
  )
}

export default EditProfile
const styles = StyleSheet.create({
  inputtxt: {
    backgroundColor: 'transparent',
    marginVertical: 10,
    width: 360,
    alignSelf: 'center',
    top: 15,



  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
})
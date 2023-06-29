import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from 'react-native-vector-icons/EvilIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Button from '../components/Button'
import Row from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../helpers/Api';
import axios from 'axios';
import { useEffect } from 'react';


const Seetings = ({ route }) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const id = route.params.userId._j.toString()


  useEffect(() => {

    const headers = {
      'Accept': 'application/json',
    }
    axios.get(`${API_URL}/users/getUserId/${id}`, { headers: headers })
      .then(res => {
        setData(res.data)
        setSelectedImage(res.data.url1)
        console.log(res.data, 'dattataaaaaaa');

      })
  }, [selectedImage])



  const handleLogout = async () => {

    try {
      await AsyncStorage.removeItem('userId')
      navigation.navigate('Sign IN')
    } catch (e) {
      console.log(e)
    }
  }



  return (
    <View>
      <Image source={require('../assets/Settings.png')} style={{ width: 170, height: 180, left: 105 }}></Image>
      <SafeAreaView style={{ flexDirection: 'row' }}>

        <Avatar.Image size={58} style={{ alignSelf: 'center', left: 10 }} source={{ uri: data?.url1 }} />

        <Text style={{ top: 23, fontSize: 17, left: 20, fontWeight: 'bold' }}>{data?.firstname} {data?.lastname} </Text>

      </SafeAreaView>

      <View style={styles.view}>

        <View style={{ top: -80, flexDirection: 'row' }} >
          <TouchableOpacity onPress={() => navigation.navigate('Edit', { userId: id })} >
            <Text style={[styles.txt, { right: 80 }]}>My Profile </Text>
            <Icon name="user-o" size={28} color='#292D32' style={styles.icon} />
            <Row name="arrow-right" size={26} color='#292D32' style={[styles.icon, { right: -128 }]} />
          </TouchableOpacity>

        </View >
        <View style={{ top: -55, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Mycard')}>
            <Text style={[styles.txt, { right: 83 }]} >My Cards </Text>
            <Card name="credit-card" size={34} color='#292D32' style={[styles.icon, { marginRight: -10 }]} />
            <Row name="arrow-right" size={26} color='#292D32' style={[styles.icon, { right: -130 }]} />
          </TouchableOpacity>
        </View>

        <View style={{ top: -20, flexDirection: 'row' }}>
          <Text style={[styles.txt, { right: 57 }]}>My Documents</Text>
          <Icon2 name="ios-document-attach-outline" size={34} color='#292D32' style={[styles.icon, { marginRight: 10 }]} />
          <TouchableOpacity>
            <Row name="arrow-right" size={26} color='#292D32' style={[styles.icon, { right: -107 }]} />
          </TouchableOpacity>
        </View>
        <View style={{ top: 20, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Ok', { userId: id ,email:data?.email})}>
            <Text style={[styles.txt, { right: 80 }]}>My order </Text>
            <Icon2 name="time-outline" size={34}
              color='#292D32' style={[styles.icon, { marginRight: -17 }]} />
            <Row name="arrow-right" size={26} color='#292D32'
              style={[styles.icon, { right: -130 }]} />
          </TouchableOpacity>
        </View>
        <View style={{ top: 100 }}>
          <Button bgcolor="#81C6ED" textColor='#fff' width={200}
            btnLabel={"Log out"} marginTop={'40'} press={handleLogout}

          /></View>
      </View >
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 0,

  },
  view: {
    top: 120,
    alignItems: "center",
    justifyContent: "center",
    alignItems: 'center',

  },
  icon: {
    position: "absolute",
    alignSelf: "flex-start",
    right: 200,
  },
  txt: {
    textColor: '#3E4C59',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,

  }
})
export default Seetings
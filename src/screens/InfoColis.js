import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert,ToastAndroid, } from 'react-native'
import { useNavigation } from "@react-navigation/core"
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'
import { API_URL } from '../helpers/Api'
import axios from 'axios'
import { Avatar, TextInput } from 'react-native-paper';
import Button from '../components/Button'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Heade() {
  const navigation = useNavigation();
  return (
    <View style={{ alignContent: 'flex-start', backgroundColor: "#74b9ff", height: 60 }}>
      <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-left" size={22} color="#FFFF" style={{ top: 20, left: 10 }} />
        </TouchableOpacity>

        <Text style={{ alignSelf: 'center', top: 15, left: 28, fontSize: 24, fontWeight: '400', color: '#FFFF' }} > Details</Text>
      </View>
    </View>
  )
};

export default function InfoColis({ navigation, route }) {
  
  const { id } = route.params
  const [data, setData] = useState([])

  const createReservation = async (e) => {
    e.preventDefault();
    const userId = await AsyncStorage.getItem('userId')

    let data = {
     iduser:userId,
     idcolis:id
    };
    console.log(data)
    const headers = {
      'Accept': 'application/json',
    }

    try {
      const response = await axios.post(`${API_URL}/reservation/add/${id}/${userId}`, data, { headers: headers })
        
          ToastAndroid.showWithGravityAndOffset(
            'Your reservation has been sent successfully!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            30,
            50
          );
        
    } catch (error) {
      console.log('error', error.message);
    };
  };

  

 
  useEffect(() => {

    const headers = {
      'Accept': 'application/json',
    }
    axios.get(`${API_URL}/colis/getcolibyid/${id}`, { headers: headers })
      .then(res => {
        console.log("res.data",res.data);
        setData(res.data)
        console.log("res.data.id",res.data.id);
        

      })
      .catch(e => {
        console.log(e);
      }) 

  }, [])

 

  return (
    <SafeAreaView>
      <Heade />


      <View style={{ flexDirection: 'row', alignSelf: "center", padding: 4 }}>
        <Text style={{ right: 38 }}> Depart Date </Text>
        <Text> Depart Time </Text>
        <Text style={{ left: 25 }}> Arrived Date </Text>
      </View>

      <View style={{ flexDirection: 'row', alignSelf: "center", left: -1 }}>
        <Text style={{ fontWeight: 'bold', right: 48 }}> {data?.date1} </Text>
        <Text style={{ fontWeight: 'bold', left: 4 }}>02:55 PM</Text>
        <Text style={{ left: 41, fontWeight: 'bold' }}>  {data?.date2} </Text>
      </View>

      <View style={[styles.ligne, { top: 17 }]} />

      <View style={{ flexDirection: 'row', alignSelf: "center", padding: 9, top: 15, alignContent: "center" }}>

        <Text style={{ width: 150, height: 50 }}> {data?.from} </Text>

        <Icon2 name='flight' size={40} color="#74b9ff"
          style={{ transform: [{ rotate: '90deg' }], }} />
        <Text style={{ width: 150, height: 50, left: 10 }}> {data?.to} </Text>

      </View>

      <View style={styles.ligne} />


      <Icon name="bag-suitcase-outline" size={28} style={{ top: 17, color: "#74b9ff", left: 10 }} />
      <View style={{ flexDirection: 'row', }}>
        <Text style={{ top: -8, left: 41, fontSize: 15, fontWeight: 'bold' }}>  kilos :  {data?.poidDispo} kg   </Text>
        <Icon2 name="attach-money" size={25} style={{ left: 201, top: -10, color: "#74b9ff" }} />
        <Text style={{ top: -8, left: 201, fontSize: 15, fontWeight: 'bold' }}> Price : {data?.price} Dollar  </Text>
      </View>
      <View style={styles.ligne} />

      <View style={{ width: 400, backgroundColor: "#dfe6e9", height: 100 }}>
        <Text style={{ top: 15, fontWeight: 'bold' }}>DESCRIPTION: {data?.description}</Text>
      </View>
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', top: 5, }}>

          <Avatar.Image size={48} style={{ alignSelf: 'center', left: 10 }} source={{ uri: data?.user?.url1 }} />

          <Text style={{ top: 13, fontSize: 17, left: 20, fontWeight: 'bold' }}>{data?.user?.firstname} {data?.user?.lastname} </Text>

        </View>
      </TouchableOpacity>

      <Button bgcolor="#74b9ff" textColor='#fff' btnLabel={"I'm interesting "}
        marginTop={'40'} Top={320}
        width={250}
        press={createReservation}
      />

    </SafeAreaView >


  )
}
const styles = StyleSheet.create({
  ligne: {
    top: 9,
    borderWidth: 0.2,
    borderColor: "#D6D6D6",
    alignSelf: 'stretch'
  },
})
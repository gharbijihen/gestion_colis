import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button';
import { API_URL } from '../helpers/Api'
import { useState } from 'react';
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-paper'


export default function Favoris({ navigation }) {
  const [data, setData] = useState([])
  const [like, setLike] = useState(1)
  const fetchFavoris = () => {
    if (like) {
      const headers = {
        'Accept': 'application/json',
      }
      axios.get(`${API_URL}/colis/getAllFavoris`, { headers: headers })
        .then(res => {
          console.log(res.data, "daaaaaaatttttttttttaaaaaaaaaaaa");
          setData(res.data)


        })
      setLike(0)
    }
  }
  useEffect(() => {
    fetchFavoris()
    const interval = setInterval(() => {
      fetchFavoris()
    }, 5000); // Clear the interval when the component unmounts
    return () => clearInterval(interval);

  }, [like])
  const add = (id) => {
    const headers = {
      'Accept': 'application/json',
    }
    axios.put(`${API_URL}/colis/addFarovis/${id}`, { headers: headers })
    setLike(1)
    console.log("test")

  }
  const Header = ({ title, button }) => {
    return (
      <View style={{ backgroundColor: "#74b9ff", height: 120, top: -49 }}>
        <Image source={require("../assets/Like1.png")} style={{ width: 200, height: 220, alignSelf: "center" }}></Image>
      </View>
    )


  }

  return (
    <View>
      <View style={{ backgroundColor: "#74b9ff", height: 50 }}>
        <Text style={{ fontWeight: '400', color: "white", alignSelf: "center", top: 12, fontSize: 20, }}>MY FAVORITES </Text>
      </View>
      <ScrollView style={{ marginBottom: 47 }} >
        <Header></Header>
        {data.map((elem, i) => (
          <View key={i}>
            <TouchableOpacity onPress={() => navigation.navigate("Info", { id: elem.id })}>
              <View style={styles.view} >
                <TouchableOpacity onPress={() => add(elem.id)}>
                  <Icon1 name={elem?.favoris === "red" ? "heart" : "hearto"} size={26} style={elem?.favoris === "red" ? [styles.icon, { color: 'red' }] : styles.icon} />
                </TouchableOpacity>


                <Icon name="date" size={24} style={{ left: -140, color: '#74b9ff', top: 20 }} />
                <Text style={{ top: 1, left: -30 }}>Depart on {elem.date1} </Text>

                <View style={{ top: 90, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', }}>

                  <Icon3 name="bag-suitcase-outline" size={28} style={{ top: -5, color: "#74b9ff", left: -79 }} />
                  <Text style={{ fontWeight: 'bold', left: -82 }}>{elem.poidDispo} kg</Text>

                  <Icon2 name="attach-money" size={25} style={{ left: 65, color: "#74b9ff", top: -3 }} />
                  <Text style={{ fontWeight: 'bold', left: 63 }}>{elem.price} Dinar/kg</Text>
                </View>

                <View style={{
                  top: 92,
                  borderWidth: 0.2,
                  borderColor: "#D6D6D6",
                  alignSelf: 'stretch'
                }} />
                <View style={{ top: 97, flexDirection: 'row', width: 152, left: -83 }}>

                  <Avatar.Image size={40} source={{ uri: elem?.user?.url1 }} />

                  <Text style={{ fontWeight: 'bold', top: 12, left: 2 }}>{elem?.user?.lastname} {elem?.user?.firstname}  </Text>

                </View>

                <SafeAreaView style={{ top: 46, left: 99 }}>
                  <Button press={() => navigation.navigate('Chat')} bgcolor={'#5C9AE0'} btnLabel='send Message' width={120} onPress={() => navigation.navigate("Chat")} />
                </SafeAreaView>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', top: -120, left: 15 }}>
                  <SafeAreaView style={{ width: 145, height: 80, top: 10, right: 10, }}>
                    <Text style={{ fontWeight: 'bold' }}>{elem.from}</Text>
                  </SafeAreaView>


                  <FlightIcon name='flight' size={40} color="#74b9ff" style={{ transform: [{ rotate: '90deg' }], left: -36, top: -16 }} />
                  <SafeAreaView style={{ width: 120, height: 80, top: 10 }}>
                    <Text style={{
                      fontWeight: 'bold',

                    }}>{elem.to}</Text>
                  </SafeAreaView>


                </View>


              </View>
            </TouchableOpacity>

          </View>
        ))}
      </ScrollView >

    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 202,
    width: 330,
    borderRadius: 15,
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
    shadowRadius: 5.46,
    elevation: 9,
    borderColor: '#FFF',
    marginVertical: 14


  },
  icon: {
    display: 'flex',
    alignSelf: 'flex-end',
    top: 50,
    left: 140,
  }
})

import { View, Text ,StyleSheet, TouchableOpacity, Image,ScrollView,SafeAreaView} from 'react-native'
import React ,{ useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button';
import { API_URL } from '../helpers/Api'
import { useState } from 'react';
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import IconDate from 'react-native-vector-icons/Fontisto'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-paper'

export default function Favoris({navigation}) {
    const [data, setData] = useState([])
    const [like, setLike] = useState(1)
 
    useEffect(() => {
      if(like){
        const headers = {
          'Accept': 'application/json',
        }
        axios.get(`${API_URL}/colis/getAllFavoris`, { headers: headers })
          .then(res => {
            console.log(res.data,"daaaaaaatttttttttttaaaaaaaaaaaa");
            setData(res.data)
           
          })
          setLike(0)
      }
        
    }, [like])
    const add = (id) => {
      const headers = {
          'Accept': 'application/json',
      }
      axios.put(`${API_URL}/colis/addFarovis/${id}`, { headers: headers })
      setLike(1)
      console.log("test")
  }
  return (
    <ScrollView >
    {data.map((elem, i) => (
        <View key={i}>
            <TouchableOpacity onPress={() => navigation.navigate("Info", { id: elem.id })}>
                <View style={styles.view} >
                    <TouchableOpacity onPress={() => add(elem.id)}>
                        <Icon1 name={elem?.favoris === "red" ? "heart" : "hearto"} size={26} style={elem?.favoris === "red" ? [styles.icon, { top: 30, left: 140, color: 'red' }] : [styles.icon, { top: 30, left: 140 }]} />
                    </TouchableOpacity>


                    <IconDate name="date" size={24} style={{ left: -140, color: '#74b9ff', top: 10 }} />
                    <Text style={{ top: -10 }}>Depart on {elem.date1} </Text>
                    <View style={{
                        top: 85,
                        borderWidth: 0.2,
                        borderColor: "#D6D6D6",
                        alignSelf: 'stretch'
                    }} />
                    <View style={{ marginHorizontal: 5, right: 130, top: 100 }}>
                        <TouchableOpacity onPress={() => console.log("work")}>
                            <Avatar.Image size={45} source={require('../assets/jj.jpg')} />
                        </TouchableOpacity>

                    </View>
                    <SafeAreaView style={{ top: 40, left: 90 }}>
                        <Button press={() => navigation.navigate('Chat')} bgcolor={'#5C9AE0'} btnLabel='send request' width={110} onPress={() => navigation.navigate("Chat")} />
                    </SafeAreaView>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', top: -102 }}>
                        <SafeAreaView style={{ width: 145, height: 80, top: 10, right: 10, }}>
                            <Text style={{ fontWeight: 'bold' }}>{elem?.from}</Text>
                        </SafeAreaView>


                        <FlightIcon name='flight' size={40} color="#000" style={{ transform: [{ rotate: '90deg' }], left: -10 }} />
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
    marginVertical: 20


},
icon: {
    display: 'flex',
    alignSelf: 'flex-end',

}
})

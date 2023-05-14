import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import Icon from 'react-native-vector-icons/Fontisto'
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-paper'

import Header from '../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API_URL } from '../helpers/Api'



export default function Order({ navigation }) {
    const [data, setData] = useState([])
    useEffect(() => {
        const userId = AsyncStorage.getItem('userId')
        console.log(userId)
        const headers = {
            'Accept': 'application/json',
        }
        axios.get(`${API_URL}/colis/getbyid/${userId}`, { headers: headers })
            .then(res => {
                console.log(res.data, 'dattataaaaaaa');
                setData(res.data)
            })


    }, [])
    return (

        <ScrollView >
            <Header title={"My orders"}></Header>
            {data.map((elem, i) => (
                <View key={i}>
                    <TouchableOpacity onPress={() => navigation.navigate("Info")}>
                        <View style={styles.view} >
                            <View style={{flexDirection:"row"}}>
                                <TouchableOpacity >
                                <Icon1 name="options-vertical" size={24}  style={{ left: 220,top:6}}/>
                                </TouchableOpacity>
                                <Icon name="date" size={24} style={{left:-86,top:2,color:'#74b9ff'}}/>
                                <Text style={{left:-80,top:10}}>Depart on {elem.date1} </Text>
                            </View>
                            <View style={{
                                top: 115,
                                borderWidth: 0.2,
                                borderColor: "#D6D6D6",
                                alignSelf: 'stretch'
                            }} />
                            <View style={{ marginHorizontal: 5, right: 130, top: 90 }}>
                                <TouchableOpacity onPress={() => console.log("work")}>
                                    <Avatar.Image size={45} source={require('../assets/jj.jpg')} style={{ top: 30 }} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', top: -102 }}>
                                <SafeAreaView style={{ width: 145, height: 80, top: -5, right: 10, }}>
                                    <Text style={{ fontWeight: 'bold', top: 80 }}>{elem.from}</Text>
                                </SafeAreaView>


                                <FlightIcon name='flight' size={40} color="#000" style={{ transform: [{ rotate: '90deg' }], right: 60, top: 20 }} />
                                <SafeAreaView style={{ width: 120, height: 80, top: 75, left: 10 }}>
                                    <Text style={{
                                        fontWeight: 'bold',

                                    }}>{elem.to}</Text>
                                </SafeAreaView>

                            </View>



                        </View>
                    </TouchableOpacity>

                </View>
            ))}

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 200,
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
}
);
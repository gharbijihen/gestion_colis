import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon1 from 'react-native-vector-icons/AntDesign'
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import Button from './Button'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'
import { API_URL } from '../helpers/Api'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Fontisto'




const Cards = ({ dataSearch }) => {

    const navigation = useNavigation();
    const [data, setData] = useState([])
    const [x, setX] = useState(1)
    useEffect(() => {
        if (x) {
            if (dataSearch.length) {
                setData(dataSearch)
            } else {
                const headers = {
                    'Accept': 'application/json',
                }
                axios.get(`${API_URL}/colis/all`, { headers: headers })
                    .then(res => {
                        console.log(res.data);
                        setData(res.data)
                    })
                setX(0)
            }
        }
    }, [dataSearch, x])
    const add = (id) => {
        const headers = {
            'Accept': 'application/json',
        }
        axios.put(`${API_URL}/colis/addFarovis/${id}`, { headers: headers })
        setX(1)

    }
    return (

        <ScrollView >
            {data.map((elem, i) => (
                <View key={i}>
                    <TouchableOpacity onPress={() => navigation.navigate("Info", { id: elem.id })}>
                        <View style={styles.view} >
                            <TouchableOpacity onPress={() => add(elem.id)}>
                                <Icon1 name={elem?.favoris === "red" ? "heart" : "hearto"} size={26} style={elem?.favoris === "red" ? [styles.icon, {  color: 'red'}] : styles.icon} />
                            </TouchableOpacity>


                            <Icon name="date" size={24} style={{ left: -140, color: '#74b9ff', top: 20 }} />
                            <Text style={{ top: 1, left: -30 }}>Depart on {elem.date1} </Text>

                            <View style={{ top: 90, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', }}>

                                <Icon3 name="bag-suitcase-outline" size={28} style={{ top: -5, color: "#74b9ff", left: -93 }} />
                                <Text style={{ fontWeight: 'bold', left: -93 }}>{elem.poidDispo} kg</Text>

                                <Icon2 name="attach-money" size={25} style={{ left: 65, color: "#74b9ff", top: -3 }} />
                                <Text style={{ fontWeight: 'bold', left: 63 }}>{elem.price} Dollar</Text>
                            </View>
                           
                            <View style={{
                                top: 95,
                                borderWidth: 0.2,
                                borderColor: "#D6D6D6",
                                alignSelf: 'stretch'
                            }} />
                            <View style={{ top: 97,flexDirection: 'row', }}>
                                
                                    <Avatar.Image size={40} source={require('../assets/jj.jpg')} style={{right:110}} />
                                    <Text style={{ fontWeight: 'bold',top:12 , left:-90}}>{elem?.user?.lastname} {elem?.user?.firstname}  </Text>

                            </View>
                            
                            <SafeAreaView style={{ top: 43, left: 90 }}>
                                <Button press={() => navigation.navigate('Chat')} bgcolor={'#5C9AE0'} btnLabel='send Message' width={110} onPress={() => navigation.navigate("Chat")} />
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
        top: 50,
        left: 140

    }
}
)

export default Cards

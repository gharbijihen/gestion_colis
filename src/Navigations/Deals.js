import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, Modal, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Fontisto'
import axios from 'axios'
import { API_URL } from '../helpers/Api'

export default function Deals({ route, navigation }) {
    const id = route.params.userId
    console.log(id, "aaaaaaaaaaaaaaaaaaaaaaa")
    const [data, setData] = useState([])
    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
        }
        console.log("colis gett ")
        axios.get(`${API_URL}/reservation/getReservationById/${id}`, { headers: headers })
            .then(res => {

                setData(res.data)
                console.log(res.data, 'dattataaaaaaa=>>>');
            })



    }, [])

    const [showButtons, setShowButtons] = useState(false);
    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };
    return (
        <ScrollView >
            {data.map((elem, i) => (
                <View key={i}>

                    <TouchableOpacity onPress={() => navigation.navigate("Mycolis", { id: elem.id })}>

                        <View style={styles.view} >

                            <Icon name="date" size={24} style={{
                                left: -140, color: '#74b9ff', top: -10
                            }} />
                            <Text style={{ top: -33, left: -50 }}>Depart on {elem?.colisinfo?.date1} </Text>
                            <View style={{ left: 110, top: -56, width: 90, height: 30, backgroundColor: "green", borderRadius: 25 }}>
                                <Text style={{ color: "white", fontWeight: "bold", left: 15, top: 5 }}>{elem?.colisinfo?.etat}</Text>
                            </View>


                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', top: -50, left: 15 }}>
                                <SafeAreaView style={{ width: 145, height: 80, top: 16, right: 10, }}>
                                    <Text style={{ fontWeight: 'bold' }}>{elem?.colisinfo?.from}</Text>
                                </SafeAreaView>


                                <FlightIcon name='flight' size={40} color="#74b9ff" style={{ transform: [{ rotate: '90deg' }], left: -36 }} />
                                <SafeAreaView style={{ width: 120, height: 80, top: 16 }}>
                                    <Text style={{
                                        fontWeight: 'bold'

                                    }}>{elem?.colisinfo?.to}</Text>
                                </SafeAreaView>


                            </View>
                            <View style={{ top: -6, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', }}>

                                <Icon3 name="bag-suitcase-outline" size={28} style={{ top: -5, color: "#74b9ff", left: -76 }} />
                                <Text style={{ fontWeight: 'bold', left: -80 }}>{elem?.colisinfo?.poidDispo} kg</Text>

                                <Icon2 name="attach-money" size={25} style={{ left: 65, color: "#74b9ff", top: -3 }} />
                                <Text style={{ fontWeight: 'bold', left: 63 }}>{elem?.colisinfo?.price} Dollar/kg</Text>
                            </View>
                            <View style={{flexDirection:'row',alignContent:"center",width:200,height:20,backgroundColor:'black'}}>
                                <Avatar.Image size={38} style={{ alignSelf: 'center', left: -50 ,top:7}} source={{ uri: elem?.user?.url1 }} />
                                <Text style={{left:-50,top:9}}> {elem?.colisinfo?.user?.firstname} {elem?.colisinfo?.user?.lastname}</Text>
                                <Text  style={{left:-150,top:29}}>{elem?.colisinfo?.user?.phone} </Text>
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
        height: 250,

        width: 330,
        borderRadius: 15,
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
        shadowRadius: 5.46,
        elevation: 9,
        borderColor: '#FFF',
        marginVertical: 20,



    },
    footerContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
        width: 200,
        height: 200
    },
    icon: {
        display: 'flex',
        alignSelf: 'flex-end',

    }
}
);
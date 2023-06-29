import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import { API_URL } from '../helpers/Api'
import ConfirmeScreen from './ConfirmeScreen'
import InfoMyColis from '../screens/InfoMyColis'






export default function Order({ navigation, route }) {

    const id = route.params.userId
    const [data, setData] = useState([])
console.log("iduser",id)


    const fetchData = () => {
        const headers = {
            'Accept': 'application/json',
        }
        console.log("colis gett ")
        axios.get(`${API_URL}/colis/getallcolibyid/${id}`, { headers: headers })
            .then(res => {
                console.log(res.data, 'dattataaaaaaa=>>>');
                setData(res.data)
            })

    }
    useEffect(() => {
        fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 5000);
        return () => clearInterval(interval);


    }, [])



    return (

        <ScrollView >
            {data.map((elem, i) => (
                <View key={i}>
                    <TouchableOpacity onPress={() => navigation.navigate("Mycolis", { idcolis: elem.id })}>

                        <View style={styles.view} >

                            <TouchableOpacity onPress={()=>navigation.navigate ("Confirme",{ idcolis: elem.id })}>
                                <Icon4 name="notifications" style={{ left: 140, top: 10, color: "#137DC5" }} size={26} />
                            </TouchableOpacity>
                            <Icon name="date" size={24} style={{
                                left: -140, color: '#74b9ff', top: -20
                            }} />
                            <Text style={{ top: -40, left: -30 }}>Depart on {elem.date1} </Text>




                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', top: -20, left: 15 }}>
                                <SafeAreaView style={{ width: 145, height: 80, top: 16, right: 10, }}>
                                    <Text style={{ fontWeight: 'bold' }}>{elem.from}</Text>
                                </SafeAreaView>


                                <FlightIcon name='flight' size={40} color="#74b9ff" style={{ transform: [{ rotate: '90deg' }], left: -36 }} />
                                <SafeAreaView style={{ width: 120, height: 80, top: 16 }}>
                                    <Text style={{
                                        fontWeight: 'bold',

                                    }}>{elem.to}</Text>
                                </SafeAreaView>


                            </View>
                            <View style={{ top: -10, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', }}>

                                <Icon3 name="bag-suitcase-outline" size={28} style={{ top: -5, color: "#74b9ff", left: -76 }} />
                                <Text style={{ fontWeight: 'bold', left: -80 }}>{elem.poidDispo} kg</Text>

                                <Icon2 name="attach-money" size={25} style={{ left: 65, color: "#74b9ff", top: -3 }} />
                                <Text style={{ fontWeight: 'bold', left: 63 }}>{elem.price} Dinar/kg</Text>
                            </View>

                        </View>
                    </TouchableOpacity>


                </View >

            ))
            }


        </ScrollView >
    )
}
const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 180,
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
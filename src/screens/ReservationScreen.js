import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import Icon from 'react-native-vector-icons/Fontisto'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_URL } from '../helpers/Api'
import EtatColis from '../Navigations/EtatColis'



export default function ReservationScreen({ navigation, route }) {
    const [checked, setChecked] = useState('');
    const idcolis = AsyncStorage.getItem('idcolis')
    const updateEtatcolis = async () => {

        // const headers = {
        //     'Accept': 'application/json',
        // };
        // const dataupdate = {
        //     etat: checked
        // };
        // try {
        //     const response = await axios.patch(`${API_URL}/colis/updateEtatcolis/${idcolis}`, dataupdate, { headers: headers })

        // }
        // catch (error) {
        //     console.log('error', error.message);
        // };
    }

    console.log("idcolis", idcolis)


    return (
        <ScrollView>
          
         <View  style={styles.view}>
            
             </View>
       
              <EtatColis></EtatColis>
             
        </ScrollView>

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
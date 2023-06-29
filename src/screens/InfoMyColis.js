import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, ToastAndroid, Modal, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/core"
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'
import { API_URL } from '../helpers/Api'
import axios from 'axios'
import Edit from 'react-native-vector-icons/AntDesign'
import { Avatar, TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/Ionicons'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import EditColis from './EditColis'

export function Heade() {
    const navigation = useNavigation();
    return (
        <View style={{ alignContent: 'flex-start', backgroundColor: "#74b9ff", height: 60 }}>
            <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-left" size={22} color="#FFFF" style={{ top: 20, left: 10 }} />
                </TouchableOpacity>



            </View>
        </View>
    )
};

export default function InfoMyColis({ navigation, route }) {
    const { idcolis } = route.params
    console.log('idcolis', idcolis)
    const [data, setData] = useState([])
    const [showButtons, setShowButtons] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
        }
        axios.get(`${API_URL}/colis/getcolibyid/${idcolis}`, { headers: headers })
            .then(res => {
                setData(res.data)
            })
            .catch(e => {
                console.log(e);
            })

    }, [])
    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };

    const handleCancel = () => {
        setModalVisible(false); // Fermer la modale sans effectuer d'action
    };
    const handleEdit = ({ route, navigation }) => {
        // Logique pour l'édition du card
    
        setModalVisible(false); // Fermer la modale après l'édition
    };
    const handleDelete = async (e) => {

        e.preventDefault();

        const headers = {
            'Accept': 'application/json',
        };
        try {
            const response = axios.delete(`${API_URL}/colis/delete/${idcolis}`, { headers: headers })

            ToastAndroid.showWithGravityAndOffset(
                'colis Deleted !',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            ); navigation.goBack()

        } catch (err) {

            return (Alert.alert("Failed to modify... Please check the fields "))
        }
        setModalVisible(false); // Fermer la modale après la suppression
    };




    return (
        <SafeAreaView>
            <Heade />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon1 name="options-vertical" size={24} style={{ left: 344, top: -40, color: 'white' }} />
            </TouchableOpacity>

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
                <Icon2 name="attach-money" size={25} style={{ left: 181, top: -10, color: "#74b9ff" }} />
                <Text style={{ top: -8, left: 175, fontSize: 15, fontWeight: 'bold' }}> {data?.price} Dinar/kg  </Text>
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
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}   >

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, width: 386, top: 310 }}>
                        <Button icon={() => (
                            <Edit name='edit' size={25} />
                        )} mode="contained" buttonColor={"#137DC5"} style={{ marginBottom: 10, marginEnd: 10 }}>
                            Edit
                        </Button>
                        <Button icon="cancel" mode="outlined" Color={'#C1C1C1'} textColor={'red'} style={{ marginBottom: 10, marginEnd: 10 }}
                            onPress={handleDelete}>
                            Delete
                        </Button>
                        <Button mode="contained-tonal" buttonColor={"#C1C1C1"} textColor='white'
                            style={{ marginBottom: 5, marginEnd: 10 }} onPress={handleCancel} >
                            Cancel
                        </Button>

                    </View>
                </View>
            </Modal>

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
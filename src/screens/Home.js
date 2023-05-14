import { View, TouchableOpacity, Modal, StyleSheet, Alert, Text, Pressable, SafeAreaView, ScrollView, } from 'react-native'
import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards';
import Icon3 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Arrow from 'react-native-vector-icons/Octicons'
import IconS from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from "../components/Button";
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';
import { API_URL } from '../helpers/Api';
import { TextInput } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedAirport1, setSelectedAirport1] = useState(null);
    const [selectedAirport2, setSelectedAirport2] = useState(null);
    const [dataSearch, setDataSearch] = useState([]);

    const searchColis = async (e) => {
        e.preventDefault();
        console.log(selectedAirport1);
        const headers = {
            'Accept': 'application/json',
        }
        try {
            const response = await axios.get(`${API_URL}/colis/search/${selectedAirport1}/${selectedAirport2}`, { headers: headers })
            console.log(response.data);
            setDataSearch(response.data)
            setModalVisible(!modalVisible);
        }
        catch (error) {
            console.log('error', error.message);
        };



    }

    useEffect(() => {
        getMoviesFromApiAsync()
    }, []);
    const getMoviesFromApiAsync = async () => {
        try {
            console.log("json")
            const response = await fetch(
                'https://8y04y.mocklab.io/json/1', {
                method: 'Get',
            }

            );
            const json = await response.json();
            var array = []
            for (let airport of json) {
                array.push(airport.name)

            }

            setData(array)
            console.log(json.name)

        } catch (error) {
            console.error(error);
        }
    };



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icon3 name='ios-search-circle' style={{ left: 300 }} size={48} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
                <Icon3 name="notifications" style={{ left: 350, top: -40 }} size={26} />
            </TouchableOpacity>

            <ScrollView style={styles.scrollView}>


                <Cards dataSearch={dataSearch} from={selectedAirport1} to={selectedAirport2} />

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);

                    }}>
                    <View style={{ justifyContent: "center", alignSelf: "center", flex: 1 }}>

                        <View style={
                            {

                                backgroundColor: '#56B8D1',
                                width: 320,
                                height: 280,
                                borderRadius: 15,
                                justifyContent: 'center',// Centre verticalement
                                alignItems: 'center', // Centre horizontalement

                            }}>

                            <View style={{
                                alignItems: 'center', top: 15
                            }}>
                                <SelectDropdown
                                    data={data}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                        setSelectedAirport1(selectedItem)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                    searchableError={() => <Text>No airport found</Text>}
                                    defaultValue={selectedAirport1}
                                    search={true}
                                    searchPlaceHolder={"FROM:Enter your destination"}
                                    buttonStyle={[styles.inputtext, { marginBottom: 15 }]}
                                    searchInputStyle={{ paddingLeft: 10 }}
                                    onChangeSearchInputText={(text) => setSelectedAirport1(text)}

                                />


                                <IconS name="airplane-takeoff" size={24} style={styles.icon} color="#000" />



                                <SelectDropdown
                                    data={data}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                        setSelectedAirport2(selectedItem)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                    searchableError={() => <Text>No airport found</Text>}
                                    defaultValue={selectedAirport2}
                                    search={true}
                                    searchPlaceHolder={"FROM:Enter your destination"}
                                    buttonStyle={styles.inputtext}
                                    onChangeSearchInputText={(text) => setSelectedAirport2(text)}
                                />
                                <IconS name="airplane-landing" size={24} color="#000" style={[styles.icon, { top: 80 }]} />
                                <View style={styles.arrow} >

                                    <Arrow name="arrow-switch" size={24} color="#000" style={{ transform: [{ rotate: '90deg' }], }} />

                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: "center", top: -25, }}>
                                    <TextInput placeholder="Weight"
                                        style={{
                                            height: 40,
                                            width: 130,
                                            left: -10,
                                            borderWidth: 1,
                                            borderColor: '#8C8C8C',
                                            backgroundColor: '#fff',
                                            borderRadius: 10
                                        }}
                                    >
                                        <IconS name="weight-kilogram" size={24} style={[styles.icon, { left: -10 }]} color="#000" />

                                    </TextInput>
                                    <TextInput placeholder="Price"
                                        style={{
                                            height: 40,
                                            width: 130,
                                            left: 7,
                                            borderWidth: 1,
                                            borderColor: '#8C8C8C',
                                            backgroundColor: '#fff',
                                            borderRadius: 10
                                        }}
                                    >
                                        <Icon2 name="attach-money" size={25} style={{ left: 201, top: -10, color: "#000" }} />

                                    </TextInput>
                                </View>

                            </View>
                            <Button bgcolor="#81C6ED" textColor='#fff' press={searchColis} btnLabel={"SEARCH"} marginTop={'40'}
                                width={200} />



                        </View>

                    </View>

                </Modal>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    scrollView: {
        backgroundColor: 'transparent',
        flex: 1,




    },
    image: {

        justifyContent: 'center',
        width: '100%',
        height: '110%',
        marginLeft: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',



    },

    inputtext: {

        height: 50,
        width: 280,
        borderColor: '#646464',
        borderWidth: 1,
        elevation: 9,
        shadowRadius: 5.46,
        backgroundColor: '#ffff',
        borderRadius: 15,
        paddingLeft: 40,
        shadowOpacity: 0.32,
    },
    icon: {
        position: "absolute",
        top: 10,
        alignSelf: "flex-start", left: 5
    },
    arrow: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 50,
        top: -80,
        left: 90,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        marginLeft: 30,
    }
});
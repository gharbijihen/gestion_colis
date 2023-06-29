import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet, TextInput, ImageBackground } from "react-native";
import Arrow from 'react-native-vector-icons/Octicons'
import AirplaneIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from "../components/Button";
import SelectDropdown from 'react-native-select-dropdown';
import { API_URL } from "../helpers/Api";
import axios from "axios";

const SearchScrenn = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedAirport1, setSelectedAirport1] = useState("");
    const [selectedAirport2, setSelectedAirport2] = useState("");
    const [PoidDispo, setPoidDispo] = useState("");
    const [Price, setPrice] = useState("");


    const searchColis = (e) => {
        e.preventDefault();
        const headers = {
            'Accept': 'application/json',
        }
        axios.get(`${API_URL}/colis/search`, {
            "params": {
                "from": selectedAirport1,
                "to": selectedAirport2,
                "poidDispo": PoidDispo,
                "price": Price,

            }
        }, { headers: headers })
            .then((res) => {
                console.log(res.data);
            })
        console.log(response.data)

    }



    useEffect(() => {
        getMoviesFromApiAsync()
    }, []);
    const getMoviesFromApiAsync = async () => {
        try {
            console.log("json")
            const response = await fetch(
                'https://kg5w9.mocklab.io/json/1', {
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


        <ImageBackground source={require("../assets/22.png")}
            resizeMode="cover" style={styles.image}>
            <ScrollView style={styles.scrollView}>
                <View style={
                    {

                        backgroundColor: '#fff',
                        width: '85%',
                        height: 250,
                        borderRadius: 15,
                        justifyContent: 'center',// Centre verticalement
                        alignItems: 'center', // Centre horizontalement

                        marginLeft: 4

                    }}>

                    <View style={{
                        alignItems: 'center', top: 10
                    }}>
                        <SelectDropdown
                            data={data}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
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


                        <AirplaneIcon name="airplane-takeoff" size={24} style={styles.icon} color="#000" />




                        <SelectDropdown
                            data={data}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
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
                        <AirplaneIcon name="airplane-landing" size={24} color="#000" style={[styles.icon, { top: 80 }]} />
                        <View style={styles.arrow} >

                            <Arrow name="arrow-switch" size={24} color="#000" style={{ transform: [{ rotate: '90deg' }], }} />

                        </View>
                  



                    </View>
                    <Button bgcolor="#81C6ED" textColor='#fff' btnLabel={"SEARCH FLIGHTS"} marginTop={'40'}
                        press={searchColis} width={200} />



                </View>
            </ScrollView>
        </ImageBackground>



    );
};

export default SearchScrenn;

const styles = StyleSheet.create({
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

})
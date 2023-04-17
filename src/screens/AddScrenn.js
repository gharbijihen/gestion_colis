import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Arrow from 'react-native-vector-icons/Octicons'
import AirplaneIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateComponent from '../components/DateComponent';
import SliderComponent from '../components/SliderComponent';
import Button from '../components/Button';

import SelectDropdown from 'react-native-select-dropdown';



const AddScrenn = () => {
    const [from, userfrom] = useState("")

    const [to, userto] = useState("")
    const [description, setdescription] = useState("")
    const [kilos, userkilos] = useState("")
    const [prix, userprix] = useState("")
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [data, setData] = useState([])
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
        <ImageBackground source={require("../assets/22.png")} resizeMode="cover" style={styles.image}>
            <View style={
                {
                    backgroundColor: '#fff',
                    width: '85%',
                    height: 600,
                    borderRadius: 15,
                    justifyContent: 'center',// Centre verticalement
                    alignItems: 'center', // Centre horizontalement
                    top: 20,
                    marginLeft: 4

                }}>
                <View style={{
                    alignItems: 'center', top: 160
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
                        defaultValue={selectedAirport}
                        search={true}
                        searchPlaceHolder={"FROM:Enter your destination"}
                        buttonStyle={[styles.inputtext, { marginBottom: 15 }]}
                        searchInputStyle={{ paddingLeft: 10 }}

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
                        defaultValue={selectedAirport}
                        search={true}
                        searchPlaceHolder={"FROM:Enter your destination"}
                        buttonStyle={[styles.inputtext, { marginBottom: 15 }]}
                        searchInputStyle={{ paddingLeft: 10 }}

                    />
                    <AirplaneIcon name="airplane-landing"
                        size={24} color="#000" style={[styles.icon, { top: 80 }]} />
                    <View style={styles.arrow} >
                        <Arrow name="arrow-switch"
                            size={24} color="#000"
                            style={{ transform: [{ rotate: '90deg' }], }} />

                    </View>

                </View>
                <View style={{ top: 130 }}>
                    <DateComponent></DateComponent>
                </View>
                <View style={{ top: -40, marginVertical: 180 }}>
                    <SliderComponent />

                    <TextInput placeholder="Description" multiline
                        maxLength={1300} onChangeText={txt => setdescription(txt)}
                        value={description}
                        style={{
                            height: 50,
                            margin: 20,
                            borderWidth: 1,
                            borderColor: '#8C8C8C',
                            borderRadius: 15
                        }}>

                    </TextInput>

                    <Button bgcolor={"#81C6ED"} btnLabel={"ADD"}
                        width={150} Top={80} left={15}
                    />

                </View>

            </View>



















        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '110%',
        marginLeft: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff'

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
        top: 8,
        alignSelf: "flex-start", left: 10
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

export default AddScrenn
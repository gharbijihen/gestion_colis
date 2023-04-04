import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput, ImageBackground, StatusBar } from "react-native";
import Chatbox from 'react-native-vector-icons/Ionicons';
import Searchicon from 'react-native-vector-icons/Fontisto';
import Arrow from 'react-native-vector-icons/Octicons'
import AirplaneIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from "../components/Button";

const SearchScrenn = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');


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

        setData(json)
            console.log(json[0].name)

        } catch (error) {
            console.error(error);
        }
    };



    return (

        <ImageBackground source={require("../assets/22.png")}
            resizeMode="cover" style={styles.image}>
            <StatusBar barStyle={"light-content"} color='#FFF' />
            <View style={
                {

                    backgroundColor: '#fff',
                    width: '85%',
                    height: 319,
                    borderRadius: 15,
                    justifyContent: 'center',// Centre verticalement
                    alignItems: 'center', // Centre horizontalement
                    top: -100,
                    marginLeft: 4

                }}>

                <View style={{
                    alignItems: 'center', top: 10
                }}>

                    <TextInput
                        placeholder="FROM:Enter your destination"
                        style={[styles.inputtext, { marginBottom: 15, }]}
                        value={searchText}


                    >
                    </TextInput>
                    <AirplaneIcon name="airplane-takeoff" size={24} style={styles.icon} color="#000" />



                    <TextInput
                        placeholder="TO:Enter your destination"
                        style={styles.inputtext}


                    >

                    </TextInput>
                    <AirplaneIcon name="airplane-landing" size={24} color="#000" style={[styles.icon, { top: 80 }]} />
                    <View style={styles.arrow} >

                        <Arrow name="arrow-switch" size={24} color="#000" style={{ transform: [{ rotate: '90deg' }], }} />

                    </View>
                    


                </View>
                <Button bgcolor="#81C6ED" textColor='#fff' btnLabel={"SEARCH FLIGHTS"} marginTop={'40'}
                    press={() => navigation.navigate('After')} width={200} />



            </View>

        </ImageBackground>


    );
};

export default SearchScrenn;

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
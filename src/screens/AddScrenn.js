import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Arrow from 'react-native-vector-icons/Octicons'
import AirplaneIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateComponent from '../components/DateComponent';
import SliderComponent from '../components/SliderComponent';
import Button from '../components/Button';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';



const AddScrenn = () => {
    const [from, userfrom] = useState("")
    const [to, userto] = useState("")
    const [description, setdescription] = useState("")
    const [kilos, userkilos] = useState("")
    const [prix, userprix] = useState("")
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
                    alignItems: 'center', top: 140
                }}>

                    <TextInput
                        placeholder="FROM:Enter your destination"
                        style={[styles.inputtext, { marginBottom: 15, }]}
                        onChangeText={txt => userfrom(txt)}
                        value={from}
                    >
                    </TextInput>
                    <AirplaneIcon name="airplane-takeoff" size={24} style={styles.icon} color="#000" />

                    <TextInput
                        placeholder="TO:Enter your destination"
                        style={styles.inputtext}
                        onChangeText={txt => userto(txt)}
                        value={to}
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
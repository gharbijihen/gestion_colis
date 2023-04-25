import { View, Text, StyleSheet, Imageµ } from 'react-native'
import React, { useState } from 'react'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons'
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import Button from './Button'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-paper'



const Cards = () => {
    const navigation = useNavigation();
    return (

        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 80 }}>
           
            <View style={styles.view}>
                <TouchableOpacity>
                    <Icon1 name="hearto" size={26} style={[styles.icon, { top: 10, left: 140 }]} />
                </TouchableOpacity>
               

                <Text style={{ top: -20, right: 120 }}>Depart on{ } </Text>
                <View style={{
                    top:85,
                    borderWidth:0.2,
                   borderColor:"#D6D6D6",
                    alignSelf: 'stretch'
                }} />
                <View style={{ marginHorizontal: 5, right: 130, top: 90 }}>
                    <TouchableOpacity onPress={() => console.log("work")}>
                        <Avatar.Image size={45} source={require('../assets/jj.jpg')} />
                    </TouchableOpacity>
                    
                </View>
                <SafeAreaView style={{top:40,left:90}}>
                    <Button press={() => navigation.navigate('Chat')} bgcolor={'#5C9AE0'}  btnLabel='send request' width={110}  onPress={()=>navigation.navigate("Chat")}/>
                </SafeAreaView>
                


                <SafeAreaView style={{ top: -102 }}>
                    <FlightIcon name='flight' size={40} color="#000" style={{ transform: [{ rotate: '90deg' }], }} />
                </SafeAreaView>


            </View>



            <View style={styles.view}>
                <TouchableOpacity>
                    <Icon1 name="heart" size={26} style={[styles.icon, { top: -60, left: 140 }]} color='#FF0000' />
                </TouchableOpacity>
                <TouchableOpacity>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}  >
                    <Icon name='chatbox-ellipses-outline' size={26} style={[styles.icon, { top: -87, left: 100 }]} />
                </TouchableOpacity>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    view: {
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

    }
}
)

export default Cards

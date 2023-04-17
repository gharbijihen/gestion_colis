import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons'
import FlightIcon from 'react-native-vector-icons/MaterialIcons'

import { TouchableOpacity } from 'react-native'
import { BottomSheet, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const Cards = () => {
    const navigation = useNavigation();
    return (

        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 80 }}>
            <View style={styles.view}>
                <TouchableOpacity>
                    <Icon1 name="hearto" size={26} style={[styles.icon, { top: -20, left: 140 }]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')} >
                    <Icon name='chatbox-ellipses-outline' size={26} style={[styles.icon, { top: -47, left: 100 }]} />
                </TouchableOpacity>

                <Text style={{ top: -70, right: 120 }}>Depart on{ } </Text>

                <View style={{ marginHorizontal: 5, right: 130, top: 55 }}>
                    <TouchableOpacity onPress={() => console.log("work")}>
                        <Avatar.Image size={45} source={require('../assets/jj.jpg')} />
                    </TouchableOpacity>
                </View>

                <SafeAreaView style={{ top: -82 }}>
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
        </View>
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

import { View, Text, StyleSheet, Imageµ } from 'react-native'
import React, { useState } from 'react'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons'
import FlightIcon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button'
import { TouchableOpacity } from 'react-native'
import { BottomSheet, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'



export default function Order() {
  return (
    <View>
        <Header title={"My orders"}></Header>
      
      <View style={{ flex: 1, alignItems: 'center', paddingVertical: 80 }}>
            <View style={styles.view}>
               
                <View style={{
                    top:75,
                    borderWidth:0.2,
                   borderColor:"#D6D6D6",
                    alignSelf: 'stretch'
                }} />
                <View style={{ marginHorizontal: 5, right: 130, top: 80 }}>
                    <TouchableOpacity onPress={() => console.log("work")}>
                        <Avatar.Image size={35} source={require('../assets/jj.jpg')} />
                    </TouchableOpacity>
                    
                </View>
                <SafeAreaView style={{top:40,left:90}}>
                    <Button press={() => navigation.navigate('Chat')} bgcolor={'#5C9AE0'}  btnLabel='send request' width={110}  onPress={()=>navigation.navigate("Chat")}/>
                </SafeAreaView>
                


                <SafeAreaView style={{ top: -67 }}>
                    <FlightIcon name='flight' size={40} color="#000" style={{ transform: [{ rotate: '90deg' }], }} />
                </SafeAreaView>
                </View>


            </View>
    </View>
  )
}
const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 102,
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
);
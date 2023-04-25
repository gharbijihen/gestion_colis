import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
const EditProfile = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Header title={"Edit Profile"} button={"Done"}/>
                <Avatar.Image style={{ alignSelf: 'center', top: 40 }} size={95} source={require('../assets/jj.jpg')} />
                <TouchableOpacity>
                    <Text style={{ color: '#33A4F8', alignSelf: 'center', top: 50, fontWeight: '500', fontSize: 16 }}>Edit picture</Text>
                </TouchableOpacity>
                <TextInput label="First name"
                    activeUnderlineColor='green'
                    underlineColor='#C1C1C1'
                    style={styles.inputtxt}
                />

                <TextInput label="Last name"
                    activeUnderlineColor='green'
                    underlineColor='#C1C1C1'
                    style={styles.inputtxt}
                />
                <TextInput label="Email"
                    activeUnderlineColor='green' underlineColor='#C1C1C1' style={styles.inputtxt} />
                <TextInput label="Phone Number" keyboardType="numeric"
                    activeUnderlineColor='green' underlineColor='#C1C1C1' style={styles.inputtxt} />
         
        </View>
    )

}

export default EditProfile
const styles = StyleSheet.create({
    inputtxt:{
        backgroundColor:'transparent',
        marginVertical:10,
        width:360,
        alignSelf:'center',
        top:15,
        
   
        
    }
})
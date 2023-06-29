import { View, StyleSheet, Alert,ToastAndroid, } from 'react-native'
import React from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { API_URL } from '../helpers/Api';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';


export default function PasswordScren({ navigation, route }) {
    const [oldPass, setUseroldPass] = useState("")
    const [newPass, setUserNewPass] = useState("")
    const [confirmPass, setUserConfirmPass] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(true);

    const id = route.params
    console.log(id)
    const isFormValid = () => {
        // add validation rules here
        return  oldPass !== '' && newPass !== '' && confirmPass !==""
      };
    const updatePassword = async (e) => {



        if ((newPass !== confirmPass))
            //return setData({...data, err: "Password did not match.", success: ''})
            return Alert.alert("Password did not match.")

        const headers = {
            'Accept': 'application/json',
        };

        try {

            const response =  await axios.patch(`${API_URL}/users/changepass/${id}`, { password: newPass }, { headers: headers })
        
              ToastAndroid.showWithGravityAndOffset(
                'Mot de passe modifié avec succès!',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );navigation.goBack()
              
          
            


        } catch (err) {

            return Alert.alert("Failed to modify... Please check the fields ")
        }
    }
    return (
        <View>
            <TextInput label="Old Password" activeUnderlineColor='green'
                underlineColor='#C1C1C1' style={styles.inputtxt}
                value={oldPass}
                secureTextEntry={passwordVisible}
                right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} 
                onPress={() => setPasswordVisible(!passwordVisible)} />}
               
                onChangeText={(text) => setUseroldPass(text)}
            ></TextInput>
            <TextInput label="New Password" activeUnderlineColor='green'
                underlineColor='#C1C1C1' style={styles.inputtxt}
                value={newPass}
                secureTextEntry={passwordVisible}
                right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} 
                onPress={() => setPasswordVisible(!passwordVisible)} />}
                onChangeText={(text) => setUserNewPass(text)}
            ></TextInput>
            <TextInput label="Confirm New Password" activeUnderlineColor='green'
                underlineColor='#C1C1C1' style={styles.inputtxt}
                value={confirmPass}
                secureTextEntry={passwordVisible}
                right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} 
                onPress={() => setPasswordVisible(!passwordVisible)} />}
                onChangeText={(text) => setUserConfirmPass(text)}
            ></TextInput>
            <View style={{ flexDirection: 'row', top: 40, alignSelf: "center" }}>
                <Button mode="contained" onPress={(updatePassword)}
                disabled={(!isFormValid())}
                    theme={{ colors: { primary: 'green' } }} style={{ width: 200 }} >
                    Change Password
                </Button>
                <Button mode="contained" onPress={() => navigation.goBack()}
                
                    theme={{ colors: { primary: '#C1C1C1' } }} style={{ width: 100 }}>
                    Cancel
                </Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputtxt: {
        backgroundColor: 'transparent',
        marginVertical: 10,
        width: 360,
        alignSelf: 'center',
        top: 15,
    },
    icon: {
        position: "absolute",
        alignSelf: "flex-start",

    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
    },
    txt: {
        textColor: '#3E4C59',
        fontSize: 15,
        fontWeight: "700",
        marginVertical: 5,

    }
})
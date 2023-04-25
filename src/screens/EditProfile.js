import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { Avatar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';


const EditProfile = () => {
 
    const navigation = useNavigation();
  return (
    <View>
      <Header title={"Edit profile"} button={"Done"}></Header>
      <Avatar.Image size={98} style={{top:30,alignSelf:'center',marginVertical:15}}source={require('../assets/jj.jpg')} />
      <TouchableOpacity> 
      <Text style={{fontWeight:500,color:'#4CB1F9',alignSelf:'center',top:28}}>Edit picture</Text>
      </TouchableOpacity>
      <TextInput  label="First name" activeUnderlineColor='green' underlineColor='#C1C1C1' style={styles.inputtxt}></TextInput>
      <TextInput  label="Last name" activeUnderlineColor='green' underlineColor='#C1C1C1'style={styles.inputtxt}></TextInput>
      <TextInput  label="Email" activeUnderlineColor='green' underlineColor='#C1C1C1'style={styles.inputtxt}></TextInput>
      <TextInput  label="Phne Number" activeUnderlineColor='green'keyboardType="numeric" underlineColor='#C1C1C1'style={styles.inputtxt}></TextInput>
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
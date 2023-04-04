import React from 'react'
import Button from '../components/Button';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function StartScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFF', flex: 1 }}>
      <Image source={require('../assets/cloud.png')}
        style={{
          width: 325, top: 20,
          height: 350,
          resizeMode: 'contain',
          margin: 25,
        }} />
      <SafeAreaView>
        <Image source={require('../assets/HOMEAVION.png')}
          style={{
            top: -300, width: '103%', left: 9,
            height: 170,
            resizeMode: 'contain',
            margin: 30,
          }} />
      </SafeAreaView>
      <SafeAreaView style={{ top: -80 }}>
        <View style={styles.vtext}>
          <Text >
            <Text >From </Text>
            <Text style={{ color: '#0095FE' }}>anywhere</Text > <Text>to anywhere
            </Text>

          </Text>
          <Text style={{ alignContent: 'center', color: '#000', fontSize: 18 }}>with SPEEDYBOX.</Text></View>




        <SafeAreaView style={{
          backgroundColor: "#20CAFF", height: 400, width: 520,
          borderTopEndRadius: 700, top: -6, borderTopLeftRadius: 400, 
        }}>
          <Button bgcolor="#ffff" textColor='#0095FE' btnLabel={"SIGN IN"} Top={50}
            press={() => navigation.navigate('Sign IN')} width={280} left={-15}
          />
          <Button bgcolor="#ffff" textColor='#0095FE' btnLabel={"SIGN UP"} Top={45}
            press={() => navigation.navigate('Sign UP')} width={280} left={-15}
          /></SafeAreaView>

      </SafeAreaView>


    </SafeAreaView>



  )
}




const styles = StyleSheet.create({
  text: {
    flex: 3,
    fontSize: 65,
    lineHeight: 91,
    textAlign: 'center',
    marginBottom: 12,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vtext: {
    alignItems: 'center',
    marginTop: -90,
    padding: 9,
    paddingBottom: 45,

  },

  capitalLetter: {
    color: '#0000',
    fontSize: 20,
    alignItems: 'center'
  },
})
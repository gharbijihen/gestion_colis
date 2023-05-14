import { View, Text, StyleSheet, SafeAreaView, Alert,LinearGradient ,  } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationActions } from "react-navigation";
import  {useEffect} from 'react';

export default function Welcome({navigation})  {
  useEffect(()=>{
    const value =  AsyncStorage.getItem('userId')
  setTimeout(()=>{ 
    if( value =="" ){
      navigation.navigate("Start")
    }else{
      navigation.navigate("Tab")
    }
    },2000)},[])
   
  return (
    <SafeAreaView style={{ backgroundColor: '#1DC5FF', flex: 1 }}>

      <Text style={styles.text}>Welcome</Text>
        
    </SafeAreaView>

  )
};
const styles = StyleSheet.create({
  text: {
    color: '#FFFF',
    flex: 3,
    fontSize: 65,
    lineHeight: 100,
    textAlign: 'center',
    marginVertical: 300,

  },
})
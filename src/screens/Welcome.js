import { View, Text, StyleSheet, SafeAreaView, Alert,LinearGradient ,  } from 'react-native'
import React from 'react'
import { NavigationActions } from "react-navigation";
import  {useEffect} from 'react';

export default function Welcome({navigation})  {
  useEffect(()=>{
  setTimeout(()=>{ navigation.navigate("Start")},2000)},[])
   
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
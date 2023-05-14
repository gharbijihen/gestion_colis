import React, { useState } from 'react';
 
import { View, StyleSheet, Text } from 'react-native';
 
import Slider from '@react-native-community/slider';
 
export default function SliderComponent({poids,price,setPoids,setPrice}) {
 

  return (
    <View style={styleSheet.MainContainer}>
 
      
 
      <Text style={{ fontSize: 16 }}>
      Available weight : {poids} kg 
      </Text>
 
      <Slider
        maximumValue={10}
        minimumValue={2}
        minimumTrackTintColor="#346AD2"
        maximumTrackTintColor="#D9D9D9"
        
        step={1}
        value={poids}
        onValueChange={
          (sliderValue) => setPoids(sliderValue)
        }
        thumbTintColor="#81C6ED"
        style={{width: 300, height: 40}}/>
        
      <Text style={{ fontSize: 16 }}>
      Price/KG : {price} dinare
      </Text>
 
      <Slider
        maximumValue={100}
        minimumValue={10}
        minimumTrackTintColor="#346AD2"
        maximumTrackTintColor="#D9D9D9"
        
        step={1}
        value={price}
        onValueChange={
          (sliderValue) => setPrice(sliderValue)
        }
        thumbTintColor="#81C6ED"
        style={{width: 300, height: 40}}
      />
      
 
    </View>
  );
}
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
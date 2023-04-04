import React, { useState } from 'react';
 
import { View, StyleSheet, Text } from 'react-native';
 
import Slider from '@react-native-community/slider';
 
export default function SliderComponent() {
 
  const [data1, setSliderData1] = useState(10);
  const [data2, setSliderData2] = useState(10);
  return (
    <View style={styleSheet.MainContainer}>
 
      
 
      <Text style={{ fontSize: 16 }}>
      Poids disponible : {data1} kg 
      </Text>
 
      <Slider
        maximumValue={10}
        minimumValue={2}
        minimumTrackTintColor="#346AD2"
        maximumTrackTintColor="#D9D9D9"
        
        step={1}
        value={data1}
        onValueChange={
          (sliderValue) => setSliderData1(sliderValue)
        }
        thumbTintColor="#81C6ED"
        style={{width: 300, height: 40}}/>
        
      <Text style={{ fontSize: 16 }}>
      Poids disponible : {data2} dinare
      </Text>
 
      <Slider
        maximumValue={100}
        minimumValue={10}
        minimumTrackTintColor="#346AD2"
        maximumTrackTintColor="#D9D9D9"
        
        step={1}
        value={data2}
        onValueChange={
          (sliderValue) => setSliderData2(sliderValue)
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
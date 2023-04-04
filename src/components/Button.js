import { View, Text, TouchableOpacity,  TouchableHighlight, StyleSheet,  Alert } from 'react-native'
import React from 'react'

const Button = ({ bgcolor, btnLabel, textColor, left,width, Top ,press}) => (
  <TouchableHighlight
  
    style={{
      title:btnLabel,
      backgroundColor: bgcolor,
      left: left,
      top: Top,
      alignItems: 'center',
      marginRight: 70,
      marginLeft: 70,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 25,
      width: width,
      marginVertical:10,
      shadowRadius: 5.46,
      elevation: 9,
    
    }}
    onPress={press}
  >
    <Text style={{ color: textColor,fontWeight:'bold', fontSize: 16, textAlign: 'center' }}>{btnLabel}</Text>
  </TouchableHighlight>
);



export default Button;
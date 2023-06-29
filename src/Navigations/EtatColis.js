import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ReservationScreen from '../screens/ReservationScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../helpers/Api'
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';



export default function EtatColis({ route, navigation }) {


  const [checked, setChecked] = useState('');
  const idcolis = AsyncStorage.getItem('idcolis')
  const updateEtatcolis = async () => {

    const headers = {
      'Accept': 'application/json',
    };
    const dataupdate = {
      etat: checked
    };
    try {
      const response = await axios.patch(`${API_URL}/colis/updateEtatcolis/${idcolis}`, dataupdate, { headers: headers })

    }
    catch (error) {
      console.log('error', error.message);
    };
  }

  return (
    <View>
  
    
      <View style={styles.radiobutton}>
        <RadioButton 
          value="en cours"
          status={checked === 'en cours' ? 'checked' : 'unchecked'}
          onPress={() => { setChecked('en cours'), updateEtatcolis() }}
          
        />
         <Text style={{top:8}}> en cours </Text>
       </View>
       <View style={styles.radiobutton}>
        <RadioButton 
          value="livrer"
          status={checked === 'livrer' ? 'checked' : 'unchecked'}
          onPress={() => { setChecked('livrer'), updateEtatcolis() }}
        />
         <Text style={{top:8}}>livrer</Text>
        </View>
        <View style={{flexDirection:'row',top:-90,left:270}}>
         
       
        </View>
        
      
      </View>
  )
}
const styles = StyleSheet.create({
  radiobutton: {
    flex: 1,
    top:-90,
    left:240,
    flexDirection:'row',
    marginLeft:10
  },
})
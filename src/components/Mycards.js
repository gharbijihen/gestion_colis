import { CardField, useStripe } from '@stripe/stripe-react-native';
import { View, Text,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'

import { TouchableOpacity } from 'react-native-gesture-handler';



export function Heade() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#74b9ff", height: 90 ,}}>
      <View style={{ flexDirection: 'row',top:20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-left" size={22} color="#FFFF" style={{  left: 0 }} />
        </TouchableOpacity>

        <Text style={{ alignSelf: 'center',  top:-2,left: 28, fontSize: 24, fontWeight: '400', color: '#FFFF' }} > My cards </Text>
      </View>
      <Image source={require('../assets/creditCard.png')} style={{top:-120,left:0,}}></Image>
    </View>
  )
};
const Mycards = () => {
  const navigation = useNavigation();
  return (
<View>
      <Heade title={"My cards"}/>
      <View>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30, top: 30
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
    </View>
    </View>
  );
}


export default Mycards

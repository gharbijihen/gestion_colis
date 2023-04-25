import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CardField, useStripe } from '@stripe/stripe-react-native';
import Header from './Header';
const Mycards = () => {
  const navigation = useNavigation();
  
  return (
    <View>
     <Header title={"Add  card"}
     button={"Save"}></Header>
     <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000'
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 60,
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
    </View>
  )
}

export default Mycards

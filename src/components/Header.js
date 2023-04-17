import { View, Text,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/core"
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'


const Header = ({title,button}) => {
  const createThreeButtonAlert = () =>
  Alert.alert('Discard changes?', 'if you go back now, you will lose your changes', [
    {
      text: 'Discard changes',
      onPress: () => navigation.goBack(),
            
    },
    {
      text: 'Keep editing',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
   
    },
    
  ]);

    const navigation= useNavigation()
  return (
    <View style={{alignContent:'flex-start',}}>
    <View style={{flexDirection:'row'}}>
        <TouchableOpacity on Press={() =>  navigation.goBack()}>
            <Ionicons name="arrow-left" size={22} color="#FF5864" onPress={createThreeButtonAlert} style={{top:20,left:10}} />
        </TouchableOpacity>
        <Text style={{alignSelf:'center', top:18,left:28, fontSize:18 , fontWeight:'400', color:"black"}}>{title}</Text>
        <TouchableOpacity>
          <Text style={{ top:18,left:220, fontSize:18 , fontWeight:'400', color:"#33A4F8"}}>{button}</Text>
        </TouchableOpacity>
    
    </View>
</View>
  )
}

export default Header
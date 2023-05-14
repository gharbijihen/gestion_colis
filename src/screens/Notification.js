import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';
export function Heade() {
    const navigation = useNavigation();
    return (
      <View style={{ alignContent: 'flex-start', backgroundColor: "#74b9ff", height: 60 }}>
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-left" size={22} color="#FFFF" style={{ top: 20, left: 10 }} />
          </TouchableOpacity>
  
          <Text style={{ alignSelf: 'center', top: 15, left: 28, fontSize: 24, fontWeight: '400', color: '#FFFF' }} > Notification</Text>
        </View>
      </View>
    )
  };

export default function Notification({navigation}) {
  return (
    <View>
      <Heade></Heade>
      <View style={{width:400,borderColor: '#000',height:50 , borderWidth: 1, backgroundColor: '#fff',}}>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 302,
        width: 400,
        borderRadius: 15,
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
        shadowRadius: 5.46,
        elevation: 9,
        borderColor: '#FFF',
        marginVertical: 20


    },
})

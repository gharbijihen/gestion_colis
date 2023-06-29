import * as React from 'react';
import { Text, View,Image,ScrollView ,TouchableOpacity} from 'react-native';
import Order from './Order';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReservationScreen from '../screens/ReservationScreen';
import InfoColis from '../screens/InfoColis';
import Deals from './Deals';
import EtatColis from './EtatColis';


const Tabb = createMaterialTopTabNavigator();

function BBSCREEN() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Order!</Text>
    </View>
  );
}
const  Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:"#74b9ff",height:60}}>
    <Text style={{fontWeight:'400',color:"white",alignSelf:"center",top:15,fontSize: 20,}}>My Orders </Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-left" size={22} color="#FFFF" style={{ top: 20, left: 10,top:-10 }} />
        </TouchableOpacity>
    </View>
  )


}




export default function Ok({navigation,route}) {
  const id = route.params.userId

  

  return (
 <View style={{flex:1}}>
    <Header title={"My orders"}></Header>
      <Tabb.Navigator    
       tabBarOptions={{
        // activeTintColor: 'blue', Color of the currently active tab
        // inactiveTintColor: 'gray', Color of inactive tabs
       style:{
        height: 42
       },
        labelStyle: {
          fontSize: 13, // Font size of the tab labels
          fontWeight: 'bold', // Font weight of the tab labels
        },
        indicatorStyle: {
          backgroundColor: '#74b9ff', // Color of the tab indicator line
        },
      }}>
        <Tabb.Screen name="Order" component={Order}  
        initialParams={{userId:id }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon2 name="parachute-box" type="font-awesome" color={color} size={20} />
          ),
        }}/>
      
        
        <Tabb.Screen name="Deals" component={ReservationScreen} 
         initialParams={{userId:id }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="handshake-o" type="font-awesome" color={color} size={20} />
          ),
        }} />
        <Tabb.Screen name="confirm" component={Deals} 
         initialParams={{userId:id }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon1 name="ios-checkmark-circle"  type="font-awesome" color={"green"} size={20} />
          ),
        }} />
      </Tabb.Navigator>
   </View>
  )
}

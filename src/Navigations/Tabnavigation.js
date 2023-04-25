import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Like from 'react-native-vector-icons/FontAwesome'
import Seetings from '../screens/Seetings';
import SearchScrenn from '../screens/SearchScrenn';
import Icon3 from 'react-native-vector-icons/Ionicons'
import Cards from '../components/Cards';
import AddScrenn from '../screens/AddScrenn';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createMaterialBottomTabNavigator();


function Feed() {
  return (
  <View>
    <TouchableOpacity style={{left:320,top:40}}>
    <Icon3 name='ios-search-circle' size={48} />
    </TouchableOpacity>
   <Cards/>
   </View>
  );
}
function Post() {
  return (
   <AddScrenn></AddScrenn>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>like!</Text>
    </View>
  );
}
function Seeting() {
  return (
    <Seetings />
  )
}

const Tabnavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#3C7EAF"
      shifting={true}
      barStyle={{ backgroundColor: '#FFF', }}

    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Search',

          tabBarIcon: ({ color }) => (
            <Icon3 name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoris"
        component={Notifications}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ color }) => (
            <Like name="heart" color={color} size={26} />
          ),
        }} />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <Icon3 name="md-add-circle" color={color} size={28} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color }) => (
            <Icon3 name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Update"
        component={Seeting}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


export default Tabnavigation;

const styles = StyleSheet.create({
  icon: {
    flex: 3,
    //position: "absolute", 
    //alignSelf: "flex-start",

  },
})

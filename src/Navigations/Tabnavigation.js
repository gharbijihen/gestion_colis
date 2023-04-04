import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Like from 'react-native-vector-icons/FontAwesome'
import Seetings from '../screens/Seetings';
import SearchScrenn from '../screens/SearchScrenn';
import Icon3 from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator();


function Feed() {
  return (
   <SearchScrenn></SearchScrenn>
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
      <Text>Notifications!</Text>
    </View>
  );
}
function Seeting() {
  return (
   <Seetings/>
   )
}

const Tabnavigation = () => {
  return (
    <Tab.Navigator
      
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ }) => (
            <Icon2 name="search-location" color='#FFF' size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoris"
        component={Notifications}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ }) => (
            <Like name="heart" color='#FFF' size={26} />
          ),
        }}/>
        <Tab.Screen
        name="Post"
        component={Notifications}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ }) => (
            <Icon3 name="add-outline" color='#FFF' size={26} />
          ),
        }}
      />
      <Tab.Screen
      name="Update"
      component={Seeting}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ }) => (
          <Icon name="setting" color='#FFF' size={26} />
        ),
      }}
    />
      <Tab.Screen
        name="Notificztion"
        component={Notifications}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ }) => (
            <Icon3 name="notifications" color='#FFF' size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


export default Tabnavigation;


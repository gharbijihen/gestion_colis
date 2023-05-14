import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Button from '../components/Button';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Like from 'react-native-vector-icons/FontAwesome'
import { Searchbar } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-paper'
import Seeting from '../screens/Seetings';
import AddScrenn from '../screens/AddScrenn';
import Home from '../screens/Home';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../helpers/Api';
import Favoris from '../screens/Favoris';

const Tab = createMaterialBottomTabNavigator();


function ChatBox() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <View style={{ flex: 1, top: 8, alignSelf: "center" }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ width: 380, height: 48, backgroundColor: '#C1C1C1' }}
        />
      </View>
      <Image style={{ top: 100, width: 400, height: 550 }} source={require('../assets/Chat.png')} />
    </View>

  );
}


const Tabnavigation = ({ route, navigation }) => {



  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#3C7EAF"
      shifting={true}
      barStyle={{ backgroundColor: '#FFF', }}

    >
      <Tab.Screen
        name="Home"
        component={Home} 
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Like"
        component={Favoris}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ color }) => (
            <Like name="heart" color={color} size={26} />
          ),
        }} />
      <Tab.Screen
        name="Post"
        component={AddScrenn}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <Icon name="md-add-circle" color={color} size={28} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={ChatBox}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbox-ellipses" color={color} size={26} />
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
  view: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 202,
    width: 330,
    borderRadius: 15,
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
    shadowRadius: 5.46,
    elevation: 9,
    borderColor: '#FFF',
    marginVertical: 20


},
icon: {
    display: 'flex',
    alignSelf: 'flex-end',

}
})

import { View, Text , Button} from 'react-native'
import React from 'react'
import Screens from '../utils/Screens'
import Post from '../utils/Screens/POST'
import Chat from '../utils/Screens/CHAT'
import Profile from '../utils/Screens/PROFILE'
import  Like from '../utils/Screens/LIKE'






import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();


const PostStack = createBottomTabNavigator();
const LikeStack = createBottomTabNavigator();
const HomeStack = createBottomTabNavigator();
const ChatStack = createBottomTabNavigator();
const ProfileStack = createBottomTabNavigator();


{/*const HomeScreen=()=>(
  <HomeStack.Navigator screenOptions ={{ headerShown: false }}>
  <HomeStack.Screen name={Screens.HOME} component={Home}/>
  <HomeStack.Screen name={Screens.CHAT} component={Chat}/>
  <HomeStack.Screen name={Screens.PROFILE} component={Profile}/>
  <HomeStack.Screen name={Screens.POST} component={Post}/>
  <HomeStack.Screen name={Screens.LIKE} component={Like}/>
  </HomeStack.Navigator>
)*/}






const ChatScreen =()=> (
  <ChatStack.Navigator screenOptions ={{ headerShown: false }}>
  <ChatStack.Screen name={screensEnabled.Chat} component={Chat}/>
  </ChatStack.Navigator>
)
const ProfileScreen =()=> (
  <ProfileStack.Navigator screenOptions ={{ headerShown: false }}>
  <ProfileStack.Screen name={screensEnabled.Profile} component={Profile}/>
  </ProfileStack.Navigator>
)
const LikeScreen =()=> (
  <LikeStack.Navigator screenOptions ={{ headerShown: false }}>
  <LikeStack.Screen name={screensEnabled.Like} component={Like}/>
  </LikeStack.Navigator>
)
const PostScreen =()=> (
  <PostStack.Navigator screenOptions ={{ headerShown: false }}>
  <PostStack.Screen name={screensEnabled.Like} component={Like}/>
  </PostStack.Navigator>
)
function EmptyScreen() {
  return <View />;
}
{/*function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
    </View>
  );
}*/}

export default function RoutesScreen() {
  return (
    
      <Tab.Navigator>
      <Tab.Screen name={Screens.HOME_STACK} component={HomeScreen} />
      <Tab.Screen name={Screens.POST_STACK} component={PostScreen} />
      <Tab.Screen name={Screens.CHAT_STACK} component={ChatScreen} />
      <Tab.Screen name={Screens.LIKE_STACK} component={LikeScreen} />
      <Tab.Screen name={Screens.PROFILE_STACK} component={ProfileScreen} />
    </Tab.Navigator> 
  
  );

  
}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import SignINScreen from './src/screens/SignINScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Welcome from './src/screens/Welcome';
import Chat from './src/screens/Chat';

import Seetings from './src/screens/Seetings';
import SearchScrenn from './src/screens/SearchScrenn';
import Tabnavigation from './src/Navigations/Tabnavigation';
import AddScrenn from './src/screens/AddScrenn'
import EditProfile from './src/screens/EditProfile';
import Mycards from './src/components/Mycards';

import Order from './src/Navigations/Order';
import InfoColis from './src/screens/InfoColis';
import { Blur } from '@shopify/react-native-skia';
import ModalScreen from './src/components/ModalScreen';
import LogoScreen from './src/screens/LogScreen';
import Notification from './src/screens/Notification';




//bch najam nwafar store l les component lkol


const Stack = createNativeStackNavigator();

function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Logo" component={LogoScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Sign IN" component={SignINScreen} />
        <Stack.Screen name="Sign UP" component={SignUpScreen} />
        <Stack.Screen name="Seetings" component={Seetings} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Search" component={SearchScrenn} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Tab" component={Tabnavigation} />
        
        <Stack.Screen name="Edit" component={EditProfile} />
        <Stack.Screen name="ADD" component={AddScrenn} />
        <Stack.Screen name="Mycard" component={Mycards} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Info" component={InfoColis} />
        <Stack.Screen name="Blur" component={Blur} />
        <Stack.Screen name="MyModal" component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
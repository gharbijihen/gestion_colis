import * as React from 'react';
import { SafeAreaView, View } from 'react-native'
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
import ChatRoom from './src/screens/ChatRoom'
import Order from './src/Navigations/Order';
import InfoColis from './src/screens/InfoColis';
import { Blur } from '@shopify/react-native-skia';
import LogoScreen from './src/screens/LogScreen';
import Notification from './src/screens/Notification';
import Ok from './src/Navigations/Ok';
import HalfButton, { CardsItem } from './src/helpers/HalfButton';
import PasswordScren from './src/Navigations/PasswordScren';
import InfoMyColis from './src/screens/InfoMyColis';
import ConfirmeScreen from './src/Navigations/ConfirmeScreen';
import EditColis from './src/screens/EditColis';




const Stack = createNativeStackNavigator();

function App() {
  const RootApp = () => {
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Logo"
          screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Logo" component={LogoScreen} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Sign IN" component={SignINScreen} />
          <Stack.Screen name="Sign UP" component={SignUpScreen} />
          <Stack.Screen name="Seetings" component={Seetings} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Tab" component={Tabnavigation} />
          <Stack.Screen name="Ok" component={Ok} />
          <Stack.Screen name="Edit" component={EditProfile} />
          <Stack.Screen name="ADD" component={AddScrenn} />
          <Stack.Screen name="Mycard" component={Mycards} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Info" component={InfoColis} />
          <Stack.Screen name="Blur" component={Blur} />
          <Stack.Screen name="Room" component={ChatRoom} />
          <Stack.Screen name="Ooo" component={HalfButton} />
          <Stack.Screen name="Mycolis" component={InfoMyColis} />
          <Stack.Screen name="Confirme" component={ConfirmeScreen} />
          <Stack.Screen name="EditColis" component={EditColis} />
          <Stack.Screen name="Password" component={PasswordScren} />


        </Stack.Navigator>
      </NavigationContainer>

    )
  }
  return (
    // <Provider store={store}>
    <View style={{flex:1 }}>
      <RootApp></RootApp>
    </View>
    // </Provider>



  );

}

export default App;
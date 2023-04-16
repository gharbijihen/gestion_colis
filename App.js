import * as React from 'react';
import { createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import SignINScreen from './src/screens/SignINScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Welcome from './src/screens/Welcome';
import Chat from './src/screens/Chat';
import ScreenAfterSearch from './src/screens/ScreenAfterSearch';
import Seetings from './src/screens/Seetings';
import SearchScrenn from './src/screens/SearchScrenn';
import Tabnavigation from './src/Navigations/Tabnavigation';
import AddScrenn from './src/screens/AddScrenn'



const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});
const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>//check if we have a user or not 
  )


}
function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search"
        screenOptions={{ headerShown:false}} >

        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Sign IN" component={SignINScreen} />
        <Stack.Screen name="Sign UP" component={SignUpScreen} />
        <Stack.Screen name="Seetings" component={Seetings} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Search" component={SearchScrenn} />
        <Stack.Screen name="After" component={ScreenAfterSearch} />
        <Stack.Screen name="Tab" component={Tabnavigation} />

      
        <Stack.Screen name="ADD" component={AddScrenn} />
   

   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LogoScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigateToWelcomeScreen = () => {
      navigation.navigate('Welcome');
    };

    setTimeout(navigateToWelcomeScreen, 2000); // Naviguer vers WelcomeScreen après 3 secondes (3000 millisecondes)
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      
      <Image style={{
            resizeMode: 'contain',
            height: 600,
            width: 450,left:-6
          }}source={require('../assets/LOGO_TUnisfiwt.png')} />
     
      <ActivityIndicator size="large" color="#0000ff" style={{ left: -190, top: 20 }} />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    
  },
});

export default LogoScreen;

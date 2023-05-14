import React from 'react';
import {ActivityIndicator, StyleSheet, View,Image} from 'react-native';

const LogoScreen= () => (
    
  <View style={[styles.container, styles.horizontal]}>
    <Image  source={require('../assets/logoApp.png')}></Image>
    
    <ActivityIndicator size="large" color="#0000ff" style={{left:-190,top:20}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    left:-20,
    top:50
  },
});

export default LogoScreen;
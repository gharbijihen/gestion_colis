import { View, Text, ImageBackground ,KeyboardAvoidingView,StyleSheet} from 'react-native'
import React from 'react'
export default function Background ({children}) { 
  return(
    <ImageBackground
     source={require("../assets/FLOUBack.png") } resizeMode="cover" style={styles.image}>
     <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height:'110%',
    top:-22,

  },
})
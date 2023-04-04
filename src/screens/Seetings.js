import { View, Text, StyleSheet,TouchableOpacity  } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Order from 'react-native-vector-icons/Ionicons'
import Card from 'react-native-vector-icons/EvilIcons'
import PassIcon from 'react-native-vector-icons/Ionicons'
import Button from '../components/Button'
import Row from 'react-native-vector-icons/SimpleLineIcons'



export default function Seetings({navigation}) {


  return (
    <View>
      <View style={styles.container}>
       
       {/* <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <PassIcon name="chevron-back" size={24} color="black" />
  </TouchableOpacity>*/}
      </View>
      <View style={styles.view}>

        <View style={{ top: -80, flexDirection: 'row' }} >
          <Text style={[styles.txt, { right: 80 }]}>My Profile </Text>
          <Icon name="user-o" size={28} color='#292D32' style={styles.icon} />
          <TouchableOpacity>
            <Row name="arrow-right" size={26} color='#292D32' style={[styles.icon, { right: -128 }]} />
          </TouchableOpacity>
        </View >
        <View style={{ top: -55, flexDirection: 'row' }}>
          <Text style={[styles.txt, { right: 83 }]} >My Cards </Text>
          <Card name="credit-card" size={34} color='#292D32' style={[styles.icon, { marginRight: -10 }]} />
          <TouchableOpacity>
            <Row name="arrow-right" size={26} color='#292D32' style={[styles.icon, { right: -130 }]} />
          </TouchableOpacity>
        </View>
        <View style={{ top: -20, flexDirection: 'row' }}>
          <Text style={[styles.txt, { right: 57 }]}>My Documents</Text>
          <PassIcon name="ios-document-attach-outline" size={34} color='#292D32' style={[styles.icon, { marginRight: 10 }]} />
          <TouchableOpacity>
            <Row name="arrow-right" size={26} color='#292D32' style={[styles.icon, { right: -107 }]} />
          </TouchableOpacity>
        </View>
        <View style={{ top: 20, flexDirection: 'row' }}>
          <Text style={[styles.txt, { right: 80 }]}>My order </Text>
          <Order name="time-outline" size={34} color='#292D32' style={[styles.icon, { marginRight: -20 }]} />
          <TouchableOpacity>
            <Row name="arrow-right" size={26} color='#292D32' style={[styles.icon, { right: -130 }]} />
          </TouchableOpacity>
        </View>
        <View style={{ top: 220 }}>
          <Button bgcolor="#81C6ED" textColor='#fff'
            btnLabel={"Sign out"} marginTop={'40'}

          /></View>
      </View >
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 0,

  },
  view: {
    top: 300,
    alignItems: "center",
    justifyContent: "center",
    alignItems: 'center',

  },
  icon: {
    position: "absolute",
  alignSelf: "flex-start",
    right: 200,
  },
  txt: {
    textColor: '#3E4C59',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,

  }

})

import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Order from 'react-native-vector-icons/Ionicons'
import Card from 'react-native-vector-icons/EvilIcons'
import PassIcon from 'react-native-vector-icons/Ionicons'
import Button from '../components/Button'
import Row from 'react-native-vector-icons/SimpleLineIcons'




const Seetings = ({ navigation }) => {
  const [profileImage, setProfileImage] = React.useState("");

  

  return (
    <View>
      <SafeAreaView style={{ flexDirection: 'row' }}>
        <TouchableOpacity >
          <Image source={profileImage} style={{ width: 60, height: 60, top: 140, left: 10 }}  >
          </Image>

        </TouchableOpacity>
        <Text style={{ top: 160, left: 20, fontWeight: 'bold' }}> user name</Text>

      </SafeAreaView>

      <View style={styles.view}>

        <View style={{ top: -80, flexDirection: 'row' }} >
          <TouchableOpacity onPress={() => navigation.navigate('Edit')} >
            <Text style={[styles.txt, { right: 80 }]}>My Profile </Text>
            <Icon name="user-o" size={28} color='#292D32' style={styles.icon} />
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
          <Button bgcolor="#81C6ED" textColor='#fff' width={200}
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
export default Seetings
import { View, Text, StyleSheet, Alert, ScrollView, TouchableOpacity, Modal ,TextInput, ToastAndroid} from 'react-native'
import React, { useState,useEffect  } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto'
import {  Button } from 'react-native-paper';
import { API_URL } from '../helpers/Api';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'
import axios from 'axios';
import Row from 'react-native-vector-icons/SimpleLineIcons'
import *as ImagePicker from 'react-native-image-picker';
import ImageViewer from '../components/ImageViewer';

const EditProfile = ({ route }) => {
  const [lastname, setUserlastname] = useState("")
  const [firstname, setUserfirstname] = useState("")
  const [email, setUserEmail] = useState("")
  const [phone, setUserNumber] = useState("")
  const [modal, setModal] = useState(false)
  const [picture, setPicture] = useState("")
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const PlaceholderImage = require('../assets/profile.png');
  const [data, setData] = useState([]);

  const id = route.params.userId
  console.log(id, '===>>>>idddd');
  const navigation = useNavigation();


  const _takePhoto = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'Image_Italy_',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibrary({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      Alert.alert("You did not select any image.");
    }
  };
  const _submitData = async () => {
    console.log("post image")
    const formData = new FormData();
    formData.append('file', {
      uri: selectedImage,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    try {
      console.log("post image 2")
      const response = await axios.post(`${API_URL}/users/upload/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }, 
       
      } ) ;ToastAndroid.showWithGravityAndOffset(
        'The image has been successfully modified.!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
    ); navigation.goBack()


      console.log(response.data,"dataaaaaaaaaa");
      console.log(selectedImage,"imageeeeeeeeeeeeee")
    } catch (error) {
      console.error(error);
    }
  };
  const handleChangeFirstName = (value)=>{

    setData((data)=>({...data,'firstname':value}))
  }
  const handleChangeLastName = (value)=>{
    setData((data)=>({...data,'lastname':value}))
  }
  const handleChangeEmail = (value)=>{
    setData((data)=>({...data,'email':value}))
  }
  const handleChangePhone = (value)=>{
    setData((data)=>({...data,'phone':value}))
  }
  const updateProfil = async () => {

    const headers = {
      'Accept': 'application/json',
    };
    const dataupdate = {...data};
    try {
      const response = await axios.patch(`${API_URL}/users/update/${id}`, dataupdate, { headers: headers })
        .then(navigation.navigate("Update"))
    }
    catch (error) {
      console.log('error', error.message);
    };
  }

  useEffect(() => {

    const headers = {
      'Accept': 'application/json',
    }
    axios.get(`${API_URL}/users/getUserId/${id}`, { headers: headers })
      .then(res => {
        setData(res.data)
        setSelectedImage(res.data.url1)
        console.log(res.data, 'image');

      })
  }, [])

  console.log(data, "datauser")

  const Header = ({ title, button }) => {
    const createThreeButtonAlert = () =>
      Alert.alert('Discard changes?', 'if you go back now, you will lose your changes', [
        {
          text: 'Discard changes',
          onPress: () => navigation.goBack(),

        },
        {
          text: 'Keep editing',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',

        },

      ]);

    const navigation = useNavigation()
    return (
      <View style={{ alignContent: 'flex-start', }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity on Press={() => navigation.goBack()}>
            <Ionicons name="arrow-left" size={22} color="#FF5864" onPress={createThreeButtonAlert} style={{ top: 20, left: 10 }} />
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', top: 18, left: 28, fontSize: 18, fontWeight: '400', color: "black" }}>{title}</Text>
          <TouchableOpacity onPress={updateProfil} >
            <Text style={{ top: 18, left: 220, fontSize: 18, fontWeight: '400', color: "#33A4F8" }}>Done</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }



  return (
    <ScrollView>

      <Header title={"Edit profil"} ></Header>

      <View >
        {selectedImage ? (
          <ImageViewer selectedImage={selectedImage} style={styles.selectedImage} />
        ) : (
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} style={styles.placeholderImage} />
        )}

      </View>

      <Button icon={picture == "" ? "upload" : "check-bold"}
        style={{ alignSelf: 'center', top: 8, left: 1 }}
        labelStyle={{ color: "#33A4F8" }}
        onPress={() => setModal(true)}>
        Edit picture
      </Button>


      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => { setModal(false) }}
      >
        <View style={styles.modalView}>

          <View style={styles.buttonModalView}>
            <Button icon="camera" style={styles.button} mode='outlined' labelStyle={{ color: "#33A4F8" }}
              onPress={() => _takePhoto()}>
              Camera
            </Button>
            <Button icon="folder-image" style={styles.button} mode='outlined' labelStyle={{ color: "#33A4F8" }}
              onPress={pickImageAsync}>
              Gellery
            </Button>

          </View>
          <View style={styles.buttonModalView}>

           
            <Button icon="content-save" style={{ backgroundColor: "green", alignSelf: 'center', width: 240 }}
              mode='contained'
              onPress={() => _submitData()}>
              Save
            </Button>


            <Button icon="cancel" style={{ backgroundColor: "#C1C1C1", width: 120 }}
              mode="contained"
              onPress={() => setModal(false)}>
              Cancel
            </Button>
          </View>
        </View>

      </Modal>
      <Text style={[styles.txt,{marginLeft:17,marginBottom:-10}]}>First Name</Text>
      <TextInput label="First name" 
        underlineColor='#C1C1C1' style={styles.inputtxt}
        value={firstname}
        placeholder={data.firstname}

        onChangeText={(text) => handleChangeFirstName(text)}
      ></TextInput>
        <Text style={[styles.txt,{marginLeft:17,marginBottom:-10}]}>Last Name</Text>
      <TextInput label="Last name" activeUnderlineColor='green' underlineColor='#C1C1C1' style={styles.inputtxt}
        value={lastname}
        placeholder={data.lastname}
        onChangeText={txt => handleChangeLastName(txt)}
      ></TextInput>
        <Text style={[styles.txt,{marginLeft:17,marginBottom:-10}]}>E-mail</Text>
      <TextInput label="Email" activeUnderlineColor='green' underlineColor='#C1C1C1' onChangeText={txt => handleChangeEmail(txt)}
        style={styles.inputtxt} value={email}
        placeholder={data.email}

      ></TextInput>
        <Text style={[styles.txt,{marginLeft:17,marginBottom:-10}]}>Phone Number </Text>
      <TextInput label="Phne Number" activeUnderlineColor='green' keyboardType="numeric" 
        underlineColor='#C1C1C1' style={styles.inputtxt}
        onChangeText={txt => handleChangePhone(txt)}
        value={phone}
        placeholder={data?.phone?.toString()}
        >
      </TextInput>
      <View style={{ top: 10, height: 100, flexDirection: 'row' }} >
        <TouchableOpacity onPress={() => navigation.navigate("Password")} >
          <Text style={[styles.txt, { left: 40 }]}>Change Password </Text>
          <Icon name="locked" size={26} color='#292D32' style={[styles.icon, { left: 10 }]} />
          <Row name="arrow-right" size={26} color='#292D32' style={[styles.icon, { left: 350 }]} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default EditProfile
const styles = StyleSheet.create({
  inputtxt: {
    backgroundColor: 'transparent',
    marginVertical: 10,
    width: 360,
    alignSelf: 'center',
    top: 0,
  },

  icon: {
    position: "absolute",
    alignSelf: "flex-start",

  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
  txt: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: 5,

  }, buttonModalView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'white',

  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    height: 130,

  },
  button: {
    width: 170,
    borderColor: "#33A4F8"
  },
  selectedImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
})
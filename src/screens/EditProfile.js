import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { Avatar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';


const EditProfile = () => {
  const [singleFile, setSingleFile] = useState(null);

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      let res = await fetch(
        'http://localhost/upload.php',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const navigation = useNavigation();
  return (
    <View>
      <Header title={"Edit profile"} button={"Done"}></Header>
      <Avatar.Image size={98} style={{ top: 30, alignSelf: 'center', marginVertical: 15 }} source={require('../assets/jj.jpg')} />
      {singleFile != null ? (
        <Text style={styles.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
        </Text>
      ) : null}
      <TouchableOpacity

        activeOpacity={0.5}
        onPress={selectFile}>
        <Text >Select File</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={uploadImage}>
        <Text style={{ fontWeight: 500, color: '#4CB1F9', alignSelf: 'center', top: 28 }}>Edit picture</Text>
      </TouchableOpacity>
      <TextInput label="First name" activeUnderlineColor='green' underlineColor='#C1C1C1' style={styles.inputtxt}></TextInput>
      <TextInput label="Last name" activeUnderlineColor='green' underlineColor='#C1C1C1' style={styles.inputtxt}></TextInput>
      <TextInput label="Email" activeUnderlineColor='green' underlineColor='#C1C1C1' style={styles.inputtxt}></TextInput>
      <TextInput label="Phne Number" activeUnderlineColor='green' keyboardType="numeric" underlineColor='#C1C1C1' style={styles.inputtxt}></TextInput>
    </View>
  )
}

export default EditProfile
const styles = StyleSheet.create({
  inputtxt: {
    backgroundColor: 'transparent',
    marginVertical: 10,
    width: 360,
    alignSelf: 'center',
    top: 15,



  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
})
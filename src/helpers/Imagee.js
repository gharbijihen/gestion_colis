const [profileImage, setProfileImage] = useState(null);
const selectImage = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary((ImageLibraryOptions,response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log("aaa")
        const source = { uri: response.uri };
        setProfileImage(source);
        uploadImage(response.uri);
      }
    });
  };


  

  const uploadImage = async (imageUri) => {
    const data = new FormData();
    data.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'profile.jpg',
    });

    data.append('upload_preset', '_gestionducolis');
    data.append("cloud_name", "dvn2ctxwu")

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dvn2ctxwu/image/upload',
        data
      );
      console.log('Image upload response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'Failed to upload image');
    }
  };
  import React, { useState } from 'react';
  import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
  import * as ImagePicker from 'react-native-image-picker';
  import ImageViewer from '../components/ImageViewer';
  import { Button } from 'react-native-paper';
  
  const EditProfile = () => {
   
    const [selectedImage, setSelectedImage] = useState(null);
  
   
  
   
    
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        <View style={styles.footerContainer}>
        <Button icon="camera" style={styles.input} mode="contained" onPress={pickImageAsync}> Camera</Button> 
          <Button label="Use this photo" />
        </View>
      
      </View>
    );
  };
  
  export default EditProfile;
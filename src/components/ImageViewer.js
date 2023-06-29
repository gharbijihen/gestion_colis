
import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {


    const imageSource =
        selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

    return <Avatar.Image size={130} source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        top: 30, alignSelf: 'center', marginVertical: 15, width: 130,
        height: 130,
        borderRadius: 75,
    },
});
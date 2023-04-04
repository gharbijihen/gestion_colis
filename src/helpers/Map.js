import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Firebase from '../Services/Auth/Firebase'
import MapView from 'react-native-maps';
export function getRegion(latitude, longitude, distance) {
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
    const longitudeDelta = distance / (oneDegreeOfLatitudeInMeters * Math.cos(latitude * (Math.PI / 180)));

    return {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta
    }
};


export default class Map extends Component {
    state = {
        location: {
            latitude: null,
            longitude: null
        }
    }

    componentDidMount() {

        this.getLocation();
    }

    onChangeText() { }

    onSendPress() { }


    getLocation = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({});

            this.setState({
                location: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }
            });

            this.map.animateToRegion(getRegion(location.coords.latitude, location.coords.longitude, 16000));
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={(ref) => this.map = ref}
                    style={styles.map}
                    initialRegion={getRegion(48.860831, 2.341129, 160000)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});





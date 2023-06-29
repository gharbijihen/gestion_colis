
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../helpers/Api';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons'

export default function ConfirmeScreen({route }) {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);

  const { idcolis } = route.params || {};


  useEffect(() => {
    console.log("aaaba")
    const fetchNotifications = async () => {
      const headers = {
        'Accept': 'application/json',
    }
    console.log(idcolis,"abbbbaba")
      try {
        const response = await axios.get(
          `${API_URL}/reservation/getReservationColis/${idcolis}`, { headers: headers }
        );
        setNotifications(response.data);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des notifications :',
          error,
        );
      }
    };

    fetchNotifications();
  }, []);

  const handleAccept = id => {
    // Code pour accepter la demande
    const updatedNotifications = notifications.filter(
      notification => notification.id !== id,
    );
    setNotifications(updatedNotifications);
  };

  const handleReject = id => {
    // Code pour refuser la demande
    const updatedNotifications = notifications.filter(
      notification => notification.id !== id,
    );
    setNotifications(updatedNotifications);
  };
  const  Header = () => {
    const navigation = useNavigation();
  
    return (
      <View style={{backgroundColor:"#74b9ff",height:60}}>
      <Text style={{fontWeight:'400',color:"white",alignSelf:"center",top:15,fontSize: 20,}}>Notifications</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-left" size={22} color="#FFFF" style={{ top: 20, left: 10,top:-10 }} />
          </TouchableOpacity>
      </View>
    )
  
  
  }

  return (
    <View style={styles.container}>
       <Header></Header>

      {notifications.map(notification => (
        <View style={styles.notificationContainer} key={notification.id}>
          <Text style={styles.notificationText}>
            {notification.user_id} veut rejoindre ton covoiturage
          </Text>
          {!notification.accepte ? (
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.acceptButton]}
                onPress={() => handleAccept(notification.id)}>
                <Text style={styles.buttonText}>Accepter</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.rejectButton]}
                onPress={() => handleReject(notification.id)}>
                <Text style={styles.buttonText1}>Refuser</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.acceptedText}>Demande acceptée</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
 
  },
  backButton: {
    marginRight: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F7D712',
    marginBottom: 10,
  },
  notificationContainer: {
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  acceptButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  rejectButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonText1: {
    color: 'black',
    textAlign: 'center',
  },
  acceptedText: {
    color: '#1DB954',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

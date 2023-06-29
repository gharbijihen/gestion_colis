// import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
// import React from 'react'
 import Ionicons from 'react-native-vector-icons/SimpleLineIcons'
 import { useNavigation } from '@react-navigation/native';
export function Heade() {
    const navigation = useNavigation();
    return (
      <View style={{ alignContent: 'flex-start', backgroundColor: "#74b9ff", height: 60 }}>
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-left" size={22} color="#FFFF" style={{ top: 20, left: 10 }} />
          </TouchableOpacity>
  
          <Text style={{ alignSelf: 'center', top: 15, left: 28, fontSize: 24, fontWeight: '400', color: '#FFFF' }} > Notification</Text>
        </View>
      </View>
    )
  };

// export default function Notification({navigation}) {
//   return (
//     <View>
//       <Heade></Heade>
//       <View style={{width:400,borderColor: '#000',height:50 , borderWidth: 1, backgroundColor: '#fff',}}>
        
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     view: {
//         flex: 1,
//         alignSelf: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         height: 302,
//         width: 400,
//         borderRadius: 15,
//         justifyContent: 'center',
//         borderColor: '#000',
//         borderWidth: 1,
//         shadowRadius: 5.46,
//         elevation: 9,
//         borderColor: '#FFF',
//         marginVertical: 20


//     },
// })
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../helpers/Api';


const Notifications = ({navigation}) => {
  const [notifications, setNotifications] = useState([]);




  useEffect(() => {
      const value =  AsyncStorage.getItem('id');
  console.log(value);
    const fetchNotifications = async () => {
      try {
        const headers = {
          'Accept': 'application/json',
      }
        const response = await axios.get(
          `${API_URL}/reservations/getbyid/${value}`, { headers: headers }
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
    // console.log("Accepter la demande "${id}") 
    const updatedNotifications = notifications.filter(
      notification => notification.id !== id,
    );
    setNotifications(updatedNotifications);
  };

  const handleReject = id => {
    // Code pour refuser la demande
    console.log("Refuser la demande ${id}");
    const updatedNotifications = notifications.filter(
      notification => notification.id !== id,
    );
    setNotifications(updatedNotifications);
  };

  return (
    <View style={styles.container}>
      <Heade/>
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
    backgroundColor: 'White',
   
  },
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 60,
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

export default Notifications;

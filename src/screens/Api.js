import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon3 from 'react-native-vector-icons/Ionicons'
import Arrow from 'react-native-vector-icons/Octicons'
import AirplaneIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from "../components/Button";
import SelectDropdown from 'react-native-select-dropdown';


export default function Api() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const [selectedAirport, setSelectedAirport] = useState(null);


  useEffect(() => {
    getMoviesFromApiAsync()
  }, []);


  const getMoviesFromApiAsync = async () => {
    try {
      console.log("json")
      const response = await fetch(
        'https://8y04y.mocklab.io/json/1', {
        method: 'Get',
      }

      );
      const json = await response.json();
      var array = []
      for (let airport of json) {
        array.push(airport.name)

      }

      setData(array)
      console.log(json.name)

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>

          <Pressable onPress={() => setModalVisible(!modalVisible)}>

           
            <View style={[styles.modalView, { width: 400, height: 250 }]}>
            



                <SelectDropdown
                  data={data}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                  searchableError={() => <Text>No airport found</Text>}
                  defaultValue={selectedAirport}
                  search={true}
                  searchPlaceHolder={"FROM:Enter your destination"}
                  buttonStyle={[styles.inputtext, {  top: 70 }]}
                  searchInputStyle={{ paddingLeft: 10 }}

                />
                 <SelectDropdown
                  data={data}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                  searchableError={() => <Text>No airport found</Text>}
                  defaultValue={selectedAirport}
                  search={true}
                  searchPlaceHolder={"FROM:Enter your destination"}
                  buttonStyle={[styles.inputtext, {  top: 70 }]}
                  searchInputStyle={{ paddingLeft: 10 }}

                />



              

             

            </View>


          </Pressable>
        </View>
      </Modal>
      <Pressable style={{ top: -370, left: 120 }}
        onPress={() => setModalVisible(true)}>

        <Icon3 name='ios-search-circle' size={43} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    
  },
  modalView: {
    top: -350,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
   
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#C1C1C1',
    height: 50,
    width: 350,
    top: -350
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 45,
    textAlign: 'center',
    width: 300

  },
  inputtext: {
    height: 50,
    width: 380,
    borderColor: '#646464',
    borderWidth: 1,
    elevation: 9,
    shadowRadius: 5.46,
    backgroundColor: '#ffff',
    borderRadius: 15,
    paddingLeft: 40,
    shadowOpacity: 0.32,

  },
  icon: {
    position: "absolute",
    top: 60,
    alignSelf: "flex-start", left: 5
  },
  arrow: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 50,
    top: -20,
    left: 190,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    marginLeft: 30,
  },
  scrollView: {
    backgroundColor: 'transparent',
  


  },
});

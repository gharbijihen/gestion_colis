import { View, Text, StyleSheet, ScrollView ,ImageBackground, TextInput,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Arrow from 'react-native-vector-icons/Octicons'
import AirplaneIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateComponent from '../components/DateComponent';
import SliderComponent from '../components/SliderComponent';
import Button from '../components/Button';
import axios from 'axios';
import { API_URL } from '../helpers/Api';
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const AddScrenn = () => {
    const navigation = useNavigation()
    const [from, setfrom] = useState("")
    const [to, setto] = useState("")
    const [description, setdescription] = useState("")
    const [poids, setPoids] = useState(10);
    const [price, setPrice] = useState(10);
    const [data, setData] = useState([])

    const [selectedAirport, setSelectedAirport] = useState(null);

    const [dateAller, setDate1] = useState(new Date());
    const [dateRetour, setDate2] = useState(new Date());

    useEffect(() => {
        getMoviesFromApiAsync()
    }, []);

    const Addcolis = async (e) => {
        e.preventDefault();
        const value = await AsyncStorage.getItem('userId')
        console.log("aaaa",value)
        let data = {
          from:from,
          to:to,
          description:description,
          poidDispo:poids,
          price:price,
          date1:dateAller,
          date2:dateRetour,
          userId:value,
        };
        console.log(data)
        const headers = {
          'Accept': 'application/json',
        }

        try {
          const response = await axios.post(`${API_URL}/colis/add`, data, { headers: headers })
          console.log(response.data)
            if(response.data.message=== "colis Created")
            { ToastAndroid.showWithGravityAndOffset(
                'colis Created!',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            ); 
            navigation.navigate('Home')
        // Alert.alert("your colis is created")
            }else if(response.data.message === "passport dosn't exist"){
                Alert.alert("verify passport")
            }
        } catch (error) {
          console.log('error', error.message);
        };
      };
  

    const getMoviesFromApiAsync = async () => {
        try {
            console.log("json")
            const response = await fetch(
                'https://kg5w9.mocklab.io/json/1', {
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
        <ImageBackground source={require("../assets/22.png")} resizeMode="cover" style={styles.image}>
            <ScrollView style={styles.scrollView}>
                <View style={
                    {
                        backgroundColor: '#fff',
                        width: '85%',
                        height: 600,
                        borderRadius: 15,
                        justifyContent: 'center',// Centre verticalement
                        alignItems: 'center', // Centre horizontalement
                        marginLeft: 4

                    }}>
                    <View style={{
                        alignItems: 'center', top: 140
                    }}>
                        <SelectDropdown
                            data={data}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                                setfrom(selectedItem)
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
                            buttonStyle={[styles.inputtext, { marginBottom: 15 }]}
                            searchInputStyle={{ paddingLeft: 10 }}

                        />


                        <AirplaneIcon name="airplane-takeoff" size={24} style={styles.icon} color="#000" />

                        <SelectDropdown
                            data={data}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                                setto(selectedItem)

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
                            buttonStyle={[styles.inputtext, { marginBottom: 15 }]}
                            searchInputStyle={{ paddingLeft: 10 }}

                        />

                        <AirplaneIcon name="airplane-landing"
                            size={24} color="#000" style={[styles.icon, { top: 85 }]} />
                        <View style={styles.arrow} >
                            <Arrow name="arrow-switch"
                                size={24} color="#000"
                                style={{ transform: [{ rotate: '90deg' }], }} />

                        </View>

                    </View>
                    <View style={{ top: 130 }}>
                        <DateComponent dateAller={dateAller} dateRetour={dateRetour} setDate1={setDate1}setDate2={setDate2}></DateComponent>
                    </View>
                    <View style={{ top: -40, marginVertical: 180 }}>
                        <SliderComponent price={price} poids={poids} setPoids={setPoids} setPrice={setPrice} />

                        <TextInput placeholder="Description" multiline
                            maxLength={1300} onChangeText={txt => setdescription(txt)}
                            value={description}
                            style={{
                                height: 50,
                                margin: 20,
                                borderWidth: 1,
                                borderColor: '#8C8C8C',
                                borderRadius: 15
                            }}>

                        </TextInput>

                        <Button bgcolor={"#81C6ED"} btnLabel={"ADD"}
                            width={150} Top={80} left={15} press={Addcolis}
                        />

                    </View>

                </View>
            </ScrollView>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'transparent',
        flex:1,
        top:30
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '110%',
        marginLeft: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff'

    },

    inputtext: {

        height: 50,
        width: 280,
        borderColor: '#646464',
        borderWidth: 1,
        elevation: 9,
        shadowRadius: 5.46,
        backgroundColor: '#ffff',
        borderRadius: 15,
        paddingLeft: 40,
        shadowOpacity: 0.32,
        top:10
    },
    icon: {
        position: "absolute",
        top: 20,
        alignSelf: "flex-start", left: 10
    },
    arrow: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 50,
        top: -80,
        left: 90,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        marginLeft: 30,
    }

})

export default AddScrenn
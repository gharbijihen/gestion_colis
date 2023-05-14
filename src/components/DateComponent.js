import React, { useState } from "react";

import { SafeAreaView, StyleSheet,  TextInput,Text, Button, View, ImageBackground } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import SearchScrenn from "../screens/SearchScrenn";
//import { TextInput } from "react-native-paper";

export default function DateComponent({dateAller,dateRetour,setDate1,setDate2}) {

    const [datePicker, setDatePicker] = useState(false);



    const [timePicker, setTimePicker] = useState(false);

    const [time, setTime] = useState(new Date(Date.now()));

    function showDatePicker() {
        setDatePicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    function onDateSelected1(event, value) {
        setDate1(value);
        setDatePicker(false);
    };
    function onDateSelected2(event, value) {
        setDate2(value);
        setDatePicker(false);
    };
    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };

    return (
        <View style={
            {

                justifyContent: 'center',// Centre verticalement
                alignItems: 'center', // Centre horizontalement
                top: 0,
                left: 0,



            }}>

            {datePicker && (
                <DateTimePicker
                    value={dateAller}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected1}

                />)}
            {datePicker && (
                <DateTimePicker
                    value={dateRetour}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected2}

                />
            )}

            {timePicker && (
                <DateTimePicker
                    value={time}
                    mode={'time'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={false}
                    onChange={onTimeSelected}

                />
            )}

            {!datePicker && (
                <View>
                    <View Style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>


                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Button title={dateAller.toDateString()} style={styleSheet.button} onPress={showDatePicker}  ></Button>
                        <Button title={dateRetour.toDateString()} onPress={showDatePicker} ></Button>
                    </View>


                </View>
            )}

            {!timePicker && (
                <View style={{ margin: 10 }}>
                    <Button style={styleSheet.button} title={time.toLocaleTimeString('en-US')} onPress={showTimePicker} />
                    
                </View>

            )}


        </View>


    );
}

const styleSheet = StyleSheet.create({

    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    text: {
        fontSize: 14,
        color: '#C1C1C1',
        marginBottom: 10,


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
    data: {
        borderColor: '#646464',
        borderWidth: 1,
        elevation: 9,
        shadowRadius: 5.46,
        backgroundColor: '#ffff',
        borderRadius: 20,
        paddingLeft: 40,
        shadowOpacity: 0.32,
    },

    button: {
        color:'# fff'
        




    },




});
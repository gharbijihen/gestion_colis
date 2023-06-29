import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'

export const CardsItem = ({ car, onUpdate, onDelete }) => {
    const [showButtons, setShowButtons] = useState(false);

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };

    const handleUpdate = () => {
        onUpdate(car.id);
    };

    const handleDelete = () => {
        onDelete(car.id);
    };

    return (
        <TouchableOpacity onPress={toggleButtons}>
            <View style={styles.car}>
                <View style={styles.carInfo}>

                </View>
                {showButtons && (
                    <View style={styles.buttonContainer}>
                        <Button title="Update" onPress={handleUpdate} />
                        <Button title="Delete" onPress={handleDelete} />
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const HalfButton = ({ cars, onUpdate, onDelete,navigation }) => {
    const [showButtons, setShowButtons] = useState(false);
    const toggleButtons = () => {
        setShowButtons(!showButtons);
      };

    return (
        <View>
            <TouchableOpacity onPress={toggleButtons} >
                <Icon1 name="options-vertical" size={24} style={{ left: 144, top: 18 }} />
            </TouchableOpacity>
        
            {showButtons && (
        <View>
         
            <CardsItem  />
          
        </View>
      )}
        </View>
    );
};

const styles = StyleSheet.create({
    car: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
       
    },
    carInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:"#C1C1C"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default HalfButton;

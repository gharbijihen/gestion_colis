import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearColorButton = ({ onPress, title, colors }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient colors={colors} style={{ borderRadius: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', padding: 10 }}>
        {title}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default LinearColorButton;

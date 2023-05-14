import {
  Animated,
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  viewAnimated: {
    width: 370,
  },
  viewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
});
export function ModalScreen({ navigation }) {
 
 

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={[
          {
            height: 300,
           top:170
          },
          styles.viewAnimated,
        ]}>
        <View style={styles.viewContainer}>
          <Text style={{ alignSelf: 'center',fontWeight:"bold",fontSize:20}}>
            Please verify your identity 
          </Text>
          <Icon></Icon>
          <Button
            style={{ marginTop: 40 }}
            mode="contained"
            onPress={navigation.goBack}>
            Cancel
          </Button>
        </View>
      </Animated.View>
    </View>
  );
}
export default ModalScreen;

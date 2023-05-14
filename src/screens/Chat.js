
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat() {
  
  
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  };



  return (
    <View style={styles.container}>

      
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{ _id: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

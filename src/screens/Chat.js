import { SafeAreaView } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper';
import * as React from 'react';

import { GiftedChat, Message } from "react-native-gifted-chat"

import Icon from 'react-native-vector-icons/Feather'

export default function Chat() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);



  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Icon name="log-out" size={24} color={'#707991'} style={{ marginRight: 10 }} />
      </TouchableOpacity>
      <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />

      <GiftedChat/>


      
    </SafeAreaView>
  )
}

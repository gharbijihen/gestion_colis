import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hey, comment ça va ?',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Jane Doe',
    message: 'Salut, ça roule ?',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '3',
    name: 'Bob Smith',
    message: 'Je suis occupé pour le moment.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const ChatRoom = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = text => {
    setSearchQuery(text);
    const newData = DATA.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatRoom', {user: item})}>
      <Image style={styles.avatar} source={{uri: item.image}} />
      <View style={styles.chatInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher un utilisateur"
        onChangeText={handleSearch}
        value={searchQuery}
        placeholderTextColor="#000"
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#C1C1C1',
    color: 'white',
    borderColor: '#C1C1C1',
    borderRadius: 20,
    marginBottom: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#56B8D1',
  },
  message: {
    color: 'black',
  },
});
export default ChatRoom;
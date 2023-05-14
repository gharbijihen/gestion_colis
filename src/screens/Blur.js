// import React, { Component } from "react";
// import { View, Image, Text, StyleSheet } from "react-native";
// import { BlurView } from "@react-native-community/blur";

// export default function Menu() {
//   return (
//     <View style={styles.container}>
//       <Image
//         key={'blurryImage'}
//         source={{ uri }}
//         style={styles.absolute}
//       />
//       <Text style={styles.absolute}>Hi, I am some blurred text</Text>
//       {/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}
//       <BlurView
//         style={styles.absolute}
//         blurType="light"
//         blurAmount={10}
//         reducedTransparencyFallbackColor="white"
//       />
//       <Text>I'm the non blurred text because I got rendered on top of the BlurView</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   absolute: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0
//   }
// });
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';

export default function SearchBar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => setIsSearchActive(true)}
      >
        {isSearchActive ?
          <BlurView style={styles.searchInputContainer} blurType="light" blurAmount={10}>
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher"
              onChangeText={setSearchText}
            />
          </BlurView>
          :
          <View style={styles.background} > 
      
          </View>
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    height: 50,
    width: 300,
    borderRadius: 25,
    overflow: 'hidden',
  },
  searchInputContainer: {
    flex: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 50,
    width: '100%',
    fontSize: 18,
  },
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Text, Platform} from 'react-native';
 
import { TabNavigator } from "react-navigation";
 
class HomeClassActivity extends React.Component {
 
  static navigationOptions = {
 
    tabBarLabel: 'Home',
 
  };
 
  render() {
 
    return(
 
               <Text style={styles.TextStyle}>This is Home Activity.</Text>
 
    ); 
}
 
}
 
class SubjectClassActivity extends React.Component {
 
  static navigationOptions = {
    
        tabBarLabel: 'Subject',
        
      };
 
    render() {
 
      return(
 
              <Text style={styles.TextStyle}>This is Subject Activity.</Text>
 
      ); 
 
    }
 
  }
 
  class CategoryClassActivity extends React.Component {
    
      static navigationOptions = {
        
            tabBarLabel: 'Category'
            
          };
    
      render() {
    
        return( 
    
                <Text style={styles.TextStyle}>This is Category Activity.</Text>
      
        ); 
    
      }
    }
 
    const Mainproject = TabNavigator({
      
        Home: { screen: HomeClassActivity },
        
        Subject: { screen: SubjectClassActivity },
      
        Category: { screen: CategoryClassActivity },
          
      },
      
      {
        tabBarOptions: {
          activeTintColor: '#fff',
 
          labelStyle: {
            fontSize: 14,
          },
          style: {
            backgroundColor: '#009688',
          },
        }
      });
 
const styles = StyleSheet.create({
 
   TextStyle :{
 
    fontSize: 25,
    color: "#000",
    textAlign : 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
 
});
 

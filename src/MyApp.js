import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,
  Pressable, Button, TextInput, KeyboardAvoidingView, Platform,
  ScrollView

 } from 'react-native'

import Cell from './components/Cell'

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator();

class MyApp extends Component { 
  render(){
    return (     
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    )
  }

}
 

export default MyApp;
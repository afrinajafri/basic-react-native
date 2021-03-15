import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,
  Pressable, Button, TextInput, KeyboardAvoidingView, Platform,
  ScrollView

 } from 'react-native'

import MyApp from './src/MyApp'

class App extends Component {

  render(){

    return(
    <NavigationContainer>
    <MyApp>

    </MyApp>
   </NavigationContainer>
    )
    
  }
}
 

export default App;
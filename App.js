import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View , Image} from 'react-native'; 

import Cell from './src/components/Cell'

class App extends Component{
  

  constructor(props){
    super(props);
    
    this.state = {
      text: 'abc',
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <Text>{this.state.text}</Text>
        
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
    </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

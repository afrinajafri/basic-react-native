import React, { Component } from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'; 

export default class Cell extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', backgroundColor: 'grey',}}>

        
                <Text style={{fontSize:18}}>Hello World!</Text>
                <Image
                style={{width:50, height:50, marginRight:12}}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
                />
                <Text>Hello World!</Text>
                <Text>Hello World!</Text> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

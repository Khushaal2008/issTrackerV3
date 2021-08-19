import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MeteorScreen extends React.Component{
    render(){
        return(
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Meteor Screen</Text>
            </View>
        )
    }
}
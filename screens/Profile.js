import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.textMsg}>Sorry but this page is not updated yet :( Kindly check out the upcoming versions of this app</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor:"lightblue",
        justifyContent:"center",
    },
    textMsg:{
        margin:20,
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
    },
})
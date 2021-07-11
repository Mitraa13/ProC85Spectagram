import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends Component {

  checkIfLoaded = () => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.navigation.navigate('DashboardScreen')
      }else{
        this.props.navigation.navigate('LoginScreen')
      }
    })
  }

  componentDidMount(){
    this.checkIfLoaded()
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size='large'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

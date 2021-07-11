import * as React from "react";
//import { NavigationContainer } from "@react-navigation/native";
//import DrawerNavigator from "./navigation/DrawerNavigator";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import firebase  from "firebase";
import { firebaseConfig } from "./config";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else{
  firebase.app()
}

export default function App() {
  return (
      <AppContainer />
  );
}

const SwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
})

const AppContainer = createAppContainer(SwitchNavigator);
